<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Hexagonal from '@/images/Hexagonal.png';
import Graphene from '@/images/Graphene.png';
import Partners from '@/images/partners.png';
import officepic3 from '@/images/officepic3.jpg';
import Oak from '@/images/Oak_bg.png';
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)

const Data = reactive({
    Description: computed(() => isLang.value == 'THA' ? 'บริการของเรา' : `As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP).We focus on doing the research and development in sustainable materials, which will be the eco-friendly products from hemp composite materials to drive the innovation in your lifestyle. We are also doing the development of graphene manufacturing processes for innovation products. We have some partners on unique opportunities to go throughout the same goal. 
Thank you very much for your kindness. `),
MainTitle_1: computed(() => isLang.value == 'THA' ? 'พบกับทีมของพวกเรา' : 'Welcome to '),
MainTitle_2: computed(() => isLang.value == 'THA' ? '1111' : 'Empower'),
PrimaryTitle: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Empower Material Innovations'),
HexagonalTopic_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Make the world to be '),
HexagonalTopic_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'sustainability'),
GrapheneTopic: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Graphene'),
GrapheneDetail: computed(() => isLang.value == 'THA' ? 'ไอยู' : `We have done the research and development in “Graphene Composites”. We are collaboration with Graphene Creation Co.,Ltd. to do some research projects to create some innovation products with based on graphene such as special functional textile`),
IP_title: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Intellectual Property (IP)'),
IP_description: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'With our intellectual properties, we have three as follow below:'),
IP_detail_1_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Publication Number WO/2021/040629'),
IP_detail_1_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Publication Date 04.03.2021'),
IP_detail_1_3: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'International Application No. PCT/TH2019/000035'),
IP_detail_1_4: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Title “BULLETPROOF PLATE”'),
IP_detail_2_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'เลขที่คำขอ 2203000473'),
IP_detail_2_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'ชื่อการประดิษฐ์อนุสิทธิบัตร “แผ่นเกราะกันกระสุน”'),
IP_detail_3_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : `Bioplastic hemp straw with Petty Patent Pending No. 2103002144`),
PartnersTopic_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Our '),
PartnersTopic_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'Partners'),
});


</script>
<template>
  <div class="picture-home" v-bind:style="{ backgroundImage: 'url(' + officepic3 + ')' }">
    <div class="container-fluid picture-home">
      <div class="text-center-home" data-aos="fade-up">
        <h1 class="blackbold-text-welcome-home front-30px">{{ Data.MainTitle_1 }} <span class="greenbold-text-home">{{ Data.MainTitle_2 }}
          </span></h1>
      </div> <br>

      <div class="box-home" data-aos="fade-up">
        <div class="text-center-home">
        <h5 class="front-18px " style="color:white" data-aos="fade-up">{{ Data.PrimaryTitle }} </h5>
      </div>
      </div><br><br>

      <div class="container">
        <p class="text-center-home front-13px " data-aos="fade-up">{{ Data.Description }}</p>
      </div>
    </div>
  </div>


  <div class="background-cream-home">
    <div class="text-center-home">
      <h5 class="blackbold-text-home front-18px" data-aos="fade-up"><br><br><br>
        {{ Data.HexagonalTopic_1 }}<span class="greenbold-text-home">{{ Data.HexagonalTopic_2 }} </span>
      </h5>
      <br><br></div>

    <div class="container full-center-home">
      <div class="col-md-5 d-flex align-items-center" data-aos="fade-up">
        <img :src="Hexagonal" class="img-fluid" style="max-width: 100%; height: auto;">
      </div><br><br><br>
    </div>
  </div>

  <div class="background-green-home">
    <div class="text-center-home">
      <h5 class="whitebold-text-home front-18px" data-aos="fade-up"><br><br><br>{{ Data.GrapheneTopic }}</h5>
    </div> <br>

    <div class="container full-center-home ">
      <div class="col-md-5 d-flex align-items-center" data-aos="fade-up">
        <img :src="Graphene" class="img-fluid" style="max-width: 100%; height: auto;">
      </div>
    </div><br>

    <div class="container-closer">
      <div class="text-center-home">
        <p class="white-text-home front-13px" data-aos="fade-up"> {{ Data.GrapheneDetail }}</p>
      </div>
    </div> <br><br><br><br>
  </div>

  <div v-bind:style="{ backgroundImage: 'url(' + Oak + ')' }">
    <div class="text-center-home">
      <h5 class="blackbold-text-home front-18px"><br><br><br>{{ Data.IP_title }}</h5><br>
    </div>

    <div class="container-closer front-13px" data-aos="fade-up">
      <div class="grey-text">
        <p>{{ Data.IP_description }}</p>
      </div>
      <ul>
        <li > {{ Data.IP_detail_1_1 }} </li>
        {{ Data.IP_detail_1_2 }}
        {{ Data.IP_detail_1_3 }}
        {{ Data.IP_detail_1_4 }}<br><br>
        <li>{{ Data.IP_detail_2_1 }}</li>
        {{ Data.IP_detail_2_2 }}<br><br>
        <li>{{ Data.IP_detail_3_1 }}</li>
      </ul>
    </div> <br><br><br>
  </div>

  <div class="text-center-home">
    <h5 class="blackbold-text-home front-18px" data-aos="fade-up"><br><br><br>
      {{ Data.PartnersTopic_1 }}
      <span class="greenbold-text-home ">{{ Data.PartnersTopic_2 }} </span>
    </h5>
  </div> <br>

  <div class="container full-center-home">
    <div class="col-md-8 d-flex align-items-center" data-aos="fade-up">
      <img :src="Partners" class="img-fluid" style="max-width: 100%; height: auto;">
    </div>
  </div><br><br><br>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/home.scss';
</style>

