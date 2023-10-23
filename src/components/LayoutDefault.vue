<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import logo from '@/images/logo.jpg';

//จำลอง api ส่งภาษามา
const CONSTANT_WORD = {
    Home: 'Home',
    Products: 'Products',
    NaturalHempFabric: 'Natural Hemp Fabric',
    HempBioplasticsCompoundMaterials: 'Hemp bioplastics compound materials',
    Services: 'Services',
    Teams: 'Teams',
    ContactUs: 'Contact Us',
    Selectlang: 'ENG',
    ENG: 'ENG',
    THA: 'THA',
    Desctiption: 'IF YOU HAVE ANY QUESTIONS',
    Tel: 'TEL : (+66)81-988-5787',
    Email: 'E-MAIL : empowermatt2021@gmail.com',
    Tax: 'TAX ID : 0135564006410',
    Address: 'ADDRESS : EMPOWERMATT COMPANY LIMITED (HEAD OFFICE) 26/17 MOO 5 KHU KHOT SUBDISTRICT, LAM LUK KA DISTRICT,PATHUM THANI PROVINCE, 12130'
}
// const CONSTANT_WORD = {
//     Home: 'หน้าหลัก',
//     Products: 'สินค้า',
//     NaturalHempFabric: 'ผ้าใยกัญชงธรรมชาติ',
//     HempBioplasticsCompoundMaterials: 'ป่านพลาสติกชีวภาพสารประกอบวัสดุ',
//     Services: 'บริการ',
//     Teams: 'ทีม',
//     ContactUs: 'ติดต่อเรา',
//     Selectlang: 'ENG',
//     ENG: 'ENG',
//     THA: 'THA',
//     Desctiption: 'IF YOU HAVE ANY QUESTIONS',
//     Tel: 'TEL : (+66)81-988-5787',
//     Email: 'E-MAIL : empowermatt2021@gmail.com',
//     Tax: 'TAX ID : 0135564006410',
//     Address: 'ADDRESS : EMPOWERMATT COMPANY LIMITED (HEAD OFFICE) 26/17 MOO 5 KHU KHOT SUBDISTRICT, LAM LUK KA DISTRICT,PATHUM THANI PROVINCE, 12130'
// }
const activeButton = ref(null);
function setActiveButton(buttonId) {
    activeButton.value = buttonId;
}
</script>
<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-cream p-2">
            <div class="container d-flex justify-content-between">
                <router-link to="/" class="navbar-brand">
                    <img :src="logo" alt="" width="200" height="80">
                </router-link>
                <button class="navbar-toggler btn-custom" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-key="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <router-link to="/" class=" nav-link nav-nav ps-3 pe-3 no-transition" id="button1"
                                @click="setActiveButton('button1')" :class="{ active: activeButton === 'button1' }"
                                style="color: black;">
                                {{ CONSTANT_WORD.Home }}</router-link>
                        </li>
                        <li class="nav-item ">
                            <div class="dropdown nav-link nav-nav text-center no-transition"
                                @click="setActiveButton('dropdown1')" :class="{ active: activeButton === 'dropdown1' }"
                                id="dropdown1" style="margin-right: 0px; margin-left: 0px;">
                                <button class="btn dropdown-toggle btn-custom ps-3 pe-3 shadow-none" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <router-link to="#">
                                        <a>{{ CONSTANT_WORD.Products }}</a>
                                    </router-link>
                                </button>
                                <ul class="dropdown-menu" aria-keyledby="dropdownMenuButton1">
                                    <li><router-link to="#" class="dropdown-item">{{ CONSTANT_WORD.NaturalHempFabric
                                    }}</router-link></li>
                                    <li><router-link to="#" class="dropdown-item">{{
                                        CONSTANT_WORD.HempBioplasticsCompoundMaterials
                                    }}</router-link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;" id="button2"
                                @click="setActiveButton('button2')" :class="{ active: activeButton === 'button2' }"
                                href="#">{{
                                    CONSTANT_WORD.Services }}</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/team" class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                id="button3" @click="setActiveButton('button3')"
                                :class="{ active: activeButton === 'button3' }">{{ CONSTANT_WORD.Teams }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#" class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                id="button4" @click="setActiveButton('button4')"
                                :class="{ active: activeButton === 'button4' }">{{
                                    CONSTANT_WORD.ContactUs }}</router-link>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown nav-link nav-nav text-center no-transition" id="dropdown2"
                                @click="setActiveButton('dropdown2')" :class="{ active: activeButton === 'dropdown2' }"
                                style="margin-right: 0px; margin-left: 0px;">
                                <button class="btn dropdown-toggle btn-custom ps-3 pe-3" type="button"
                                    id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <router-link to="#">
                                        <span id="selectedLanguage2">{{ CONSTANT_WORD.Selectlang }}</span>
                                    </router-link>
                                </button>
                                <ul class="dropdown-menu" aria-keyledby="dropdownMenuButton2">
                                    <li><router-link to="#" class="dropdown-item" href="#" data-value="ENG">{{
                                        CONSTANT_WORD.ENG }}</router-link></li>
                                    <li><router-link to="#" class="dropdown-item" href="#" data-value="THA">{{
                                        CONSTANT_WORD.THA }}</router-link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <RouterView />
    <footer class="text-center text-lg-start bg-cream text-muted">
        <section class="pt-2 pb-2">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-5 col-xl-4 mx-auto ">
                        <h6 class="text-uppercase fw-bold mb-4">
                            {{ CONSTANT_WORD.Desctiption }}
                        </h6>
                        <p>
                            <i class="bi bi-telephone-fill"></i> {{ CONSTANT_WORD.Tel }}
                        </p>
                        <p>
                            {{ CONSTANT_WORD.Email }}
                        </p>
                    </div>
                    <div class="col-md-3 col-lg-5 col-xl-4 mx-auto mb-4">
                        <br><br>
                        <p>
                            {{ CONSTANT_WORD.Tax }}
                        </p>
                    </div>
                </div>
                <div class="col-md-9 col-lg-11 col-xl-10 mx-auto mb-4">
                    <p>
                        {{ CONSTANT_WORD.Address }}
                    </p>
                </div>
            </div>
        </section>
    </footer>
</template>
  