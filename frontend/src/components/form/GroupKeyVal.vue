<template>
    <div>
        <h2>{{ label }}</h2>
        <InputKeyVal v-for="(item, idx) of value" :key="idx" v-model:valueKey="item['key']" v-model:valueVal="item['val']" />
        <button @click="removeKeyVal">Remove Key/Value Pair -</button>
        <button @click="addKeyVal">Add Key/Value Pair +</button>
    </div>
</template>
<script setup lang="ts">
import InputKeyVal from './InputKeyVal.vue'
import { ref, watchEffect } from 'vue'

interface KeyValObj {
    key: String,
    val: String
}

const props = defineProps({
    label: String
})

const value = ref([
    {
        key: "",
        val: ""
    }
])

function addKeyVal() {
    value.value.push({
        key: "",
        val: ""
    })
}

function removeKeyVal() {
    value.value.pop()
}

const emit = defineEmits(['update:value'])

watchEffect(() => {
    emit('update:value', value.value)
})
</script>
