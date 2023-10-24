<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import bioplastic1 from '@/images/bioplastic1.png';
import bioplastic2 from '@/images/bioplastic2.png';
import bioplastic3 from '@/images/bioplastic3.png';
import bioplastic4 from '@/images/bioplastic4.png';
import CoffeeCup from '@/images/CoffeeCup.png';
import ForkSpoon from '@/images/ForkSpoon.png';
import Straw from '@/images/Straw.png';


const Data = {
    Products: 'Products',
    Our: 'our ',
    product: 'products',
    HempBioPlastics: 'Hemp-bioplastics ',
    CompoundMaterials: 'compound materials',
    HempBioPlasticsDetails: `There are some hemp-bioplastic pellets and food utensil products such as straw, flock, spoon and shop stick.`,
    straw:'straw',
    cup:'cup',
    SpoonAndFork:'spoon & fork',
}
</script>

<template>

<br><br><br><br><br><br><br><br>

    <div class="container">
        <div class="box" >
                <h4 style="color:white" >{{ Data.Products }}  </h4>
        </div>
    </div><br><br>

    <div class="text-center"> 
        <p class="blackbold-text">{{ Data.Our }} <span class="greenbold-text">{{ Data.product }} </span> </p> 
        <h5 class="greenbold-text"> {{ Data.HempBioPlastics }} <span class="blackbold-text">{{ Data.CompoundMaterials }} </span> </h5> 
    </div>

    <div class="text-center ">
       <img :src="bioplastic1" alt="" width="115" height="150">
       <img :src="bioplastic2" alt="" width="115" height="150">
       <img :src="bioplastic3" alt="" width="115" height="150">
       <img :src="bioplastic4" alt="" width="115" height="150">
    </div><br><br><br><br><br>

    <div class="text-center"> 
        <h5 class="greenbold-text"> {{ Data.HempBioPlastics }} <span class="blackbold-text">{{ Data.product }} </span> </h5> 
    </div>


        <img :src="Straw" alt="" width="150" height="150">
        <img :src="CoffeeCup" alt="" width="150" height="150">
        <img :src="ForkSpoon" alt="" width="150" height="150">

</template>

<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productBioPlastic.scss';
</style>