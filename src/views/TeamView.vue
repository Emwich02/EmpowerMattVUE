<script setup>
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
import BOD_photo from '@/images/sompoom.png';
import CINO_photo from '@/images/jariyavadee.png';
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)

const Data = reactive({
    MainTitle_1: computed(() => isLang.value == 'THA' ? 'ทีม' : 'THE TEAM'),
    MainTitle_2: computed(() => isLang.value == 'THA' ? 'พบกับทีมของเรา' : 'MEET Our Team'),
    Name_BOD: computed(() => isLang.value == 'THA' ? 'สมภูมิ ศิริจันทรา' : 'Sompoom Sirichantra'),
    Tel_BOD: computed(() => isLang.value == 'THA' ? 'เบอร์โทร : (+66)81 988 5787' : 'Tel : (+66)81 988 5787'),
    Email: computed(() => isLang.value == 'THA' ? '' : 'empowermatt2021@gmail.com'),
    Name_CINO: computed(() => isLang.value == 'THA' ? 'ดร.จริยาวดี ศิริจันทรา' : 'Dr.Jariyavadee Sirichantra'),
    Tel_CINO: computed(() => isLang.value == 'THA' ? 'เบอร์โทร : (+66)83 914 4748' : 'Tel : (+66)83 914 4748')
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
                <div class="col-xl-6" style=" padding: 2%;">
                    <div class="row row-bg-color">
                        <div class="col-md-5" style="padding: 0%;">
                            <img :src="BOD_photo" alt="person1" class="image-person">
                        </div>
                        <div class="col-md-7">
                            <p class="name">{{ Data.Name_BOD }}</p>
                            <p class="career-position">Board of Directors</p>
                            <p class="detail">{{ Data.Tel_BOD }}</p>
                            <p class="detail-email">{{ Data.Email }}</p>
                            <label class="contact">26/17 Moo 5 ,Khu khod, Lam luk ka District, Pathum Thani Province 12130 Thailand</label>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6" style=" padding: 2%;">
                    <div class="row row-bg-color">
                        <div class="col-md-5" style="padding: 0%;">
                            <img :src="CINO_photo" alt="person2" class="image-person">
                        </div>
                        <div class="col-md-7">
                            <p class="name">{{ Data.Name_CINO }}</p>
                            <p class="career-position">Chief Innovation Officer</p>
                            <p class="detail">{{ Data.Tel_CINO }}</p>
                            <p class="detail-email">{{ Data.Email }}</p>
                            <p class="contact">26/17 Moo 5 ,Khu khod, Lam luk ka District, Pathum Thani Province 12130 Thailand</p>
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
