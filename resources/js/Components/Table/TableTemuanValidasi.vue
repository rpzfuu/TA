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
                            <template v-if="item.status == 'Menunggu Validasi'"
                                ><button
                                    class="btn btn-square btn-outline btn-success hover:text-white group"
                                    @click="showValidasiModal(item)"
                                >
                                    <v-icon
                                        name="hi-clipboard-check"
                                        class="group-hover:text-white"
                                    /></button
                            ></template>
                        </div>
                    </template>
                    <template v-else
                        ><div class="flex items-center gap-2">
                            <template v-if="item.status == 'Divalidasi'"
                                ><button
                                    class="btn btn-square btn-outline btn-success hover:text-white group"
                                    @click="showCekValidasiModal(item)"
                                >
                                    <v-icon
                                        name="hi-clipboard-check"
                                        class="group-hover:text-white"
                                    /></button
                            ></template></div
                    ></template>
                </td>
            </tr>
        </tbody>
    </table>
    <ModalHistoryTemuan ref="modalHistory" :temuan_id="selectedTemuanId" />
    <ModalValidasi
        ref="modalValidasi"
        :temuan="itemToValidasi"
        :nik="props.user.nik"
        @refresh="getTemuanValidasi()"
    ></ModalValidasi>
    <ModalCekValidasi
        ref="modalCekValidasi"
        :nik="props.user.nik"
        :temuan="itemToCekValidasi"
        @refresh="getTemuanValidasi()"
    ></ModalCekValidasi>
</template>
<script lang="ts" setup>
import RequestAPI from "@/utils/RequestAPI";
import { onMounted, ref } from "vue";
import ModalHistoryTemuan from "../Modal/ModalHistoryTemuan.vue";
import ModalValidasi from "../Modal/ModalValidasi.vue";
import ModalCekValidasi from "../Modal/ModalCekValidasi.vue";

const props = defineProps<{ user: any }>();

const modalCekValidasi = ref();
const itemToCekValidasi = ref();
const showCekValidasiModal = (item: any) => {
    itemToCekValidasi.value = item;
    modalCekValidasi.value.showModal();
};

const selectedTemuanId = ref();
const modalHistory = ref();
const openModalWithTemuan = (temuanId: any) => {
    selectedTemuanId.value = temuanId;
    modalHistory.value.showModal();
};

const modalValidasi = ref();
const itemToValidasi = ref();
const showValidasiModal = (item: any) => {
    itemToValidasi.value = item;
    modalValidasi.value.showModal();
};

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

const form = ref<{
    is_spi: any;
    kode_unit: any;
    bagian: any;
}>({
    is_spi: props.user.is_spi,
    kode_unit: props.user.karyawan.kode_unit,
    bagian: props.user.karyawan.sub_unit,
});

const getTemuanValidasi = async () => {
    try {
        const res = await RequestAPI.getTemuanValidasi({ data: form.value });
        temuan.value = {
            ...temuan.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        temuan.value.state = "error";
        temuan.value.message = String(e.message);
    }
};

onMounted(() => {
    getTemuanValidasi();
});
</script>
