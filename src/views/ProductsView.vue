<script setup>
import { ref } from 'vue'
import bg_whatishemp from '@/images/412799_0.jpg';

const Data = {
    MainTitle_1: 'What is ',
    MainTitle_2: 'Hemp',
    Des_1_1: 'Hemp has been cultivated in the north of Thailand by the hill tribes or the tribesman for long times. There is a typical',
    Des_2_1: 'Nowadays, hemp is widely used in various industries around the world. Hemp is claimed to be a keyword for',
    product_1: ''
}

const Des_1_list = ref({
    Des_2: 'hemp story in Thailand which is relevant to Hmong people. They believe that hemp plays an important role in their lifestyle',
    Des_3: 'and culture. In their houses, they have Hmong clothing made from hemp fiber. For ceremonies, they always wear Hmong',
    Des_4: 'clothing. Especially in funeral ceremonies, they use hemp clothing and shoes for the deceased. They believe that hemp ',
    Des_5: 'fiber serves as a guide for the journey of their deceased ancestors.',
})
const Des_2_list = ref({
    Des_2: 'sustainable economy on our planet. Eco-friendly products are the core concept of our company that we share with our',
    Des_3: 'partners. With care, we meticulously select hemp materials from organic farms in Thailand to produce our high-quality',
    Des_4: 'products before delivering them to you.',
})
</script>
<template>
    <div class="bg-image" v-bind:style="{ backgroundImage: 'url(' + bg_whatishemp + ')' }">
        <div class="container-fluid bg-image pb-5">
            <div class="text-center">
                <h1 class="bold-text">{{ Data.MainTitle_1 }} <span class="greenbold-text">{{ Data.MainTitle_2
                }} </span></h1>
            </div> <br>
            <div class="container">
                <p class="detail-text first-line-text mb-0">{{ Data.Des_1_1 }}</p>
                <p class="detail-text m-0" v-for="(value, key) in Des_1_list" :key="key">
                    {{ value }}
                </p>
                <p class="detail-text first-line-text mb-0">{{ Data.Des_2_1 }}</p>
                <p class="detail-text m-0" v-for="(value, key) in Des_2_list" :key="key">
                    {{ value }}
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img src="" alt="">
            </div>
            <div class="col-6">
                <p></p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/products.scss';
</style>