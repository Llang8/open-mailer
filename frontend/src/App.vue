<template>
  <nav>
    <div v-if="isLoggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link> |
      <button @click="logout">Logout</button>
    </div>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const isLoggedIn = ref(false)

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const logout = () => {
  signOut(getAuth())
}
</script>

<style scoped>
</style>
