<script setup>
import CEO_photo from '@/images/IU3.jpg'; // Replace with the correct path to your image
import CTO_photo from '@/images/IU1.jpg';
</script>
<template>
<div class="container">
    <div class="container center" style="padding-top: 10rem;" >
        <p class="margin-0 team-text">THE TEAM</p>
        <hr class="line-team-head" size="5px"/>
        <p class="margin-0 meet-text">MEET Our Team.</p>
    </div>
    <div class="row">
        <div class="col-lg-6" style=" padding: 2%;">
            <div class="row row-bg-color" >
                <div class="col-md-5" style="padding: 0%;">
                    <img :src="CEO_photo" alt="person1" class="image-person">
                </div>
                <div class="col-md-7">
                    <p class="name">dlwlrma</p>
                    <p class="career-position">CEO</p>
                    <p class="detail" >Experience in computer science</p>
                    <p></p>
                    <label class="contact" >Contact</label>
                </div>
            </div>
        </div>
        <div class="col-lg-6" style=" padding: 2%;">
            <div class="row row-bg-color" >
                <div class="col-md-5" style="padding: 0%;">
                    <img :src="CTO_photo" alt="person2" class="image-person">
                </div>
                <div class="col-md-7">
                    <p class="name">อี จี-อึน</p>
                    <p class="career-position">CTO</p>
                    <p class="detail">Experience in computer engineering</p>
                    <label class="contact" >Contact</label>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/team.scss';
</style>
