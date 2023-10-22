<script setup>
import Office_photo1 from '@/images/Emoffice4_0.png'; // Replace with the correct path to your image
import Office_photo2 from '@/images/Emoffice5_0.png';
import Office_photo3 from '@/images/Emoffice1_0.png';
</script>
<template>
<div class="bg-image" style="margin-top: 5rem; padding-top : 10rem">
    <div class="container">
        <div class="container center margin-head">
            <p class="margin-0 team-text">GET IN TOUCH</p>
            <hr class="line-team-head" size="5px" />
            <p class="meet-text">Contact us</p>
        </div>
        <div>
            <div class="row row-bg-color">
                <div class="col-md-6 font-default">
                    <p class="contact-head">Contact <span class="green-text">Information</span> </p>
                    <p class="contact-detial margin-text-detail">Tel : (+66)84 914 4787, (+66)81-988-5787</p>
                    <p class="contact-detial margin-text-detail">Email : empowermatt2021@gmail.com</p>
                    <p class="contact-detial margin-space">Tax ID : 0135564006410</p>
                    <p class="contact-detial margin-text-bottom">Empowermatt Company Limited (Head Office) 26/17 Moo 5,
                        Khu Khot Subdistrict, Lam Luk Ka District,
                        Pathum Thani Province, 12130, Thailand</p>
                </div>
                <div class="col-md-6" style="padding: 0%;">
                    map
                    <!-- <iframe class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3657045720265!2d100.52967970780543!3d13.756806298129396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eca66e4c955%3A0x7ad36ff34a2a9adb!2sClickNext%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1696256797489!5m2!1sth!2sth"
                        width="100%" height="100%" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-8 margin-padding-0 ">
            <img :src="Office_photo1" alt="Office_photo_1" class="image-office">
        </div>
        <div class="col-lg-4 margin-padding-0 ">
            <img :src="Office_photo2" alt="Office_photo2" class="image-office" >
            <img :src="Office_photo3" alt="Office_photo3" class="image-office" >
        </div>
    </div>
</div>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/contactUs.scss';
@import '/src/assets/team.scss';
</style>