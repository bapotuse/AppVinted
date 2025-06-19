<template>
    <nav class="bg-green-200 py-4 flex px-4">
        <router-link to="/" class="text-xl">Accueil</router-link>
        <div class="flex-1"></div>
        <router-link to="/article" class="text-xl">Articles</router-link>
    </nav>
    
    <Home />
</template>

<script setup>
import Home from "../components/Home.vue"
</script>