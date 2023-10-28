<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Bioplastic from '@/images/Bioplastic.png';
import Plasticproducts from '@/images/Plasticproducts.png';


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
        <div class="box mt-5 col-2" style="margin-left: 0px;">
                    <h4 class="text-center" style="color:white">{{ Data.Products }} </h4>
                </div>
    <br><br>

    <div class="text-center"> 
        <h4 class="blackbold-text">{{ Data.Our }} <span class="greenbold-text">{{ Data.product }} </span> </h4> 
        <h2 class="greenbold-text"> {{ Data.HempBioPlastics }} <span class="blackbold-text">{{ Data.CompoundMaterials }} </span> </h2> 
        <br>

  
                <img :src="Bioplastic" class="img-fluid" style="max-width: 100%; height: auto;">
    <br><br><br><br><br>

        <h2 class="greenbold-text"> {{ Data.HempBioPlastics }} <span class="blackbold-text">{{ Data.product }} </span> </h2> 
        <br><br>
    <img :src="Plasticproducts" class="img-fluid" style="max-width: 100%; height: auto;">
</div> 
</div>


</template>

<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productBioPlastic.scss';
</style>