<script setup lang="ts">
import { Head, useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const isPasswordHide = ref(true);

const form = useForm({
    nik: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => {
            form.reset("password");
        },
    });
};
</script>

<template>
    <Head title="Login" />
    <div class="h-screen bg-gray-100">
        <div class="flex flex-wrap w-full bg-white shadow-lg">
            <div class="w-1/3 h-screen p-8 bg-white">
                <div class="mb-8 text-center">
                    <img src="assets/img/loginlogo.png" class="h-32 mx-auto" />
                    <h1 class="text-2xl font-bold text-green-700">
                        WELCOME TO
                    </h1>
                    <h1 class="text-2xl font-bold text-green-700">
                        Sistem Monitoring Tindak Lanjut Audit
                    </h1>
                </div>
                <form class="space-y-7 form-control" @submit.prevent="submit">
                    <label
                        class="flex flex-col items-start input input-bordered"
                    >
                        <div class="flex items-center w-full">
                            <v-icon name="hi-identification" />
                            <input
                                type="text"
                                v-model="form.nik"
                                placeholder="NIK"
                                class="w-full border-none input input-bordered focus:!border-none"
                                autocomplete="nik"
                                autofocus
                                required
                            />
                        </div>
                        <span
                            class="mt-1 -ml-4 text-sm text-red-500"
                            v-if="form.errors.nik"
                        >
                            {{ form.errors.nik }}
                        </span>
                    </label>
                    <label
                        class="flex flex-col items-start input input-bordered"
                    >
                        <div class="flex items-center w-full">
                            <v-icon name="hi-lock-closed" />
                            <input
                                :type="isPasswordHide ? 'password' : 'text'"
                                v-model="form.password"
                                placeholder="Password"
                                class="w-full border-none input input-bordered focus:!border-none"
                                required
                            />
                            <button
                                type="button"
                                @click="
                                    () => (isPasswordHide = !isPasswordHide)
                                "
                                class=""
                            >
                                <v-icon
                                    :name="
                                        isPasswordHide ? 'hi-eye-off' : 'hi-eye'
                                    "
                                />
                            </button>
                        </div>
                        <span
                            class="mt-1 -ml-4 text-sm text-red-500"
                            v-if="form.errors.password"
                        >
                            {{ form.errors.password }}
                        </span>
                    </label>

                    <div class="flex items-center justify-between form-control">
                        <label class="cursor-pointer label">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-success [--chkfg:white]"
                                v-model="form.remember"
                            />
                            <span class="mx-5 text-green-700 label-text"
                                >REMEMBER ME</span
                            >
                        </label>
                    </div>
                    <div class="form-control">
                        <button
                            type="submit"
                            class="w-full text-white btn btn-success"
                        >
                            LOG IN
                        </button>
                    </div>
                </form>
            </div>
            <div class="w-2/3 h-screen">
                <img
                    src="/assets/img/loginbg.png"
                    class="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
</template>
