<script setup>
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)
import hempview from '@/images/hempview.png';
import bioPlasticPic from '@/images/bioPlasticPic.png';
import bioCompositePic from '@/images/bioCompositePic.png';
const Data = reactive({
    whatis: computed(() => isLang.value == 'THA' ? 'อะไรคือ' : 'What is '),
    hemp: computed(() => isLang.value == 'THA' ? 'กัญชง' : 'Hemp'),
    firstparagraph: computed(() => isLang.value == 'THA' ? '1111' : "               Hemp has been cultivated in the north of Thailand by the hill tribes or the tribesman for long times. There is a typical hemp story in Thailand which is relevant to Hmong people. They believe that hemp plays an important role in their lifestyle and culture. In their houses, they have Hmong clothing made from hemp fiber. For ceremonies, they always wear Hmong clothing. Especially in funeral ceremonies, they use hemp clothing and shoes for the deceased. They believe that hemp fiber serves as a guide for the journey of their deceased ancestors."),
    secondparagraph: computed(() => isLang.value == 'THA' ? 'ไอยู' : "               Nowadays, hemp is widely used in various industries around the world. Hemp is claimed to be a keyword for sustainable economy on our planet. Eco-friendly products are the core concept of our company that we share with our partners. With care, we meticulously select hemp materials from organic farms in Thailand to produce our high-quality products before delivering them to you."),
    our: computed(() => isLang.value == 'THA' ? 'ไอยู' : "our "),
    products: computed(() => isLang.value == 'THA' ? 'ไอยู' : "products"),
    compositeTitle: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Bio-composite products"),
    compositeDetails: computed(() => isLang.value == 'THA' ? 'ไอยู' : '" The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer. “'),
    moreDetails: computed(() => isLang.value == 'THA' ? 'ไอยู' : "detail.."),
    plasticTitle: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Bioplastic hemp pellets product"),
    plasticDetails: computed(() => isLang.value == 'THA' ? 'ไอยู' : '" The hemp bioplastics compound material PH0001HT “'),
});
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<template>
    <div v-bind:style="{ backgroundImage: 'url(' + hempview + ')' }" style="margin-top: 2rem; height: 100dvh;">
        <div class="container-fluid picture-product-main">
            <div class="text-center">
                <br><br><br><br><br><br>
                <h1 class="blackbold-text front-30px " data-aos="fade-up">{{ Data.whatis }} <span class="greenbold-text">{{
                    Data.hemp }}
                    </span></h1><br>
            </div>
            <div class="container front-12px" data-aos="fade-up">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                        Data.firstparagraph }}</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                        Data.secondparagraph }}</p>
                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('first')"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-color-productmain ">


        <div class="container full-height-starw-1 mt-product-main-13 d-flex flex-column align-items-center justify-content-center" id="first">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-6" data-aos="fade-up">
                    <img :src="bioCompositePic" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
                <div class="col-md-5 d-flex align-items-center">
                    <div><br>
                        <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span
                                class="green-text">{{
                                    Data.products }}</span>
                        </p>
                        <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.compositeTitle }}</h5>
                        <p class="front-12px" data-aos="fade-up"> {{ Data.compositeDetails }} </p>
                        <p class="button-details front-12px" style="color:white" data-aos="fade-up">
                            <router-link to="/Naturalhempfabric" class="dropdown-item product-1">
                                {{ Data.moreDetails }} </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-color-productmain" id="second">
        <div class="container   full-height-starw-2  bioplastic-left">
            <div class="row justify-content-center">
                <div class="col-md-5 d-flex align-items-center">
                    <div><br>
                        <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span
                                class="green-text">{{
                                    Data.products }}</span>
                        </p>
                        <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.plasticTitle }}</h5>
                        <p class="front-12px" data-aos="fade-up"> {{ Data.plasticDetails }} </p>
                        <p class="button-details front-12px" style="color:white" data-aos="fade-up">
                            <router-link to="/ProductBioPlastic" class="dropdown-item product-2">{{
                                Data.moreDetails }}</router-link>
                        </p>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up">
                    <img :src="bioPlasticPic" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
            </div>
        </div>
        <div class="container full-height-starw-2 bioplastic-down">
            <div class="row justify-content-center">
                <div class="col-md-6" data-aos="fade-up">
                    <img :src="bioPlasticPic" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
                <div class="col-md-5 d-flex align-items-center">
                    <div><br>
                        <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span
                                class="green-text">{{ Data.products }}</span>
                        </p>
                        <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.plasticTitle }}</h5>
                        <p class="front-12px" data-aos="fade-up"> {{ Data.plasticDetails }} </p>
                        <p class="button-details front-12px" style="color:white" data-aos="fade-up"> <router-link
                                to="/ProductBioPlastic" class="dropdown-item product-2">{{ Data.moreDetails
                                }}</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productmain.scss';
</style>