<template>
    <main>
        <h1>Test Email Sends</h1>
        <form @submit="onSubmit">
            <InputEmail label="Email to" v-model:value="email" />
            <InputDropdown label="Select a Template" :options=templates defaultOption="template-1" v-model:value="template" />
            <InputText label="Subject" v-model:value="subject" />
            <InputText label="Preheader" v-model:value="preheader" />
            <h2>Data Fields</h2>
            <GroupKeyVal v-model:value="keys" />
            <button>Submit</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import InputEmail from "../components/form/InputEmail.vue"
import InputDropdown from "../components/form/InputDropdown.vue"
import InputText from "../components/form/InputText.vue"
import GroupKeyVal from "../components/form/GroupKeyVal.vue"
import { ref } from "vue"

const templates = [
    {
        title: "Template 1",
        value: "template-1"
    },
    {
        title: "Template 2",
        value: "template-2"
    },
    {
        title: "Basic Template - No Styles",
        value: "basic"
    }
]

const email = ref("")
const template = ref('template-1')
const subject = ref("")
const preheader = ref("")
const keys = ref([])

const onSubmit = async(e) => {
    e.preventDefault()

    const keyData = {}
    for (const item of keys.value) {
        keyData[item.key] = item.val
    }

    const response = await fetch('http://localhost:3001/email/send', 
        {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                template: template.value,
                to: email.value,
                preheader: preheader.value,
                subject: subject.value,
                data: keyData
            })
        }
    )

    const data = await response.json()

    console.log(data)
}
</script>