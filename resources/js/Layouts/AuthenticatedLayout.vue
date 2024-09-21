<script setup lang="ts">
import { PageProps } from "@/types";
import RequestAPI from "@/utils/RequestAPI";
import { Link, usePage } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";

const { auth } = usePage().props as any as PageProps;

const notifikasi = ref<{
    state: "initial" | "loading" | "success" | "error" | "saving";
    message: any;
    data: any;
    notification_count: any;
}>({
    state: "initial",
    message: "",
    data: "",
    notification_count: 0,
});

const getNotifikasi = async () => {
    try {
        const form = ref({
            nik: auth.user?.nik,
            is_spi: auth.user?.is_spi,
        });
        const res = await RequestAPI.getNotifikasi({
            data: form.value,
        });

        notifikasi.value = {
            ...notifikasi.value,
            state: "success",
            message: res.message,
            data: res.data || [],
            notification_count: res.notification_count,
        };
    } catch (e: any) {
        notifikasi.value.state = "error";
        notifikasi.value.message = String(e.message);
    }
};

const readNotifikasi = async (notifikasi_id: number) => {
    try {
        const form = ref({ notifikasi_id: notifikasi_id });
        await RequestAPI.readNotifikasi({
            data: form.value,
        });
    } catch (e: any) {}
};
const readAllNotifikasi = async () => {
    try {
        const form = ref({
            kode_unit: auth.user.karyawan.kode_unit,
            kode_bagian: auth.user.karyawan.sub_unit,
            is_spi: auth.user?.is_spi,
        });
        await RequestAPI.readAllNotifikasi({
            data: form.value,
        });
        notifikasi.value.notification_count = 0;
        for (const notif of notifikasi.value.data) {
            if (!notif.read) {
                notif.read = true;
            }
        }
    } catch (e: any) {}
};

const formatTime = (date: string): string => {
    const now = dayjs();
    const createdAt = dayjs(date);
    const diffHours = now.diff(createdAt, "hour");

    if (diffHours < 1) {
        const diffMinutes = now.diff(createdAt, "minute");
        return `${diffMinutes} menit yang lalu`;
    } else if (diffHours < 24) {
        return `${diffHours} jam yang lalu`;
    } else {
        const diffDays = now.diff(createdAt, "day");
        return `${diffDays} hari yang lalu`;
    }
};
onMounted(() => {
    getNotifikasi();
});
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <Link
                as="button"
                class="text-xl btn btn-ghost"
                :href="route('dashboard.index')"
                ><img
                    src="assets\img\loginlogo.png"
                    alt=""
                    class="h-12"
                />TindakAudit</Link
            >
        </div>
        <div class="flex-none">
            <span>{{ auth.user?.karyawan.nama }} - {{ auth.user?.nik }} </span>
            <div class="dropdown dropdown-end z-[9999]">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle"
                >
                    <div class="indicator">
                        <v-icon name="hi-bell" class="text-xl" />
                        <span
                            class="text-white badge badge-sm badge-error indicator-item"
                            v-if="notifikasi.notification_count > 0"
                            >{{ notifikasi.notification_count }}</span
                        >
                    </div>
                </div>
                <div
                    tabindex="0"
                    class="mt-3 shadow-xl card card-compact dropdown-content bg-base-100 w-80"
                >
                    <div class="p-4 card-body">
                        <div class="overflow-y-auto max-h-64">
                            <div
                                class="text-center"
                                v-if="
                                    !notifikasi.data ||
                                    notifikasi.data.length == 0
                                "
                            >
                                Tidak Ada Notifikasi
                            </div>
                            <div
                                v-else
                                class="flex items-center space-x-3"
                                v-for="(notif, index) in notifikasi.data"
                                :key="index"
                            >
                                <Link
                                    as="button"
                                    :href="route('temuan.index')"
                                    @click="readNotifikasi(notif.id)"
                                    class="flex items-center w-full p-2 space-x-3 transition duration-200 ease-in-out bg-white rounded hover:bg-gray-100"
                                >
                                    <div class="flex-shrink-0">
                                        <v-icon
                                            name="hi-bell"
                                            :class="
                                                notif.read
                                                    ? 'text-gray-400'
                                                    : 'text-blue-400'
                                            "
                                            class="text-2xl"
                                        />
                                    </div>

                                    <div class="flex-1 text-left">
                                        <p class="text-sm text-gray-400">
                                            {{ notif.message }}
                                        </p>
                                        <p class="font-bold text-gray-800">
                                            {{ notif.temuan?.temuan }}
                                        </p>

                                        <p class="text-xs text-gray-400">
                                            {{ formatTime(notif.created_at) }}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <template
                            v-if="
                                !notifikasi.data || notifikasi.data.length == 0
                            "
                        ></template>
                        <div v-else>
                            <button
                                @click="readAllNotifikasi()"
                                type="button"
                                class="w-full btn"
                            >
                                Tandai Baca Semua
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-10 rounded-full">
                        <img
                            :src="
                                auth.user.karyawan.jenkel == 'Male'
                                    ? 'https://xsgames.co/randomusers/avatar.php?g=male'
                                    : 'https://xsgames.co/randomusers/avatar.php?g=female'
                            "
                        />
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    <li>
                        <Link as="button" :href="route('profile.index')">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link as="button" :href="route('logout')" method="post"
                            >Logout</Link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex min-h-screen">
        <aside class="bg-white shadow-lg w-72">
            <div class="flex flex-col p-4">
                <nav class="space-y-4">
                    <Link
                        as="button"
                        :href="route('dashboard.index')"
                        :class="{
                            'w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg':
                                route().current('dashboard.index'),
                            'w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg':
                                !route().current('dashboard.index'),
                        }"
                    >
                        <v-icon name="hi-home" />
                        <span class="font-medium">Dashboard</span>
                    </Link>
                    <Link
                        as="button"
                        :href="route('temuan.index')"
                        :class="{
                            'w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg':
                                route().current('temuan.index'),
                            'w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg':
                                !route().current('temuan.index'),
                        }"
                    >
                        <v-icon name="hi-document-text" />
                        <span class="font-medium">
                            <template v-if="auth.user.is_spi"
                                >Input Temuan</template
                            ><template v-else>Input Tindak Lanjut</template>
                        </span>
                    </Link>
                    <Link
                        as="button"
                        :href="route('validasi.index')"
                        :class="{
                            'w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg':
                                route().current('validasi.index'),
                            'w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg':
                                !route().current('validasi.index'),
                        }"
                    >
                        <v-icon name="hi-clipboard-check" />
                        <span class="font-medium"
                            ><template v-if="auth.user.is_spi"
                                >Validasi bukti</template
                            ><template v-else>Cek Validasi</template>
                        </span>
                    </Link>
                </nav>
            </div>
        </aside>
        <div class="w-full p-10 bg-gray-200 rounded-tl-lg">
            <header v-if="$slots.header">
                <slot name="header" />
            </header>
            <slot class="bg-gray-100" />
        </div>
    </div>
</template>
<style>
.custom .vs__search::placeholder,
.custom .vs__dropdown-toggle,
.custom .vs__dropdown-menu {
    border: none;
}
.custom .vs__search:focus {
    width: 100%;
}
.custom .vs__search:not(:focus) {
    width: 0%;
}
</style>
