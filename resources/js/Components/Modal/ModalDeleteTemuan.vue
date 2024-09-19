<template>
    <dialog ref="modal" id="showDeleteTemuanModal" class="modal">
        <div
            class="items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box"
        >
            <v-icon name="hi-trash" class="mb-4 text-error" scale="4"></v-icon>
            <h3 class="mb-2 text-2xl font-extrabold text-error">
                Hapus Temuan
            </h3>
            <p class="mb-4 text-gray-600 text-md">
                Apakah anda yakin ingin menghapus temuan ini?
            </p>
            <div class="w-full p-4 mb-4 bg-gray-100 rounded-lg shadow-inner">
                <p class="mb-2 text-sm text-left text-gray-700">
                    <span class="font-bold">Temuan: </span>{{ temuan?.temuan }}
                </p>
                <p class="mb-2 text-sm text-left text-gray-700">
                    <span class="font-bold">Rekomendasi: </span>
                    <template
                        v-for="(rekomendasi, index) in temuan?.rekomendasi"
                        ><br
                            v-if="index < rekomendasi.rekomendasi.length - 1"
                        />{{ index + 1 }}.
                        {{ rekomendasi?.rekomendasi }}</template
                    >
                </p>
                <p
                    v-if="temuan?.unit_usaha.kode_unit == '4R00'"
                    class="mb-2 text-sm text-left text-gray-700"
                >
                    <span class="font-bold">Tujuan Unit/Bagian: </span>
                    {{ temuan?.bagian.name }}
                </p>
                <p v-else class="mb-2 text-sm text-left text-gray-700">
                    <span class="font-bold">Tujuan Unit/Bagian: </span>
                    {{ temuan?.unit_usaha.nama_unit }}
                </p>
                <p class="mb-2 text-sm text-left text-gray-700">
                    <span class="font-bold">Status: </span>{{ temuan?.status }}
                </p>
            </div>

            <div class="flex justify-center space-x-4 modal-action">
                <form @submit.prevent="deleteTemuan" class="flex-1">
                    <button class="w-full px-6 py-2 text-white btn btn-error">
                        Ya, Hapus!
                    </button>
                </form>
                <form method="dialog" class="flex-1">
                    <button class="w-full px-6 py-2 btn">
                        Tidak, Simpan Saja
                    </button>
                </form>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
<script lang="ts" setup>
import RequestAPI from "@/utils/RequestAPI";
import Toast from "@/utils/Toast";
import { ref } from "vue";

const props = defineProps<{ temuan?: any; nik: any }>();

const modal = ref();
const showModal = () => {
    modal.value?.showModal();
};
defineExpose({
    showModal,
});
const emits = defineEmits(["refresh"]);
const deleteTemuan = async () => {
    try {
        const res = await RequestAPI.deleteTemuan({ data: props.temuan });
        Toast.showSuccess(res.message);
        emits("refresh");
        modal.value?.close();
    } catch (e: any) {
        Toast.showError(String(e.message));
    }
};
</script>
