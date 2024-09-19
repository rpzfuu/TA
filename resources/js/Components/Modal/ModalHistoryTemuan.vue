<template>
    <dialog ref="modal" class="modal">
        <div class="w-full max-w-4xl modal-box">
            <h3 class="mb-4 text-lg font-bold">Temuan History</h3>
            <p class="mb-4">Informasi Perubahan Serta Progres Terkait Temuan</p>

            <template v-if="temuanHistory.state == 'loading'"
                ><span
                    class="text-center loading loading-spinner loading-lg"
                ></span>
            </template>
            <div v-else>
                <div
                    v-for="(history, index) in temuanHistory?.data
                        .slice()
                        .reverse()"
                    :key="history.id"
                >
                    <!-- update -->
                    <div
                        v-if="history.action == 'update'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Diubah Oleh: {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <div class="mt-2 space-y-2">
                                <p>
                                    <span class="font-bold">Temuan: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.temuan
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Status: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.status
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Tujuan: </span>
                                    <span class="px-2 py-1 text-gray-700"
                                        ><template
                                            v-if="history?.kode_unit == '4R00'"
                                            >{{ history?.unit_usaha.nama_unit }}
                                            -
                                            {{ history?.bagian.name }}</template
                                        ><template v-else
                                            >{{ history?.unit_usaha.nama_unit }}
                                        </template></span
                                    >
                                </p>
                                <p>
                                    <span class="font-bold">Bidang: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.bidang.nama
                                    }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="space-y-2">
                                <div
                                    v-for="(
                                        rekomendasi, rekomIndex
                                    ) in history?.rekomendasi_history"
                                    :key="rekomendasi.id"
                                    class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"
                                >
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Rekomendasi {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.rekomendasi }}
                                        </p>
                                    </div>
                                    <span class="badge badge-outline">{{
                                        rekomendasi?.status
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- create -->
                    <div
                        v-if="history.action == 'create'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Dibuat Oleh: {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <div class="mt-2 space-y-2">
                                <p>
                                    <span class="font-bold">Temuan: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.temuan
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Status: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.status
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Tujuan: </span>
                                    <span class="px-2 py-1 text-gray-700"
                                        ><template
                                            v-if="history?.kode_unit == '4R00'"
                                            >{{ history?.unit_usaha.nama_unit }}
                                            -
                                            {{ history?.bagian.name }}</template
                                        ><template v-else
                                            >{{ history?.unit_usaha.nama_unit }}
                                        </template></span
                                    >
                                </p>
                                <p>
                                    <span class="font-bold">Bidang: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.bidang.nama
                                    }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="space-y-2">
                                <div
                                    v-for="(
                                        rekomendasi, rekomIndex
                                    ) in history?.rekomendasi_history"
                                    :key="rekomendasi.id"
                                    class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"
                                >
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Rekomendasi {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.rekomendasi }}
                                        </p>
                                    </div>
                                    <span class="badge badge-outline">{{
                                        rekomendasi?.status
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- send -->
                    <div
                        v-if="history.action == 'send'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Dikirim Oleh: {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                    </div>
                    <!-- send -->
                    <div
                        v-if="history.action == 'process'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Diproses Oleh:
                                    {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                    </div>
                    <!-- tindaklanjut-->
                    <div
                        v-if="history.action == 'tindaklanjut'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Ditindaklanjut Oleh:
                                    {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <div class="mt-2 space-y-2">
                                <p>
                                    <span class="font-bold">Temuan: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.temuan
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Status: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.status
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Tujuan: </span>
                                    <span class="px-2 py-1 text-gray-700"
                                        ><template
                                            v-if="history?.kode_unit == '4R00'"
                                            >{{ history?.unit_usaha.nama_unit }}
                                            -
                                            {{ history?.bagian.name }}</template
                                        ><template v-else
                                            >{{ history?.unit_usaha.nama_unit }}
                                        </template>
                                    </span>
                                </p>
                                <p>
                                    <span class="font-bold">Bidang: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.bidang.nama
                                    }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="space-y-2">
                                <div
                                    v-for="(
                                        rekomendasi, rekomIndex
                                    ) in history?.rekomendasi_history"
                                    :key="rekomendasi.id"
                                    class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"
                                >
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Rekomendasi {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.rekomendasi }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Tindak Lanjut {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.tindak_lanjut }}
                                        </p>
                                    </div>
                                    <span class="badge badge-outline">{{
                                        rekomendasi?.status
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- validation-->
                    <div
                        v-if="history.action == 'validation'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Divalidasi Oleh:
                                    {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <div class="mt-2 space-y-2">
                                <p>
                                    <span class="font-bold">Temuan: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.temuan
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Status: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.status
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Tujuan: </span>
                                    <span class="px-2 py-1 text-gray-700"
                                        ><template
                                            v-if="history?.kode_unit == '4R00'"
                                            >{{ history?.unit_usaha.nama_unit }}
                                            -
                                            {{ history?.bagian.name }}</template
                                        ><template v-else
                                            >{{ history?.unit_usaha.nama_unit }}
                                        </template>
                                    </span>
                                </p>
                                <p>
                                    <span class="font-bold">Bidang: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.bidang.nama
                                    }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="space-y-2">
                                <div
                                    v-for="(
                                        rekomendasi, rekomIndex
                                    ) in history?.rekomendasi_history"
                                    :key="rekomendasi.id"
                                    class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"
                                >
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Rekomendasi {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.rekomendasi }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold">
                                            Tindak Lanjut {{ rekomIndex + 1 }}:
                                        </p>
                                        <p class="px-2 py-1 text-gray-700">
                                            {{ rekomendasi?.tindak_lanjut }}
                                        </p>
                                    </div>
                                    <span class="badge badge-outline">{{
                                        rekomendasi?.status
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- checked-->
                    <div
                        v-if="history.action == 'checked'"
                        class="p-4 m-6 bg-white border rounded-lg shadow"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-lg font-bold">
                                    {{ formatDate(history?.created_at) }}
                                </h4>
                                <p class="text-sm text-gray-500">
                                    Dikonfirmasi Oleh:
                                    {{ history?.karyawan.nama }} -
                                    {{ history?.karyawan.nik }}
                                </p>
                            </div>
                            <span class="text-white badge badge-info">
                                {{ history?.keterangan }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <div class="mt-2 space-y-2">
                                <p>
                                    <span class="font-bold">Temuan: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.temuan
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Status: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.status
                                    }}</span>
                                </p>
                                <p>
                                    <span class="font-bold">Tujuan: </span>
                                    <span class="px-2 py-1 text-gray-700"
                                        ><template
                                            v-if="history?.kode_unit == '4R00'"
                                            >{{ history?.unit_usaha.nama_unit }}
                                            -
                                            {{ history?.bagian.name }}</template
                                        ><template v-else
                                            >{{ history?.unit_usaha.nama_unit }}
                                        </template>
                                    </span>
                                </p>
                                <p>
                                    <span class="font-bold">Bidang: </span>
                                    <span class="px-2 py-1 text-gray-700">{{
                                        history?.bidang.nama
                                    }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>Close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">
import RequestAPI from "@/utils/RequestAPI";
import { ref, defineProps, watch } from "vue";

const props = defineProps<{
    temuan_id: any;
}>();

watch(
    () => props.temuan_id,
    (newTemuanId) => {
        if (newTemuanId) {
            form.value.temuan_id = newTemuanId;
            getTemuanHistory();
        }
    }
);

const form = ref({
    temuan_id: "",
});

const getTemuanHistory = async () => {
    try {
        temuanHistory.value.state = "loading";
        const res = await RequestAPI.getTemuanHistory({
            data: form.value,
        });
        temuanHistory.value = {
            ...temuanHistory.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        temuanHistory.value.state = "error";
        temuanHistory.value.message = String(e.message);
    }
};

const temuanHistory = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: Array<{
        id: any;
        temuan_id: any;
        temuan: any;
        status: any;
        updated_at: any;
        created_at: any;
        changed_by: any;
        kode_unit: any;
        bidang_id: any;
        kode_bagian: any;
        keterangan: any;
        action: any;
        rekomendasi_history: Array<{
            id: any;
            temuan_history_id: any;
            rekomendasi: any;
            status: any;
            alasan: any;
            created_at: any;
            updated_at: any;
            rekomendasi_id: any;
            tindak_lanjut: any;
        }>;
        bidang: {
            id: any;
            nama: any;
            created_at: any;
            updated_at: any;
        };
        karyawan: {
            nik: any;
            nama: any;
            jabatan: any;
            kode_unit: any;
            sub_unit: any;
        };
        unit_usaha: {
            id: any;
            nama_grup_unit: any;
            nama_unit: any;
            kode_unit: any;
            kode_grup_unit: any;
        };
        bagian: {
            code: any;
            created_at: any;
            id: any;
            kode_unit: any;
            name: any;
            updated_at: any;
        };
    }>;
}>({
    state: "initial",
    message: "",
    data: [],
});

const modal = ref();
const showModal = () => {
    modal.value?.showModal();
};
defineExpose({
    showModal,
});

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
};
</script>
