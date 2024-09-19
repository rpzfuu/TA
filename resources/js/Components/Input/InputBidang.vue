<template>
    <label class="flex items-center gap-2 input input-bordered">
        <input
            type="hidden"
            :disabled="state == 'saving' || state == 'loading'"
        />
        <v-select
            :disabled="state == 'saving' || state == 'loading'"
            :reduce="(item: any) => item.id"
            :placeholder="
                state == 'success' ? '-- Pilih Bidang --' : 'Loading ...'
            "
            :options="state == 'success' ? bidang : []"
            label="nama"
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
    bidang: any;
    state: any;
}>();
const model = defineModel();
</script>
