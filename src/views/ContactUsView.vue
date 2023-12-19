<script setup>
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)
import Office_photo1 from '@/images/Emoffice4_0.png'; // Replace with the correct path to your image
import Office_photo2 from '@/images/Emoffice5_0.png';
import Office_photo3 from '@/images/Emoffice1_0.png';

const Data = reactive({
    MainTitle_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "GET IN TOUCH"),
    MainTitle_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Contact us"),
    ContactTitle: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Contact "),
    InfoTitle: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Information"),
    IP_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Tel : (+66)84 914 4787, (+66)81-988-5787"),
    IP_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Email : empowermatt2021@gmail.com"),
    IP_3: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Tax ID : 0135564006410"),
    IP_4: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Empowermatt Company Limited (Head Office) 26/17 Moo 5, Khu Khot Subdistrict, Lam Luk Ka District, Pathum Thani Province, 12130, Thailand.")
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
<template>
    <div class="bg-image-contact" v-bind:style="{ backgroundImage: 'url(' + Office_photo3 + ')' }">
        <div class="container-fluid bg-image padding-head">
            <div class="container">
                <div class="center margin-head" data-aos="fade-up">
                    <p class="m-0 Touch-text front-25px-320-contact">{{ Data.MainTitle_1 }}</p>
                    <hr class="line-contact-head" size="5px" />
                    <p class="contact-text front-25px-320-contact">{{ Data.MainTitle_2 }}</p>
                </div>
                <div class="row row-bg-color " data-aos="fade-up">
                    <div class="col-lg-6">
                        <p class="contact-head front-16px-320-contact">{{ Data.ContactTitle }}<span class="green-text">{{ Data.InfoTitle
                        }}</span> </p>
                        <p class="contact-detial margin-text-detail front-9px-320-contact">{{ Data.IP_1 }}</p>
                        <p class="contact-detial margin-text-detail front-9px-320-contact">{{ Data.IP_2 }}</p>
                        <p class="contact-detial margin-space front-9px-320-contact">{{ Data.IP_3 }}</p>
                        <p class="contact-detial margin-text-bottom front-9px-320-contact">{{ Data.IP_4 }}</p>
                    </div>
                    <div class="col-lg-6" style="padding: 0%;">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21305.262929627!2d100.62771899580984!3d13.949205537943062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7de40a612a1f%3A0xda635638e74574f5!2zMjYg4LiLLiDguIjguLLguKHguKMg4LiBIOC4iy4gMTcg4LiV4Liz4Lia4Lil4LiE4Li54LiE4LiVIOC4reC4s-C5gOC4oOC4reC4peC4s-C4peC4ueC4geC4geC4siDguJvguJfguLjguKHguJjguLLguJnguLUgMTIxMzA!5e0!3m2!1sth!2sth!4v1702410649085!5m2!1sth!2sth"
                            width="100%" height="100%" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center " data-aos="fade-up">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('first')"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="first" data-aos="fade-up" >
        <div class="row">
            <div class="col-lg-8 m-0 p-0 ">
                <img :src="Office_photo1" alt="Office_photo_1" class="image-office">
            </div>
            <div class="col-lg-4 m-0 p-0 ">
                <img :src="Office_photo2" alt="Office_photo2" class="image-office">
                <img :src="Office_photo3" alt="Office_photo3" class="image-office">
            </div>
        </div>
    </div>
</template>
<style lang="scss">// Import Main styles for this application
@import '/src/assets/contactUs.scss';</style>