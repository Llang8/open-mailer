<template>
    <div>
        <label>
            {{ label }}
        </label>
        <input type="email" :value="value" @input="updateValue" name="name" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    value: String,
    label: String
})

const emit = defineEmits(['update:value'])

const updateValue = (event: Event) => {
    emit('update:value', (<HTMLInputElement>event.target)?.value || '')
}
</script>
