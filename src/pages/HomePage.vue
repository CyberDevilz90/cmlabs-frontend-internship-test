<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {useRouter} from "vue-router"

import { Icon } from "@iconify/vue";

const categories = ref([]);
const router = useRouter()

const fetchCategories = async () => {
   try {
      const response = await axios.get(
         "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      categories.value = response.data.categories;
   } catch (error) {
      console.error("Error getting categories", error);
   }
};

const goToCategory = (category) => {
  router.push(`/home/foods/${category}`);
};

onMounted(() => {
   fetchCategories();
});
</script>
<template>
   <div class="flex flex-col min-h-screen bg-white overflow-hidden">
      <div class="flex flex-col h-96 items-center p-3 bg-slate-100">
         <div class="flex flex-row gap-4 mt-16">
            <Icon icon="mdi:food-apple" color="red" height="30" />
            <Icon icon="mdi:food-apple" color="red" height="30" />
            <Icon icon="mdi:food-apple" color="red" height="30" />
         </div>
         <p class="mt-5 font-bold">mealapp API website</p>
         <p class="mt-5 font-bold text-4xl">See All The Delicious Foods</p>
      </div>
      <div class="grid grid-cols-4 gap-4 py-5 px-64 my-10">
         <div
            v-for="category in categories"
            :key="category.idCategory"
            class="bg-gray-100 rounded-lg shadow-md p-3 text-center h-28 hover:cursor-pointer"
            :style="{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${category.strCategoryThumb})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }"
            @click="goToCategory(category.strCategory)"
         >
            <p class="font-bold text-white mt-6">{{ category.strCategory }}</p>
         </div>
      </div>
   </div>
</template>
