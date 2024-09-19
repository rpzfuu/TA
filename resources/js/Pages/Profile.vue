<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/vue3";
import { usePage } from "@inertiajs/vue3";

const { auth } = usePage().props as any as PageProps;

function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
}
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800">
                Profile Information
            </h2>
        </template>

        <div class="w-full mx-auto space-y-6">
            <div class="p-6 bg-white shadow sm:p-8 sm:rounded-lg">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                </h3>
                <div class="mt-5">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                NIK
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.nik }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.nama }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Gender
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.jenkel }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of Birth
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{
                                    formatDate(auth.user.karyawan.tanggal_lahir)
                                }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of Joining
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{
                                    formatDate(auth.user.karyawan.tanggal_masuk)
                                }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div class="p-6 bg-white shadow sm:p-8 sm:rounded-lg">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Job Information
                </h3>
                <div class="mt-5">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Position
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.jabatan }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Unit
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.unit_usaha.nama_unit }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Sub Unit
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.sub_unit }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Employee Group
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.egrup }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Sub Group
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ auth.user.karyawan.esubgrup }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
