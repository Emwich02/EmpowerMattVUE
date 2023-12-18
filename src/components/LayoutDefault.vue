<script setup>
import { RouterView } from 'vue-router'
import { onMounted, computed, reactive } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useLanguage } from '/src/stores/useLanguage.js'
import logo from '@/images/logo.jpg';
import address from '@/images/Address.png';
import email from '@/images/Email.png';
import tax from '@/images/Tax.png';
import tell from '@/images/Tell.png';

const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)
const CONSTANT_WORD = reactive({
    Home: computed(() => isLang.value == 'THA' ? 'หน้าหลัก' : 'Home'),
    Products: computed(() => isLang.value == 'THA' ? 'สินค้า' : 'Products'),
    NaturalHempFabric: computed(() => isLang.value == 'THA' ? 'ผ้าใยกัญชงธรรมชาติ' : 'Natural Hemp Fabric'),
    HempBioplasticsCompoundMaterials: computed(() => isLang.value == 'THA' ? 'ป่านพลาสติกชีวภาพสารประกอบวัสดุ' : 'Hemp bioplastics compound materials'),
    Services: computed(() => isLang.value == 'THA' ? 'บริการ' : 'Services'),
    Teams: computed(() => isLang.value == 'THA' ? 'ทีม' : 'Teams'),
    ContactUs: computed(() => isLang.value == 'THA' ? 'ติดต่อเรา' : 'Contact Us'),
    Selectlang: computed(() => isLang.value == 'THA' ? 'ไทย' : 'ENG'),
    Optionlang: computed(() => isLang.value == 'THA' ? 'อังกฤษ' : 'THA'),
    Desctiption: 'IF YOU HAVE ANY QUESTIONS',
    Tel: 'TEL : (+66)81-988-5787',
    Email: ' E-MAIL : empowermatt2021@gmail.com',
    Tax: 'TAX ID : 0135564006410',
    Address: ' ADDRESS : EMPOWERMATT COMPANY LIMITED (HEAD OFFICE) 26/17 MOO 5 KHU KHOT SUBDISTRICT, LAM LUK KA DISTRICT, PATHUM THANI PROVINCE, 12130'
});


function setLang(lang) {
    console.log(lang);
    languageStores.switchLang(lang)
}
onMounted(() => {
    setLang('ENG')
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        offset: 120, // Offset (in pixels) from the top of the element when the animation starts
        easing: 'ease', // Easing function for animation
        once: true, // Whether to only trigger the animation once
    });
})


window.onclick = function(event){
    if(!event.target.matches(".navbar-toggler btn-custom")){
        var dd = document.getElementsByClassName("navbar-collapse collapse show");
        for(var i = 0; i<dd.length;i++){
            var x = dd[i];

            if(x.classList.contains("show")){
                x.classList.remove("show")
            }
        }
    }
}
    
</script>
<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-cream p-2">
            <div class="container d-flex justify-content-between">
                <router-link to="/" class="navbar-brand ">
                    <img class="logo-respon" :src="logo" alt="" width="180" height="70">
                </router-link>
           
                <button class="navbar-toggler btn-custom" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-key="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                        <li class="nav-item flex-fill">
                            <router-link to="/" class="nav-link nav-nav ps-3 pe-3 no-transition" id="button1"
                                :class="{ active: $route.path === '/' }" style="color: black;">
                                {{ CONSTANT_WORD.Home }}</router-link>
                        </li>
                        <li class="nav-item flex-fill">
                            <div class="dropdown nav-link pt-0 m-0 ">
                                <router-link to="/Products"
                                    class=" nav-link dropdown-toggle nav-nav ps-3 pe-3 no-transition mb-0 mx-0 custom-link custom-dropdown"
                                    :class="{ active: $route.path === '/Products' || $route.path === '/Naturalhempfabric' || $route.path === '/ProductBioPlastic' }"
                                    @click="toggleClass">
                                    {{ CONSTANT_WORD.Products }}</router-link>
                                <ul class="dropdown-menu dropdown-custom p-0 " aria-keyledby="dropdownMenuButton1">
                                    <li><router-link to="/Naturalhempfabric" class="dropdown-item product-1">{{
                                        CONSTANT_WORD.NaturalHempFabric }}</router-link></li>
                                    <li><router-link to="/ProductBioPlastic" class="dropdown-item product-2">{{
                                        CONSTANT_WORD.HempBioplasticsCompoundMaterials }}</router-link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item flex-fill">
                            <router-link to="/Services" class="nav-link nav-nav ps-3 pe-3 no-transition"
                                style="color: black;" id="button2" :class="{ active: $route.path === '/Services' }">{{
                                    CONSTANT_WORD.Services }}</router-link>
                        </li>
                        <li class="nav-item flex-fill">
                            <router-link to="/team" class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                id="button3" :class="{ active: $route.path === '/team' }">{{ CONSTANT_WORD.Teams
                                }}</router-link>
                        </li>
                        <li class="nav-item flex-fill">
                            <router-link to="/ContactUs" class="nav-link nav-nav ps-3 pe-3 no-transition"
                                style="color: black;" id="button4" :class="{ active: $route.path === '/ContactUs' }">{{
                                    CONSTANT_WORD.ContactUs }}</router-link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
    <!-- <li class="nav-item">
        <div class="dropdown" id="dropdown2" style="margin-right: 0px; margin-left: 0px;">
            <router-link to="" data-value="ENG"
                class="nav-link dropdown-toggle nav-nav ps-3 pe-3 no-transition mb-0 mx-0 custom-link custom-dropdown">
                <span id="selectedLanguage2">{{ CONSTANT_WORD.Selectlang }}</span>
            </router-link>
            <ul class="dropdown-menu dropdown-custom-2 p-0 m-0 content-center" aria-keyledby="dropdownMenuButton2">
                <li><router-link to="" class="dropdown-item lang-dropdown text-center" data-value="ENG"
                        @click="setLang(CONSTANT_WORD.Optionlang)">{{
                            CONSTANT_WORD.Optionlang }}</router-link></li>
            </ul>
        </div>
    </li> -->

    <body>
        <RouterView />
    </body>

    <footer class="text-center text-lg-start bg-cream text-muted">
        <section class="pt-2 pb-2">
            <div class="first ">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-5 col-xl-4 mx-auto ">
                            <h6 class="text-uppercase fw-bold mb-4">
                                {{ CONSTANT_WORD.Desctiption }}
                            </h6>
                            <p>
                                <img :src="tell" class="img-fluid" style="max-width: 100%; height: 21px;"> <i
                                    class="bi bi-telephone-fill"></i> {{ CONSTANT_WORD.Tel }}
                            </p>
                            <p>
                                <img :src="email" class="img-fluid" style="max-width: 100%; height: 16px;">{{
                                    CONSTANT_WORD.Email }}
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-5 col-xl-4 mx-auto mb-4">
                            <br><br>
                            <p>
                                <img :src="tax" class="img-fluid" style="max-width: 100%; height: 19px;"> {{
                                    CONSTANT_WORD.Tax }}
                            </p>
                        </div>
                    </div>
                    <div class="col-md-9 col-lg-11 col-xl-10 mx-auto mb-4">
                        <p>
                            <img :src="address" class="img-fluid"
                                style="max-width: 100%; height: 20px; padding-left: 3px;">{{ CONSTANT_WORD.Address }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="second">
                <div class="container text-center text-md-start mt-5 front-13px-480 front-9px-325">
                    <div class="row mt-3 ">
                        <h6 class="text-uppercase fw-bold mb-4 front-13px-480 front-9px-325">
                            {{ CONSTANT_WORD.Desctiption }}
                        </h6>
                        <p>
                            <img :src="tell" class="img-fluid" style="max-width: 100%; height: 21px;"> <i
                                class="bi bi-telephone-fill"></i> {{ CONSTANT_WORD.Tel }}
                        </p>
                        <p>
                            <img :src="email" class="img-fluid" style="max-width: 100%; height: 16px;">{{
                                CONSTANT_WORD.Email }}
                        </p>
                        <br><br>
                        <p>
                            <img :src="tax" class="img-fluid" style="max-width: 100%; height: 19px;"> {{
                                CONSTANT_WORD.Tax }}
                        </p>
                    </div>
                    <p>
                        <img :src="address" class="img-fluid" style="max-width: 100%; height: 20px; padding-left: 3px;">{{
                            CONSTANT_WORD.Address }}
                    </p>
                </div>
            </div>
        </section>
    </footer>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/layoutDefault.scss';

@keyframes staggeredSlideIn {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    25% {
        opacity: 1;
        transform: translateY(0);
    }

    50% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.dropdown-menu {
    animation: staggeredSlideIn 1s ease-in-out;
}

@keyframes staggeredItemFadeIn {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}</style>
  