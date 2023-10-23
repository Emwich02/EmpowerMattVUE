<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import logo from '@/images/logo.jpg';

const CONSTANT_WORD = {
    Home: 'Home',
    Products: 'Products',
    NaturalHempFabric: 'Natural Hemp Fabric',
    HempBioplasticsCompoundMaterials: 'Hemp bioplastics compound materials',
    Services: 'Services',
    Teams: 'Teams',
    ContactUs: 'Contact Us',
    ENG: 'ENG',
    THA: 'THA',
    Description: 'As a Platform Our approach to developing and creating empower material innovations steps up to Intellectual Properties(IP)'
}
const activeButton = ref(null);
const isActive = ref(false);
const buttons = ref([
    { id: 1, label: 'Home', key: 'Home', isActive: false },
    { id: 2, label: 'Products', key: 'Products', isActive: false },
    { id: 3, label: 'Natural Hemp Fabric', key: 'NaturalHempFabric', isActive: false },
    { id: 4, label: 'Hemp bioplastics compound materials', key: 'HempBioplasticsCompoundMaterials', isActive: false },
    { id: 5, label: 'Services', key: 'Services', isActive: false },
    { id: 6, label: 'Teams', key: 'Teams', isActive: false },
    { id: 7, label: 'Contact Us', key: 'ContactUs', isActive: false },
    { id: 8, label: 'ENG', key: 'ENG', isActive: false },
    { id: 9, label: 'THA', key: 'THA', isActive: false },
]);

function setActiveButton(button) {
    if (activeButton.value) {
        activeButton.value.classList.remove('active');
    }
    activeButton.value = button;
    button.classList.add('active');
}
function setActivea() {
    isActive.value = true;
}
</script>
<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-cream p-2">
            <div class="container d-flex justify-content-between">
                <a class="navbar-brand" href="/">
                    <img :src="logo" alt="" width="200" height="80">
                </a>
                <button class="navbar-toggler btn-custom" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-key="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <a class=" nav-link nav-nav active ps-3 pe-3 no-transition" :class="{ active: isActive }"
                                @click="setActivea" style="color: black;" href="/">
                                {{ CONSTANT_WORD.Home }}</a>
                        </li>
                        <li class="nav-item ">
                            <div class="dropdown nav-link nav-nav text-center no-transition"
                                @click="() => setActiveButton($event.target)" id="dropdown1">
                                <button class="btn dropdown-toggle btn-custom ps-3 pe-3 " type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <a>{{ CONSTANT_WORD.Products }}</a>
                                </button>
                                <ul class="dropdown-menu" aria-keyledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">{{ CONSTANT_WORD.NaturalHempFabric }}</a></li>
                                    <li><a class="dropdown-item" href="#">{{ CONSTANT_WORD.HempBioplasticsCompoundMaterials
                                    }}</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                :class="{ active: isActive }" @click="setActivea" href="#">{{
                                    CONSTANT_WORD.Services }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                :class="{ active: isActive }" @click="setActivea" href="/team">{{ CONSTANT_WORD.Teams }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-nav ps-3 pe-3 no-transition" style="color: black;"
                                :class="{ active: isActive }" @click="setActivea" href="#">{{
                                    CONSTANT_WORD.ContactUs }}</a>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown nav-link nav-nav text-center no-transition" id="dropdown2">
                                <button class="btn dropdown-toggle btn-custom ps-3 pe-3" type="button"
                                    id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span id="selectedLanguage2">{{ CONSTANT_WORD.ENG }}</span>
                                </button>
                                <ul class="dropdown-menu" aria-keyledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#" data-value="ENG">{{ CONSTANT_WORD.ENG }}</a></li>
                                    <li><a class="dropdown-item" href="#" data-value="THA">{{ CONSTANT_WORD.THA }}</a></li>
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
                            If you have any questions
                        </h6>
                        <p>
                            <i class="bi bi-telephone-fill"></i> TEL : (+66)81-988-5787
                        </p>
                        <p>
                            E-MAIL : empowermatt2021@gmail.com
                        </p>
                    </div>
                    <div class="col-md-3 col-lg-5 col-xl-4 mx-auto mb-4">
                        <br><br>
                        <p>
                            TAX ID : 0135564006410
                        </p>
                    </div>
                </div>
                <div class="col-md-9 col-lg-11 col-xl-10 mx-auto mb-4">
                    <p>
                        ADDRESS : EMPOWERMATT COMPANY LIMITED (HEAD OFFICE)
                        26/17 MOO 5 KHU KHOT SUBDISTRICT, LAM LUK KA DISTRICT,PATHUM THANI PROVINCE, 12130
                    </p>
                </div>
            </div>
        </section>
    </footer>
</template>
  