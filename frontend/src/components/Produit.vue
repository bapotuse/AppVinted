<template>
    <div class="article-container">
        <h1 class="text-3xl text-center mt-4">Liste des produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="produit in produits" :key="produit.idProduit" class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">{{ produit.nom }}</h3>
                    <p class="text-gray-700 font-bold mb-3">{{ produit.prix }} €</p>
                    <button class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">Voir détails</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const produits = ref([]);

const fetchProduits = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/produits');
        produits.value = response.data;
    } catch (error) {
        console.error('Erreur de récupération des produits:', error);
    }
};

onMounted(() => {
    fetchProduits();
});
</script>