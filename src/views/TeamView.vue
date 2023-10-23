<script setup>
import CEO_photo from '@/images/IU3.jpg'; // Replace with the correct path to your image
import CTO_photo from '@/images/IU1.jpg';
const Data = {
    MainTitle_1: "THE TEAM",
    MainTitle_2: "MEET Our Team.",
    Name_CEO: "dlwlrma",
    Exp_CEO: "Experience in computer science",
    Name_CTO: "Ee Ji Eun",
    Exp_CTO: "Experience in computer engineering"
}
</script>
<template>
    <div class="container-fluid bg-color">
        <div class="container">
            <div class="container center mb-5">
                <p class="margin-0 team-text">{{ Data.MainTitle_1 }}</p>
                <hr class="line-team-head" size="5px" />
                <p class="margin-0 meet-text">{{ Data.MainTitle_2 }}</p>
            </div>
            <div class="row">
                <div class="col-lg-6" style=" padding: 2%;">
                    <div class="row row-bg-color">
                        <div class="col-md-5" style="padding: 0%;">
                            <img :src="CEO_photo" alt="person1" class="image-person">
                        </div>
                        <div class="col-md-7">
                            <p class="name">{{ Data.Name_CEO }}</p>
                            <p class="career-position">CEO</p>
                            <p class="detail">{{ Data.Exp_CEO }}</p>
                            <p></p>
                            <label class="contact">Contact</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" style=" padding: 2%;">
                    <div class="row row-bg-color">
                        <div class="col-md-5" style="padding: 0%;">
                            <img :src="CTO_photo" alt="person2" class="image-person">
                        </div>
                        <div class="col-md-7">
                            <p class="name">{{ Data.Name_CTO }}</p>
                            <p class="career-position">CTO</p>
                            <p class="detail">{{ Data.Exp_CTO }}</p>
                            <label class="contact">Contact</label>
                        </div>
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
