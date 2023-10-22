<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import officepic from '@/images/officepic3.jpg'; // Replace with the correct path to your image
</script>
<template>

         
        <div class="picture">
        <img :src="officepic" alt="">  
        </div>   
        <div class="text-center">
            <h1 class="welcome-text">Welcome to <span class="empower-text">Empower</span></h1>
            
             </div> <br>


            <div class="box" >
                <h4 class="text-center" style="">Empower Material Innovations </h4>
            </div><br><br>
        
    
        <div class="container">   
            
            <p class="text-center">As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP).<br>
                  We focus on doing the research and development in sustainable materials, which will be the eco-friendly products from hemp composite materials to drive the innovation in your lifestyle. We are also doing the development of graphene manufacturing processes for innovation products. 
                  <br>We have some partners on unique opportunities to go throughout the same goal. 
                Thank you very much for your kindness. 
            </p>
         </div> 
        
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/home.scss';
</style>

