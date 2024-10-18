<template>
   <div class="video-player">
     <iframe
       :src="videoUrl"
       width="100%"
       height="500"
       frameborder="0"
       allowfullscreen
       title="YouTube Video Player"
     ></iframe>
   </div>
 </template>
 
 <script setup>
 import { defineProps } from 'vue';
 
 const props = defineProps({
   videoId: {
     type: String,
     required: true
   }
 });
 
 const videoUrl = `https://www.youtube.com/embed/${props.videoId}`;
 </script>
 
 <style scoped>
 .video-player {
   margin: 20px 0;
 }
 </style>
 