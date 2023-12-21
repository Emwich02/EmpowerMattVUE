<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Bioplastic from '@/images/Bioplastic.png';
import downlight from '@/images/downlight.png';
import Straw from '@/images/Straw.png';
import FlockSpoon from '@/images/FlockSpoon.png';
import coffeecup from '@/images/coffeecup.png';
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)

const Data = reactive({
    Products: computed(() => isLang.value == 'THA' ? 'พบกับทีมของพวกเรา' : 'Products'),
    Our: computed(() => isLang.value == 'THA' ? 'พบกับทีมของพวกเรา' : 'our '),
    product: computed(() => isLang.value == 'THA' ? '1111' : 'products'),
    HempBioPlastics: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Hemp-bioplastics '),
    CompoundMaterial: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'compound materials'),
    HempBioPlasticsDetails: computed(() => isLang.value == 'THA' ? 'ไอยู' : `There are some hemp-bioplastic pellets and food utensil products such as straw, flock, spoon and shop stick.`),
    straw: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'straw'),
    cup: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'cup'),
    SpoonAndFork: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'spoon & fork'),

});

</script>

<template>
    <div class="background-cream-bioplastic">
        <br><br><br><br>

        <div class="container pt-5">
            <div class="col-2 box-naturalhemp d-flex align-items-center justify-content-center">
                <h4 class="title-text-natural" style="color:white">{{ Data.Products }} </h4>
            </div>

            <div class="text-center-bioplastic">
                <h4 class="blackbold-text-bioplastic front-15px-768-bioplastic front-10px-320-bioplastic" data-aos="fade-up">{{ Data.Our }} <span
                        class="greenbold-text-bioplastic">{{
                            Data.product }} </span> </h4>

                <h2 class="greenbold-text-bioplastic front-17px-768-bioplastic front-12px-320-bioplastic" data-aos="fade-up"> {{ Data.HempBioPlastics }} <span
                        class="blackbold-text-bioplastic">{{
                            Data.CompoundMaterials }} </span> </h2>
                <br>
                <p class="front-13px-768-bioplastic front-8px-320-bioplastic" data-aos="fade-up">{{ Data.HempBioPlasticsDetails }}</p><br>
                <img :src="Bioplastic" class="img-fluid" style="max-width: 90%; height: auto;"
                    data-aos="fade-up"><br><br><br><br>
                <img :src="downlight" class="img-fluid" style="max-width: 100%; height: auto;"
                    data-aos="fade-up"><br><br><br><br>
                <hr class="style1" data-aos="fade-up"><br><br><br>
                <h2 class="greenbold-text-bioplastic front-17px-768-bioplastic front-12px-320-bioplastic" data-aos="fade-up"> {{ Data.HempBioPlastics }} <span
                        class="blackbold-text-bioplastic">{{ Data.product }}
                    </span> </h2>
                <br>
            </div>

            <div class="figure">
                <div class="row">
                    <div class="col-4" data-aos="fade-up">
                        <img :src="Straw" class="img-fluid" style="max-width: 80%; height: auto;">
                        <h5 class="front-17px-768-bioplastic front-10px-320-bioplastic">{{ Data.straw }} </h5>
                    </div>
                    <div class="col-4" data-aos="fade-up">
                        <span><img :src="FlockSpoon" class="img-fluid" style="max-width: 80%; height: auto;"></span>
                        <h5 class="front-17px-768-bioplastic front-10px-320-bioplastic">{{ Data.cup }} </h5>
                    </div>
                    <div class="col-4" data-aos="fade-up">
                        <img :src="coffeecup" class="img-fluid" style="max-width: 80%; height: auto;">
                        <h5 class="front-17px-768-bioplastic front-10px-320-bioplastic">{{ Data.SpoonAndFork }} </h5>
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