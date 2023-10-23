<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import officepic from '@/images/officepic3.jpg'; // Replace with the correct path to your image
const Data = {
    Description: `As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP).We focus on doing the research and development in sustainable materials, which will be the eco-friendly products from hemp composite materials to drive the innovation in your lifestyle. We are also doing the development of graphene manufacturing processes for innovation products. We have some partners on unique opportunities to go throughout the same goal. 
Thank you very much for your kindness. `,
    MainTitle_1: 'Welcome to ',
    MainTitle_2: 'Empower',
    PrimaryTitle: 'Empower Material Innovations',
    HexagonalTopic: 'Make the world to be sustainability' ,
    GrapheneTopic: 'Graphene',
    GrapheneDetail: `We have done the research and development in “Graphene Composites”. We are collaboration with Graphene Creation Co.,Ltd. to do some research projects to create some innovation products with based on graphene such as special functional textile`,
    IP_title: 'Intellectual Property (IP)',
    IP_description: 'With our intellectual properties, we have three as follow below:',
    IP_detail_1_1: 'Publication Number WO/2021/040629',
    IP_detail_1_2: 'Publication Date 04.03.2021',
    IP_detail_1_3: 'International Application No. PCT/TH2019/000035',
    IP_detail_1_4: 'Title “BULLETPROOF PLATE”',
    IP_detail_2_1: 'เลขที่คำขอ 2203000473',
    IP_detail_2_2: 'ชื่อการประดิษฐ์อนุสิทธิบัตร “แผ่นเกราะกันกระสุน”',
    IP_detail_3_1: `Bioplastic hemp straw with Petty Patent Pending No. 2103002144`,
    PartnersTopic: 'Our Partners'
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

