<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";

import { PageProps } from "@/types";
import TableTemuanValidasi from "@/Components/Table/TableTemuanValidasi.vue";

const { auth } = usePage().props as any as PageProps;
</script>

<template>
    <Head title="Validasi" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800">
                Validasi
            </h2>
        </template>
        <div class="w-full px-5 py-10 bg-white border border-black rounded-lg">
            <h3 class="pb-5 font-medium">List Temuan</h3>
            <div v-if="auth.user.is_spi" class="flex"></div>

            <TableTemuanValidasi :user="auth.user" />
        </div>
    </AuthenticatedLayout>
</template>
