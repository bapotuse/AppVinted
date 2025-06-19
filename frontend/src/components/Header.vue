<template>
    <nav class="bg-green-400 py-4 flex px-4">
        <router-link to="/" class="text-xl">Accueil</router-link>
        <div class="flex-1 flex justify-end">
            <div class="flex-1 flex justify-center mr-10">
                <input type="text" class="border-2 border-green-800 w-full max-w-md rounded-sm leading-none px-2 py-1" id="recherche" placeholder="Rechercher..." />
            </div>
            <router-link to="/likes" class="text-xl px-4"><font-awesome-icon class="text-2xl" icon="heart" /></router-link>
            <router-link to="/article" class="text-xl px-2">Articles</router-link>
            <router-link to="/about" class="text-xl px-2">À propos</router-link>
        </div>
    </nav>
    <RouterView/>
</template>

<script setup>

</script>