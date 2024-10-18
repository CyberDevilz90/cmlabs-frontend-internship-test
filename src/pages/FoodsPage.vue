<script setup>
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const router = useRouter()
const filteredCategories = ref([]);
const category = route.params.category;
const API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.toLowerCase()}`;

const fetchFilteredCategories = async () => {
   try {
      const response = await axios.get(API);
      filteredCategories.value = response.data.meals;
   } catch (error) {
      console.error("Error getting categories", error);
   }
};

const goToMeals = (meals) => {
   router.push(`/home/foods/${category}/${meals}`)
}

onMounted(() => {
   fetchFilteredCategories();
});
</script>
<template>
   <div class="bg-white p-5 px-96 h-auto flex flex-col">
      <nav class="text-gray-600 mb-4">
         <ul class="flex space-x-2">
            <li class="flex flex-row">
               <Icon icon="mdi:home" color="black" height="25" />
               <router-link to="/" class="hover:underline ml-2"
                  >Home</router-link
               >
            </li>
            <li>&gt;</li>
            <li>
               <router-link to="/home/foods" class="hover:underline"
                  >Foods</router-link
               >
            </li>
            <li>&gt;</li>
            <li>{{ category }}</li>
         </ul>
      </nav>
      <p class="text-6xl mt-5 font-extralight">{{ category }} Meals</p>
      <div class="grid grid-cols-4 gap-4 py-5 my-10">
         <div
            v-for="meals in filteredCategories"
            :key="meals.idMeal"
            class="bg-gray-100 rounded-lg shadow-md p-3 text-center h-32 hover:cursor-pointer"
            :style="{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${meals.strMealThumb})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }"
            @click="goToMeals(meals.idMeal)"
         >
            <p class="font-bold text-white mt-6">{{ meals.strMeal }}</p>
         </div>
      </div>
   </div>
</template>
