<script setup>
import MainContent from "./MainContent.vue";
import AppHeader from "./AppHeader.vue"
import { useRoute } from "vue-router";
import {  ref, watchEffect } from "vue";

const route = useRoute();
const routeName = ref(route.name);
watchEffect(() => (routeName.value = route.name));

</script>
<template>
   <div class="w-full h-auto min-h-screen flex flex-col gap-0 bg-[#EDF0F2] overflow-hidden">
      <main class="flex flex-col">
         <AppHeader />
         <MainContent>
            <slot>
            </slot>
         </MainContent>
      </main>
   </div>
</template>
