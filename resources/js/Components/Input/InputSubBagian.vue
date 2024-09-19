<template>
    <label class="flex items-center gap-2 input input-bordered">
        <input
            type="hidden"
            :disabled="state == 'saving' || state == 'loading'"
        />
        <v-select
            :disabled="state == 'saving' || state == 'loading'"
            :reduce="(item: any) => item.code"
            :placeholder="
                state == 'success' ? '-- Pilih Sub Bagian --' : 'Loading ...'
            "
            :options="state == 'success' ? sub_bagian : []"
            label="name"
            v-model="model"
            class="w-full custom"
            ><template #search="{ attributes, events }">
                <input
                    class="vs__search"
                    :required="!model"
                    v-bind="attributes"
                    v-on="events"
                />
            </template>
        </v-select>
    </label>
</template>
<script lang="ts" setup>
const props = defineProps<{
    sub_bagian: any;
    state: any;
}>();
const model = defineModel();
</script>
