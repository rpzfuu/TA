<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { ref } from "vue";

import ModalTambahTemuan from "@/Components/Modal/ModalTambahTemuan.vue";
import { PageProps } from "@/types";
import TableTemuan from "@/Components/Table/TableTemuan.vue";

const { auth } = usePage().props as any as PageProps;

const modalTambahTemuan = ref();
const showTambahTemuan = () => {
    modalTambahTemuan.value.showModal();
};

const diSubmit = ref(false);
</script>

<template>
    <Head title="Temuan" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800">
                Temuan
            </h2>
        </template>
        <div class="w-full px-5 py-10 bg-white border border-black rounded-lg">
            <h3 class="pb-5 font-medium">List Temuan</h3>
            <div v-if="auth.user.is_spi" class="flex">
                <button
                    @click="showTambahTemuan()"
                    class="ml-auto text-white btn btn-success"
                >
                    <v-icon name="hi-plus-circle" /><span>Tambah Temuan</span>
                </button>
            </div>

            <TableTemuan v-model="diSubmit" :user="auth.user" />
        </div>
    </AuthenticatedLayout>
    <ModalTambahTemuan
        v-model="diSubmit"
        :user="auth.user"
        ref="modalTambahTemuan"
    />
</template>
