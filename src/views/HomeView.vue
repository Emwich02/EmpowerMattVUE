<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Hexagonal from '@/images/Hexagonal.png';
import Graphene from '@/images/Graphene.png';
import Partners from '@/images/partners.png';


const Data = {
    Description: `As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP).We focus on doing the research and development in sustainable materials, which will be the eco-friendly products from hemp composite materials to drive the innovation in your lifestyle. We are also doing the development of graphene manufacturing processes for innovation products. We have some partners on unique opportunities to go throughout the same goal. 
Thank you very much for your kindness. `,
    MainTitle_1: 'Welcome to ',
    MainTitle_2: 'Empower',
    PrimaryTitle: 'Empower Material Innovations',
    HexagonalTopic_1: 'Make the world to be ' ,
    HexagonalTopic_2: 'sustainability' ,
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
    PartnersTopic_1: 'Our ',
    PartnersTopic_2: 'Partners'
}
</script>
<template>

         
    <div class="picture" :style="{ backgroundImage: 'url(src/images/officepic3.jpg)' }" style="margin-top: 2rem; ">
      <div class="container-fluid picture">
          <div class="text-center">      
            <h1 class="blackbold-text-welcome">{{ Data.MainTitle_1 }} <span class="greenbold-text">{{ Data.MainTitle_2 }}  </span></h1>   
          </div> <br>
              
          <div class="box" >
                <h4 class="text-center" style="color:white" >{{ Data.PrimaryTitle }}  </h4>
          </div><br><br>
             
          <div class="container">   
            <p class="text-center">{{ Data.Description }}</p>
          </div> 
      </div>   
    </div>  

     
    <div class="background-cream">
      <div class="text-center">   
        <h5 class="blackbold-text"><br><br><br>
              {{ Data.HexagonalTopic_1 }}<span class="greenbold-text">{{ Data.HexagonalTopic_2 }} </span>
        </h5> 
      </div> <br><br>
      
      <div class="container full-center">
        <div class="col-md-5 d-flex align-items-center"> 
       <img :src="Hexagonal" class="img-fluid" style="max-width: 100%; height: auto;">
      </div><br><br><br>
    </div>
  </div><br><br>

 

    <div class="background-green">
      <div class="text-center">   
        <h5 class="whitebold-text"><br><br><br>{{ Data.GrapheneTopic }}</h5>
      </div> <br>

      <div class="container full-center">
        <div class="col-md-5 d-flex align-items-center"> 
       <img :src="Graphene" class="img-fluid" style="max-width: 100%; height: auto;">
      </div>
      </div><br>

      <div class="container-closer">  
        <div class="text-center">   
            <p class="white-text"> {{ Data.GrapheneDetail }}</p>
        </div>
      </div> <br><br><br><br>
    </div>

      <div :style="{ backgroundImage: 'url(src/images/Oak_bg.png)' }">  
        <div class="text-center">   
            <h5 class="blackbold-text"><br><br><br>{{ Data.IP_title }}</h5><br>
        </div>

        <div class="container-closer"> 
          <div class="grey-text"> 
            <p>{{ Data.IP_description }}</p>
          </div>
            <ul> <li >{{ Data.IP_detail_1_1  }} </li>
                      {{ Data.IP_detail_1_2 }}
                      {{ Data.IP_detail_1_3 }}
                      {{ Data.IP_detail_1_4 }}<br><br>
                <li >{{ Data.IP_detail_2_1  }}</li>
                      {{ Data.IP_detail_2_2 }}<br><br>
                <li >{{ Data.IP_detail_3_1  }}</li>
            </ul>
       </div> <br><br><br>
      </div>        

       <div class="text-center">   
          <h5 class="blackbold-text"><br><br><br>
                {{ Data.PartnersTopic_1 }}
                <span class="greenbold-text">{{ Data.PartnersTopic_2 }} </span>
            </h5>
      </div> <br>

      <div class="container full-center">
        <div class="col-md-5 d-flex align-items-center"> 
       <img :src="Partners" class="img-fluid" style="max-width: 100%; height: auto;">
        </div>
      </div><br><br><br>


</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/home.scss';
</style>

