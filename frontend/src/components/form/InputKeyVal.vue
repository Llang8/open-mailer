<template>
    <div>
        <label>
            Key
        </label>
        <input type="text" :value="valueKey" @input="updateValueKey" />
        <label>
            Value
        </label>
        <input type="text" :value="valueVal" @input="updateValueVal" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    valueKey: String,
    valueVal: String,
    label: String
})

const emit = defineEmits(['update:valueKey', 'update:valueVal'])

const updateValueKey = (event: Event) => {
    emit('update:valueKey', (<HTMLInputElement>event.target)?.value || '')
}

const updateValueVal = (event: Event) => {
    emit('update:valueVal', (<HTMLInputElement>event.target)?.value || '')
}
</script>
