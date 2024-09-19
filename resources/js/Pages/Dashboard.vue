<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import RequestAPI from "@/utils/RequestAPI";
import { Head } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";

const getCountTemuan = async () => {
    try {
        const res = await RequestAPI.getCountTemuan();
        countTemuan.value = {
            ...countTemuan.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        countTemuan.value.state = "error";
        countTemuan.value.message = String(e.message);
    }
};
const getCountUnit = async () => {
    try {
        const res = await RequestAPI.getCountUnit();
        countUnit.value = {
            ...countUnit.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        countUnit.value.state = "error";
        countUnit.value.message = String(e.message);
    }
};
const getCountRekomendasi = async () => {
    try {
        const res = await RequestAPI.getCountRekomendasi();
        countRekomendasi.value = {
            ...countRekomendasi.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        countRekomendasi.value.state = "error";
        countRekomendasi.value.message = String(e.message);
    }
};

const getCountValidasi = async () => {
    try {
        const res = await RequestAPI.getCountValidasi();
        countValidasi.value = {
            ...countValidasi.value,
            state: "success",
            message: res.message,
            data: res.data,
        };
    } catch (e: any) {
        countValidasi.value.state = "error";
        countValidasi.value.message = String(e.message);
    }
};

const countTemuan = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: any;
}>({
    state: "initial",
    message: "",
    data: "",
});
const countUnit = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: any;
}>({
    state: "initial",
    message: "",
    data: "",
});

const countRekomendasi = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: any;
}>({
    state: "initial",
    message: "",
    data: "",
});

const countValidasi = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: any;
}>({
    state: "initial",
    message: "",
    data: "",
});

onMounted(() => {
    getCountTemuan();
    getCountUnit();
    getCountRekomendasi();
    getCountValidasi();
});
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        </template>
        <div class="grid grid-cols-2 gap-6">
            <div
                class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"
            >
                <div>
                    <p class="text-lg font-bold">Total Unit</p>
                    <p class="text-2xl font-bold">{{ countUnit.data }}</p>
                </div>
                <div class="flex justify-center">
                    <v-icon name="hi-chart-bar" scale="5" fill="green" />
                </div>
            </div>
            <div
                class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"
            >
                <div>
                    <p class="text-lg font-bold">Total Rekomendasi</p>
                    <p class="text-2xl font-bold">
                        {{ countRekomendasi.data }}
                    </p>
                </div>
                <div class="flex justify-center">
                    <v-icon name="fa-receipt" scale="5" fill="green" />
                </div>
            </div>
            <div
                class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"
            >
                <div>
                    <p class="text-lg font-bold">Total Temuan</p>
                    <p class="text-2xl font-bold">{{ countTemuan.data }}</p>
                </div>
                <div class="flex justify-center">
                    <v-icon name="hi-document-search" scale="5" fill="green" />
                </div>
            </div>
            <div
                class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"
            >
                <div>
                    <p class="text-lg font-bold">Total Validasi</p>
                    <p class="text-2xl font-bold">{{ countValidasi.data }}</p>
                </div>
                <div class="flex justify-center">
                    <v-icon name="hi-clipboard-check" scale="5" fill="green" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
