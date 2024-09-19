<template>
    <label class="flex items-center gap-2 input input-bordered">
        <input
            type="hidden"
            :disabled="state == 'saving' || state == 'loading'" />
        <v-select
            :disabled="state == 'saving' || state == 'loading'"
            :reduce="(item: any) => item.kode_unit"
            :placeholder="
                state == 'success' ? '-- Pilih Unit --' : 'Loading ...'
            "
            :options="state == 'success' ? unit : []"
            label="nama_unit"
            v-model="model"
            class="w-full custom"
            ><template #search="{ attributes, events }">
                <input
                    class="vs__search"
                    :required="!model"
                    v-bind="attributes"
                    v-on="events"
                />
            </template> </v-select
    ></label>
</template>
<script lang="ts" setup>
const props = defineProps<{
    unit: any;
    state: any;
}>();
const model = defineModel();
</script>
