<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Bioplastic from '@/images/Bioplastic.png';
import downlight from '@/images/downlight.png';
import Straw from '@/images/Straw.png';
import FlockSpoon from '@/images/FlockSpoon.png';
import coffeecup from '@/images/coffeecup.png';


const Data = {
    Products: 'Products',
    Our: 'our ',
    product: 'products',
    HempBioPlastics: 'Hemp-bioplastics ',
    CompoundMaterials: 'compound materials',
    HempBioPlasticsDetails: `There are some hemp-bioplastic pellets and food utensil products such as straw, flock, spoon and shop stick.`,
    straw: 'straw',
    cup: 'cup',
    SpoonAndFork: 'spoon & fork',
}
</script>

<template>
    <div class="background-cream">
        <br><br><br><br>

        <div class="container">
            <div class="box mt-5 " style="margin-right: 70%;" data-aos="fade-up">
                <h4 class="text-center " style="color:white">{{ Data.Products }} </h4>
            </div><br>

            <div class="text-center">
                <h4 class="blackbold-text front-15px" data-aos="fade-up">{{ Data.Our }} <span class="greenbold-text">{{
                    Data.product }} </span> </h4>

                <h2 class="greenbold-text front-17px" data-aos="fade-up"> {{ Data.HempBioPlastics }} <span
                        class="blackbold-text">{{
                            Data.CompoundMaterials }} </span> </h2>
                <br>
                <p class="front-13px" data-aos="fade-up">{{ Data.HempBioPlasticsDetails }}</p><br>
                <img :src="Bioplastic" class="img-fluid" style="max-width: 90%; height: auto;"
                    data-aos="fade-up"><br><br><br><br>
                <img :src="downlight" class="img-fluid" style="max-width: 100%; height: auto;"
                    data-aos="fade-up"><br><br><br><br>
                <hr class="style1" data-aos="fade-up"><br><br><br>
                <h2 class="greenbold-text front-17px" data-aos="fade-up"> {{ Data.HempBioPlastics }} <span
                        class="blackbold-text">{{ Data.product }}
                    </span> </h2>
                <br>
            </div>

            <div class="figure">
                <div class="row">
                    <div class="col" data-aos="fade-up">
                        <img :src="Straw" class="img-fluid" style="max-width: 80%; height: auto;">
                        <p>{{ Data.straw }} </p>
                    </div>
                    <div class="col" data-aos="fade-up">
                        <span><img :src="FlockSpoon" class="img-fluid" style="max-width: 80%; height: auto;"></span>
                        <p>{{ Data.cup }} </p>
                    </div>
                    <div class="col" data-aos="fade-up">
                        <img :src="coffeecup" class="img-fluid" style="max-width: 80%; height: auto;">
                        <p>{{ Data.SpoonAndFork }} </p>
                    </div>
                </div>
            </div><br><br>
        </div>
    </div>
</template>


<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productBioPlastic.scss';
</style>