<script setup>
import CustomButton from "./../interface/CustomButton";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
   <div
      class="flex flex-row w-screen sticky top-0 z-50 overflow-hidden bg-white shadow-md"
   >
      <div class="w-1/2" @click="router.push('/home')">
         <p class=" w-10 p-4 ml-5 font-bold text-2xl hover:cursor-pointer">mealapp</p>
      </div>
      <div class="w-1/2 flex flex-row-reverse mr-3">
         <CustomButton text="Local Culinary" class="bg-white" />
         <CustomButton text="Ingredients" class="bg-white" />
         <CustomButton text="Foods" class="bg-white" />
         <CustomButton
            text="Home"
            class="bg-white"
            @click="router.push('/home')"
         />
      </div>
   </div>
</template>
