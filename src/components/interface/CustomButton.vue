<template>
   <button
     type="button"
     class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
   >
     {{ text }}
   </button>
 </template>
 
 <script setup>
 // eslint-disable-next-line
 const props = defineProps({
   text: String,
 });
 </script>
 