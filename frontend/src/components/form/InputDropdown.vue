<template>
    <div>
        <label>
            {{ label }}
        </label>
        <select @change="updateValue">
            <option v-for="(currOption, idx) of props.options" :value=currOption.value :key=idx>
                {{ currOption.title }}
            </option>
        </select>
    </div>
</template>
<script setup lang="ts">
interface SelectOption {
  value: String,
  title: String
}

const props = defineProps<{
    label: String,
    defaultOption: String,
    options: SelectOption[]
}>()

const emit = defineEmits(['update:value'])

const updateValue = (event: Event) => {
    emit('update:value', (<HTMLInputElement>event.target)?.value || '')
}
</script>
