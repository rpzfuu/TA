<script setup lang="ts">
import { ref } from "vue";

import RequestAPI from "@/utils/RequestAPI";
import Toast from "@/utils/Toast";

const props = defineProps<{
    nik: any;
    temuan?: any;
}>();

const modal = ref();

const showModal = () => {
    modal.value?.showModal();
};

defineExpose({
    showModal,
});

const form = ref<{
    nik: any;
    rekomendasi: Array<{}>;
}>({
    nik: props.nik,
    rekomendasi: [],
});
const emits = defineEmits(["refresh"]);

const inputTindakLanjut = async () => {
    try {
        form.value.rekomendasi = props.temuan.rekomendasi;
        const res = await RequestAPI.inputTindakLanjut({ data: form.value });
        Toast.showSuccess(res.message);
        emits("refresh");
        modal.value?.close();
    } catch (e: any) {
        Toast.showError(String(e.message));
    }
};
</script>

<template>
    <dialog ref="modal" id="modalUpdateTemuan" class="modal">
        <div class="w-11/12 max-w-5xl modal-box">
            <h3 class="text-lg font-bold">Masukkan Tindak Lanjut</h3>
            <p class="py-4">Isi informasi untuk mengisi tindak lanjut</p>

            <form @submit.prevent="inputTindakLanjut()">
                <div
                    v-for="(rekomendasi, index) in temuan?.rekomendasi"
                    :key="index"
                    class="mb-4 form-control"
                >
                    <label class="label">
                        <span class="label-text"
                            >Rekomendasi {{ index + 1 }}</span
                        >
                    </label>
                    <div class="flex items-center">
                        <input
                            :value="rekomendasi.rekomendasi"
                            readonly
                            class="justify-center w-full input input-bordered items"
                        />
                    </div>

                    <label class="label">
                        <span class="label-text"
                            >Tindak Lanjut {{ index + 1 }}</span
                        >
                    </label>
                    <div class="flex items-center">
                        <input
                            required
                            v-model="rekomendasi.tindak_lanjut"
                            :placeholder="'Isi tindak lanjut ' + (index + 1)"
                            class="justify-center w-full input input-bordered items"
                        />
                    </div>
                </div>

                <div class="modal-action">
                    <button type="submit" class="text-white btn btn-info">
                        <v-icon name="hi-external-link" />
                        Tindak Lanjut
                    </button>
                    <form method="dialog" class="z-50 modal-backdrop">
                        <button class="btn">
                            <v-icon name="hi-x" /> Close
                        </button>
                    </form>
                </div>
            </form>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button></button>
        </form>
    </dialog>
</template>
