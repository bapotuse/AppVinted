<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Connexion</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" class="input" />
      <input v-model="mot_de_passe" type="password" placeholder="Mot de passe" class="input" />
      <button type="submit" class="btn">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const mot_de_passe = ref('')

const login = async () => {
  try {
    const res = await axios.post('http://localhost:3000/login', {
      email: email.value,
      mot_de_passe: mot_de_passe.value
    });

    localStorage.setItem('user', JSON.stringify(res.data.utilisateur));
    localStorage.setItem('token', res.data.token);
    alert('Connexion réussie !');
  } catch (err) {
    alert('Erreur : ' + err.response.data.message);
  }
}
</script>
