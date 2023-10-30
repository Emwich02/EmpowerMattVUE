<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import hempview from '@/images/hempview.png';
import downlight from '@/images/downlight.png';
import bioPlasticPic from '@/images/bioPlasticPic.png';
import bioCompositePic from '@/images/bioCompositePic.png';

const Data = {
    whatis: 'What is ',
    hemp: 'Hemp',
    firstparagraph: '	            Hemp has been cultivated in the north of Thailand by the hill tribes or the tribesman for long times. There is a typical hemp story in Thailand which is relevant to Hmong people. They believe that hemp plays an important role in their lifestyle and culture. In their houses, they have Hmong clothing made from hemp fiber. For ceremonies, they always wear Hmong clothing. Especially in funeral ceremonies, they use hemp clothing and shoes for the deceased. They believe that hemp fiber serves as a guide for the journey of their deceased ancestors.',
    secondparagraph:`               Nowadays, hemp is widely used in various industries around the world. Hemp is claimed to be a keyword for sustainable economy on our planet. Eco-friendly products are the core concept of our company that we share with our partners. With care, we meticulously select hemp materials from organic farms in Thailand to produce our high-quality products before delivering them to you.`,
    our: 'our ',
    products: 'products',
    compositeTitle: 'Bio-composite products',
    compositeDetails: '" The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer. “',
    moreDetails:'detail..',
    plasticTitle:'Bioplastic hemp pellets product',
    plasticDetails: '" The hemp bioplastics compound material PH0001HT “'
}
</script>

<template>
    <div class="picture" :style="{ backgroundImage: 'url(src/images/hempview.png)' }" style="margin-top: 3rem; " >
        <div class="container-fluid picture" >
            <div class="text-center">      
            <h1 class="blackbold-text">{{ Data.whatis }} <span class="greenbold-text">{{ Data.hemp}}  </span></h1><br>  
          </div> 
          <div class="container">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ Data.firstparagraph }}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ Data.secondparagraph }}</p>
        </div>
        <div class="text-center">  
            <br><br><br> <img :src="downlight" class="img-fluid" style="max-width: 100%; height: auto;">   
        </div>
    </div>
    </div><br><br><br> 

    <div class="container">
        <img :src="bioCompositePic" class="img-fluid" style="max-width: 50%; height: auto;">   
        
    </div><br><br> <br><br> <br><br> 
    <div class="container">
    <img :src="bioPlasticPic" class="img-fluid" style="max-width: 50%; height: auto;">   
    </div>
    <br><br><br><br><br><br>
</template>

<style lang="scss">
// Import Main styles for this application
@import '/src/assets/productmain.scss';
</style>