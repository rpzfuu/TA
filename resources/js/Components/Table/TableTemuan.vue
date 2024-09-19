<template>
    <table class="table w-full table-auto">
        <thead>
            <tr>
                <th class="p-4">No</th>
                <th class="p-4 text-center">Unit Usaha / Bagian</th>
                <th class="p-4">Temuan</th>
                <th class="p-4">Rekomendasi</th>
                <th class="p-4">Bidang</th>
                <th class="p-4 text-center">Status</th>
                <th class="p-4 text-center">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-if="temuan.state == 'initial' || temuan.state == 'loading'"
            ></tr>
            <tr v-else-if="!temuan.data || temuan.data.length === 0">
                <td colspan="100%" class="text-center">Tidak Ada Data</td>
            </tr>
            <tr
                v-else
                v-for="(item, index) in temuan.data"
                :key="index"
                class="hover"
            >
                <td class="p-4">{{ index + 1 }}</td>
                <td class="p-4">
                    <button
                        class="flex justify-start w-full btn btn-ghost !text-left"
                        @click="openModalWithTemuan(item.id)"
                    >
                        <div class="flex text-xs text-white badge badge-accent">
                            <template v-if="item.kode_unit == '4R00'">
                                <v-icon name="hi-office-building" />
                                Kantor
                            </template>
                            <template
                                v-else-if="
                                    item.unit_usaha.nama_unit.includes('KB ')
                                "
                            >
                                <v-icon name="co-plant" />
                                Kebun
                            </template>
                            <template
                                v-else-if="
                                    item.unit_usaha.nama_unit.includes('PB ')
                                "
                            >
                                <v-icon name="co-factory" />
                                Pabrik
                            </template>
                        </div>
                        <span v-if="item.kode_unit == '4R00'">
                            {{ item.bagian.name }}
                        </span>
                        <span v-else>
                            {{ item.unit_usaha.nama_grup_unit }}
                        </span>
                    </button>
                </td>
                <td class="p-4">
                    {{ item.temuan }}
                </td>
                <td class="p-4">
                    <template v-for="(rekomendasi, index) in item.rekomendasi">
                        {{ index + 1 }}. {{ rekomendasi.rekomendasi }}
                        <br v-if="index < item.rekomendasi.length - 1" />
                    </template>
                </td>
                <td class="p-4">
                    {{ item.bidang.nama }}
                </td>
                <td class="p-4 text-center">
                    {{ item.status }}
                </td>
                <td class="p-4 align-middle">
                    <template v-if="user.is_spi"
                        ><div class="flex items-center gap-2">
                            <button
                                :disabled="item.status != 'Draft'"
                                class="btn btn-square btn-outline btn-warning hover:text-white group"
                                @click="
                                    item.status == 'Draft'
                                        ? showUpdateTemuanModal(item)
                                        : null
                                "
                            >
                                <v-icon
                                    name="hi-refresh"
                                    class="group-hover:text-white"
                                />
                            </button>
                            <button
                                class="btn btn-square btn-outline btn-error hover:text-white group"
                                @click="showDeleteTemuanModal(item)"
                            >
                                <v-icon
                                    name="hi-trash"
                                    class="group-hover:text-white"
                                />
                            </button>
                            <template v-if="item.status == 'Draft'"
                                ><button
                                    class="btn btn-square btn-outline btn-secondary hover:text-white group"
                                    @click="showKirimDraftTemuanModal(item)"
                                >
                                    <v-icon
                                        name="co-send"
                                        class="group-hover:text-white"
                                    /></button
                            ></template>
                            <template v-if="item.status == 'Menunggu Validasi'"
                                ><Link
                                    as="button"
                                    :href="route('validasi.index')"
                                    class="btn btn-square btn-outline btn-primary hover:text-white group"
                                >
                                    <v-icon
                                        name="hi-external-link"
                                        class="group-hover:text-white" /></Link
                            ></template></div
                    ></template>
                    <template v-else>
                        <template v-if="item.status == 'Terbuka'">
                            <button
                                class="btn btn-square btn-outline btn-accent hover:text-white group"
                                @click="showProsesTemuanModal(item)"
                            >
                                <v-icon
                                    name="hi-bookmark"
                                    class="group-hover:text-white"
                                />
                            </button>
                        </template>
                        <template v-else-if="item.status == 'Sedang Diproses'">
                            <button
                                class="btn btn-square btn-outline btn-info hover:text-white group"
                                @click="showTindakLanjutModal(item)"
                            >
                                <v-icon
                                    name="hi-external-link"
                                    class="group-hover:text-white"
                                /></button
                        ></template>
                    </template>
                </td>
            </tr>
        </tbody>
    </table>

    <ModalDeleteTemuan
        :temuan="itemToDelete"
        :nik="props.user.nik"
        ref="modalDeleteTemuan"
        @refresh="getTemuan()"
    />
    <ModalUpdateTemuan
        @refresh="getTemuan()"
        v-model:diKlik="diKlik"
        :nik="props.user.nik"
        ref="modalUpdateTemuan"
        :temuan="itemToUpdate"
    />
    <ModalHistoryTemuan ref="modalHistory" :temuan_id="selectedTemuanId" />
    <ModalTindakLanjut
        @refresh="getTemuan()"
        :nik="props.user.nik"
        ref="modalTindakLanjut"
        :temuan="itemToTindakLanjut"
    />
    <ModalKirimDraftTemuan
        @refresh="getTemuan()"
        ref="modalKirimDraftTemuan"
        :temuan="itemToKirim"
        :nik="props.user.nik"
    />
    <ModalProsesTemuan
        @refresh="getTemuan()"
        ref="modalProsesTemuan"
        :temuan="itemToProses"
        :nik="props.user.nik"
    />
</template>
<script lang="ts" setup>
import RequestAPI from "@/utils/RequestAPI";
import { onMounted, ref, watch } from "vue";
import ModalDeleteTemuan from "../Modal/ModalDeleteTemuan.vue";
import ModalUpdateTemuan from "../Modal/ModalUpdateTemuan.vue";
import ModalHistoryTemuan from "../Modal/ModalHistoryTemuan.vue";
import ModalTindakLanjut from "../Modal/ModalTindakLanjut.vue";
import ModalKirimDraftTemuan from "../Modal/ModalKirimDraftTemuan.vue";
import ModalProsesTemuan from "../Modal/ModalProsesTemuan.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps<{ user: any }>();

const modalProsesTemuan = ref();
const itemToProses = ref();
const showProsesTemuanModal = (item: any) => {
    itemToProses.value = item;
    modalProsesTemuan.value.showModal();
};

const modalKirimDraftTemuan = ref();
const itemToKirim = ref();
const showKirimDraftTemuanModal = (item: any) => {
    itemToKirim.value = item;
    modalKirimDraftTemuan.value.showModal();
};

const modalTindakLanjut = ref();
const itemToTindakLanjut = ref();
const showTindakLanjutModal = (item: any) => {
    itemToTindakLanjut.value = item;
    modalTindakLanjut.value.showModal();
};

const selectedTemuanId = ref();
const modalHistory = ref();
const openModalWithTemuan = (temuanId: any) => {
    selectedTemuanId.value = temuanId;
    modalHistory.value.showModal();
};

const modalDeleteTemuan = ref();
const itemToDelete = ref();
const showDeleteTemuanModal = (item: any) => {
    itemToDelete.value = item;
    modalDeleteTemuan.value.showModal();
};

const modalUpdateTemuan = ref();
const itemToUpdate = ref();
const showUpdateTemuanModal = (item: any) => {
    diKlik.value = true;
    itemToUpdate.value = item;
    modalUpdateTemuan.value.showModal();
};

const diSubmit = defineModel();

const diKlik = ref(false);

const temuan = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: Array<{
        id: any;
        created_by: any;
        temuan: any;
        kode_unit: any;
        status: any;
        rekomendasi: Array<{
            id: any;
            temuan_id: any;
            rekomendasi: any;
            created_at: any;
            updated_at: any;
            status: any;
            alasan: any;
            tindak_lanjut: any;
        }>;
        unit_usaha: {
            id: any;
            kode_unit: any;
            nama_unit: any;
            kode_grup_unit: any;
            nama_grup_unit: any;
            is_saturday_on: boolean;
            is_head_office: boolean;
            created_at: any;
            updated_at: any;
            is_active: boolean;
        };
        bidang: {
            id: any;
            nama: any;
            created_at: any;
            updated_at: any;
        };
        bagian: {
            id: any;
            name: any;
            code: any;
            created_at: any;
            kode_unit: any;
        };
        created_at: any;
        updated_at: any;
    }>;
}>({
    state: "initial",
    message: "",
    data: [
        {
            id: "",
            created_by: "",
            temuan: "",
            rekomendasi: [
                {
                    id: "",
                    temuan_id: "",
                    rekomendasi: "",
                    created_at: "",
                    updated_at: "",
                    status: "",
                    alasan: "",
                    tindak_lanjut: "",
                },
            ],
            kode_unit: "",
            status: "",
            created_at: "",
            updated_at: "",
            unit_usaha: {
                id: "",
                kode_unit: "",
                nama_unit: "",
                kode_grup_unit: "",
                nama_grup_unit: "",
                is_saturday_on: false,
                is_head_office: false,
                created_at: "",
                updated_at: "",
                is_active: false,
            },
            bidang: {
                id: "",
                nama: "",
                created_at: "",
                updated_at: "",
            },
            bagian: {
                id: "",
                name: "",
                code: "",
                created_at: "",
                kode_unit: "",
            },
        },
    ],
});

watch(
    () => diSubmit.value,
    (newValue) => {
        if (newValue === true) {
            getTemuan();
            diSubmit.value = false;
        }
    }
);

const form = ref<{
    is_spi: any;
    kode_unit: any;
    bagian: any;
}>({
    is_spi: props.user.is_spi,
    kode_unit: props.user.karyawan.kode_unit,
    bagian: props.user.karyawan.sub_unit,
});

const getTemuan = async () => {
    try {
        const res = await RequestAPI.getTemuan({ data: form.value });
        temuan.value = {
            ...temuan.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
        diSubmit.value = "false";
    } catch (e: any) {
        temuan.value.state = "error";
        temuan.value.message = String(e.message);
    }
};
onMounted(() => {
    getTemuan();
});
</script>
