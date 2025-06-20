<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-20">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h1 class="text-3xl font-bold text-center mb-6 text-black">Inscription</h1>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Nom d'utilisateur</label>
          <input v-model="nom" type="text" placeholder="Nom Vinted"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input v-model="email" type="email" placeholder="Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Mot de passe</label>
          <input v-model="mot_de_passe" type="password" placeholder="Mot de passe"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <button type="submit"
          class="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition">
          S'inscrire
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const nom = ref('')
const email = ref('')
const mot_de_passe = ref('')

const register = async () => {
  try {
    await axios.post('http://localhost:3000/register', {
      nom: nom.value,
      email: email.value,
      mot_de_passe: mot_de_passe.value
    })
    alert('Inscription réussie !')
  } catch (err) {
    const message = err?.response?.data?.message || err.message || 'Une erreur est survenue'
    alert('Erreur : ' + message)
  }
}
</script>
