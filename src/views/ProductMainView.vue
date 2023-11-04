<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import hempview from '@/images/hempview.png';
import downlight from '@/images/downlight.png';
import bioPlasticPic from '@/images/bioPlasticPic.png';
import bioCompositePic from '@/images/bioCompositePic.png';

const Data = {
    whatis: 'What is ',
    hemp: 'Hemp',
    firstparagraph: '               Hemp has been cultivated in the north of Thailand by the hill tribes or the tribesman for long times. There is a typical hemp story in Thailand which is relevant to Hmong people. They believe that hemp plays an important role in their lifestyle and culture. In their houses, they have Hmong clothing made from hemp fiber. For ceremonies, they always wear Hmong clothing. Especially in funeral ceremonies, they use hemp clothing and shoes for the deceased. They believe that hemp fiber serves as a guide for the journey of their deceased ancestors.',
    secondparagraph: `               Nowadays, hemp is widely used in various industries around the world. Hemp is claimed to be a keyword for sustainable economy on our planet. Eco-friendly products are the core concept of our company that we share with our partners. With care, we meticulously select hemp materials from organic farms in Thailand to produce our high-quality products before delivering them to you.`,
    our: 'our ',
    products: 'products',
    compositeTitle: 'Bio-composite products',
    compositeDetails: '" The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer. “',
    moreDetails: 'detail..',
    plasticTitle: 'Bioplastic hemp pellets product',
    plasticDetails: '" The hemp bioplastics compound material PH0001HT “'
}
</script>

<template>
    <div class="picture" :style="{ backgroundImage: 'url(src/images/hempview.png)' }" style="margin-top: 2rem; " >
        <div class="container-fluid picture" >
            <div class="text-center">
                <br><br><br><br><br><br>
                <h1 class="blackbold-text front-30px " data-aos="fade-up">{{ Data.whatis }} <span class="greenbold-text">{{ Data.hemp }}
                    </span></h1><br>
            </div>
            <div class="container front-12px">
                <p data-aos="fade-up">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                    Data.firstparagraph }}</p>
                <p data-aos="fade-up">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                    Data.secondparagraph }}</p>
            </div>
            <div class="text-center" data-aos="fade-up">
                <br><br><br> <img :src="downlight" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>

    <div class="container full-height  ">
        <div class="row justify-content-center">
            <div class="col-md-6" data-aos="fade-up">
                <img :src="bioCompositePic" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>

            <div class="col-md-5 d-flex align-items-center">
                <div><br>
                    <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span class="green-text">{{
                        Data.products }}</span>
                    </p>
                    <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.compositeTitle }}</h5>
                    <p class="front-12px" data-aos="fade-up"> {{ Data.compositeDetails }} </p>
                    <p class="button-details front-12px" style="color:white" data-aos="fade-up"> {{ Data.moreDetails }}</p>
                </div>
            </div>
        </div>
    </div>


    <div class="container full-height  bioplastic-left">
        <div class="row justify-content-center">
            <div class="col-md-5 d-flex align-items-center">
                <div><br>
                    <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span class="green-text">{{
                        Data.products }}</span>
                    </p>
                    <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.plasticTitle }}</h5>
                    <p class="front-12px" data-aos="fade-up"> {{ Data.plasticDetails }} </p>
                    <p class="button-details front-12px" style="color:white" data-aos="fade-up"> {{ Data.moreDetails }}</p>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-up">
                <img :src="bioPlasticPic" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>



    <div class="container full-height bioplastic-down">
        <div class="row justify-content-center">
            <div class="col-md-6" data-aos="fade-up">
                <img :src="bioPlasticPic" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>
            <div class="col-md-5 d-flex align-items-center">
                <div><br>
                    <p class="front-12px" data-aos="fade-up"><span class="black-text">{{ Data.our }}</span> <span class="green-text">{{
                        Data.products }}</span>
                    </p>
                    <h5 class="blackbold-text front-18px" data-aos="fade-up">{{ Data.plasticTitle }}</h5>
                    <p class="front-12px" data-aos="fade-up"> {{ Data.plasticDetails }} </p>
                    <p class="button-details front-12px" style="color:white" data-aos="fade-up"> {{ Data.moreDetails }}</p>
                </div>
            </div>
        </div>
    </div>




    <br><br><br>
</template>

<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productmain.scss';
</style>