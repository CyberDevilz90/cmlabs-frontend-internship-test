<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import VideoPlayer from "./../components/interface/VideoPlayer";

const route = useRoute();
const category = route.params.category;
const idMeal = route.params.meals;
const meals = ref([]);

const fetchMealsBiID = async () => {
   try {
      const response = await axios.get(
         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      meals.value = response.data.meals;
   } catch (error) {
      console.error("Error getting categories", error);
   }
};

const extractVideoId = (url) => {
   const regex = /[?&]v=([^&#]*)/;
   const matches = url.match(regex);
   return matches ? matches[1] : "";
};

const formattedInstructions = computed(() => {
   return meals.value[0]?.strInstructions.replace(/\r\n/g, "<br><br>");
});

const ingredientsList = computed(() => {
   const ingredients = [];

   for (let i = 1; i <= 20; i++) {
      const ingredient = meals.value[0]?.[`strIngredient${i}`];
      const measure = meals.value[0]?.[`strMeasure${i}`];

      if (
         ingredient &&
         ingredient.trim() !== "" &&
         measure &&
         measure.trim() !== ""
      ) {
         ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
      }
   }

   return ingredients;
});

onMounted(() => {
   fetchMealsBiID();
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
            <router-link
               :to="`/home/foods/${category}`"
               class="hover:underline"
               >{{ category }}</router-link
            >
            <li>&gt;</li>
            <li v-if="meals.length > 0">{{ meals[0]?.strMeal }}</li>
         </ul>
      </nav>
      <p class="text-6xl mt-5 font-extralight" v-if="meals.length > 0">
         {{ meals[0]?.strMeal }}
      </p>
      <div class="mt-16">
         <p class="text-red-400 font-bold">{{ meals[0]?.strArea }} Culinary</p>
         <div class="flex flex-row">
            <img
               :src="meals[0]?.strMealThumb"
               alt="meals"
               class="w-1/2 h-96 rounded-md mt-3 mr-10"
            />
            <div>
               <div>
                  <p class=" text-4xl">Instructions</p>
                  <p class=" text-sm mt-3" v-html="formattedInstructions"></p>
                  <p class=" text-4xl mt-5">Recipe</p>
                  <ul class="mt-3 list-disc list-inside">
                     <li
                        v-for="(ingredient, index) in ingredientsList"
                        :key="index"
                     >
                        {{ ingredient }}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div>
         <p class="text-4xl mt-6 text-center">Tutorials</p>
         <VideoPlayer
            v-if="meals[0]?.strYoutube"
            :videoId="extractVideoId(meals[0].strYoutube)"
         />
      </div>
   </div>
</template>
