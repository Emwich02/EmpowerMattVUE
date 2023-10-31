<script setup>
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
import CEO_photo from '@/images/IU3.jpg'; // Replace with the correct path to your image
import CTO_photo from '@/images/IU1.jpg';
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)

const Data = reactive({
    MainTitle_1: computed(() => isLang.value == 'THA' ? 'ทีม' : 'THE TEAM'),
    MainTitle_2: computed(() => isLang.value == 'THA' ? 'พบกับทีมของเรา' : 'MEET Our Team'),
    Name_CEO: computed(() => isLang.value == 'THA' ? 'ไอยู' : 'dlwlrma'),
    Exp_CEO: computed(() => isLang.value == 'THA' ? 'วิทยาการคอมพิวเตอร์' : 'Experience in computer science'),
    Name_CTO: computed(() => isLang.value == 'THA' ? 'อีจีอึน' : 'Ee Ji Eun'),
    Exp_CTO: computed(() => isLang.value == 'THA' ? 'วิศวกรรมศาสตร์คอมพิวเตอร์' : 'Experience in computer engineering')
});
</script>
<template>
    <div class="container-fluid bg-color" data-aos="fade-up">
        <div class="container">
            <div class="container center mb-5">
                <p class="margin-0 team-text animation-begin">{{ Data.MainTitle_1 }}</p>
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
                            <p class="contact">Contact</p>
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
