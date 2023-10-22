<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import officepic from '@/images/officepic3.jpg'; // Replace with the correct path to your image
const Data = {
    Description: 'As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP)',
    title: 'Welcome to Empower'
}
</script>
<template>

         
        <div class="picture">
        <img :src="officepic" alt="">  
        </div>   
        <div class="text-center">
            <h1 class="welcome-text">{{ Data.title }}</h1>
            
             </div> <br>


            <div class="box" >
                <h4 class="text-center" style="">Empower Material Innovations </h4>
            </div><br><br>
        
    
        <div class="container">   
            
            <p class="text-center">
                {{ Data.Description }}
            </p>
         </div> 
        
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/home.scss';
</style>

