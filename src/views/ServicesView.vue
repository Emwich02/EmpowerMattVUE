<script setup>
import { computed, reactive, ref } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)
import hemp_farm from '@/images/412798_0.jpg';
import solar_1 from '@/images/solar-sheet-1.jpg';
import solar_2 from '@/images/solar-sheet-2.jpg';
import solar_3 from '@/images/solar-sheet-3.jpg';
import hempcar from '@/images/hempcar.jpg';
import hempcar_art from '@/images/hempcar-art.png';
import graphene from '@/images/graphene_graphic_Aui_1.png';
import bg_hempcar from '@/images/car_pic_afteredit.png';
const Data = reactive({
    MainTitle: computed(() => isLang.value == 'THA' ? 'บริการของเรา' : 'Our services'),
    MainDetail_1: computed(() => isLang.value == 'THA' ? 'พบกับทีมของพวกเรา' : 'Research & Consultant services'),
    MainDetail_2: computed(() => isLang.value == 'THA' ? '1111' : "Research and development in composite and green materials including nanotechnology."),
    MainDetail_3: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Consultant for an innovation project in the field of composite and green materials including nanotechnology."),
    Research_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Research meterials for ‘"),
    Research_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Research & Consultant service"),
    Research_Detail_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Empowermatt Co.,Ltd. and YATT Co., Ltd. are doing the development of electric automotive. The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer as called ‘Hemp Car’. By the way, we will never stop to develop our products, and we will update our progressing project as soon as possible. It is coming soon, Thank you."),
    Spec_Hempcar: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Specification of"),
    Prop_Hempcar: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Properties of materials for "),
    Prop_Hempcar_Lab: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Testing Laboratory : GALAXI (GISTDA’s Aerospace Laboratory of Excellence and Innovation),GISTDA."),
    Prop_Hempcar_Method: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Test method :"),
    Research_Solar_Title: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Research meterials for "),
    Solar: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Solar Satellite Panels"),
    Hempcar: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Hemp car"),
    Prop_solar_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Properties of materials for"),
    Graphene: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Graphene"),
    Graphene_Detail_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "We have done the research and development in “Graphene Composites”."),
    Graphene_Detail_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "We are collaboration with Graphene Creation Co.,Ltd. to do some research"),
    Graphene_Detail_3: computed(() => isLang.value == 'THA' ? 'ไอยู' : "projects to create some innovation products with based on graphene such as"),
    Graphene_Detail_4: computed(() => isLang.value == 'THA' ? 'ไอยู' : "special functional textile."),
    Method_Detail_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Standard test method for tensile properties of polymer matrix composite materials."),
    Method_Detail_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Standard test method for flexural properties of unreinforced and reinforced plastics and electrical.")
});
const listdata_1 = ref({
    Spec_Detail_Hempcar_1: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Body Material: Structural car body made with Hemp Fiber Composite Material"),
    Spec_Detail_Hempcar_2: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Electrical System: Rechargeable electric motor with BLDC (Brushless DC) 1,000 W, 60 V"),
    Spec_Detail_Hempcar_3: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Controller: EM30s"),
    Spec_Detail_Hempcar_4: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Battery: Lead acid, 72V, 20 Ah, with a rechargeable box (2.5 Ah)"),
    Spec_Detail_Hempcar_5: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Differential Gear: Hi-Lo/Wheel & Tire: Upside-down/4-link"),
    Spec_Detail_Hempcar_6: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Brakes: Front and Rear Disc"),
    Spec_Detail_Hempcar_7: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Lighting: LED Headlight, Taillight"),
    Spec_Detail_Hempcar_8: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Display: 5-inch screen"),
    Spec_Detail_Hempcar_9: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Security: Anti-theft Remote (No GPS)"),
    Spec_Detail_Hempcar_10: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Weight: 150 kg"),
    Spec_Detail_Hempcar_11: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Dimensions: 105 cm width x 210 cm length x 160 cm height"),
    Spec_Detail_Hempcar_12: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Color Options: Light blue, white, black, and natural hemp fiber"),
    Spec_Detail_Hempcar_13: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Decorative Art: Customizable for customers with an additional charge"),
})
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
<template>
    <div>
        <div class="bg-container fullheight-service">
            <div class="container-fluid mt-5 mb-5" data-aos="fade-up">
                <div class="container">
                    <div class="col-2 bg-head d-flex align-items-center justify-content-center">
                        <p class="title-text ">{{ Data.MainTitle }}</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 text-head-box">
                            <p class="head-text">{{ Data.MainDetail_1 }}</p>
                            <p class="detail-text">{{ Data.MainDetail_2 }}</p>
                            <p class="detail-text">{{ Data.MainDetail_3 }}</p>
                        </div>
                        <div class="col-lg-6 row ">
                            <div class="col-1"></div>
                            <div class="col-5 bg-image-research p-0"
                                v-bind:style="{ backgroundImage: 'url(' + hempcar_art + ')' }">
                                <div
                                    class="container-fluid bg-image-research d-flex align-items-center justify-content-center m-0">
                                    <p class="services-text">{{ Data.Research_1 }}<span class="hemp-car-text">{{
                                        Data.Hempcar
                                    }}</span>’</p>
                                </div>

                            </div>
                            <div class="col-5 bg-image-consult p-0"
                                v-bind:style="{ backgroundImage: 'url(' + solar_1 + ')' }">
                                <div
                                    class="container-fluid bg-image-consult d-flex align-items-center justify-content-center m-0">
                                    <p class="services-text">{{ Data.Research_2 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('first')"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-container">
        <hr class="line-section-2 mt-10" size="5px" data-aos="fade-up">
    </div>
    <div class="container-fluid full-height-2 bg-container bg-cream-green-color " id="first">
        <div class="pt-8">
            <div class="d-flex align-items-center justify-content-center" data-aos="fade-up">
                <p class="head-text-2">{{ Data.Research_1 }}<span class="hemp-car-text">{{ Data.Hempcar
                }}</span>’</p>
            </div>
            <div class="hempcar-box d-flex align-items-center justify-content-center" data-aos="fade-up">
                <img :src="bg_hempcar" alt="" class="bg-image-hempcar">
            </div>
            <div class="d-flex align-items-center justify-content-center " data-aos="fade-up">
                <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('second')"></div>
            </div>
        </div>
    </div>
    <div class="bg-green-color" id="second">
        <div class="container opacity-container pt-8" data-aos="fade-up">
            <div class="row pt-5 mb-5">
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <img :src="hempcar" alt="" class="hempcar-photo">
                </div>
                <div class="col-lg-5">
                    <p class="hempcar-head-text">{{ Data.Hempcar }}</p>
                    <p class="hempcar-detail-text">{{ Data.Research_Detail_1 }}</p>
                </div>
            </div>
            <div class="m-spec" data-aos="fade-up">
                <p class="Spec-main-text">{{ Data.Spec_Hempcar }} ‘<span class="hemp-car-text">{{ Data.Hempcar }}</span>’
                </p>
                <ul>
                    <li class="Spec-detail-text" v-for="(value, key) in listdata_1" :key="key">
                        {{ value }}
                    </li>
                </ul>
                <div class="d-flex justify-content-center my-5" data-aos="fade-up">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hJ-DNyCZ8qI?si=HlKji4Vp42JqXasq"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="m-prop" data-aos="fade-up">
                <p class="Prop-main-text">{{ Data.Prop_Hempcar }} ‘<span class="hemp-car-text">{{ Data.Hempcar }}</span>’
                </p>
                <p class="Prop-detail-text">{{ Data.Prop_Hempcar_Lab }}</p>
                <p class="Prop-detail-text">{{ Data.Prop_Hempcar_Method }}</p>
                <p class="Prop-Method-detail-text-1">1. ASTM D3039/D3039M-17 : </p>
                <p class="Prop-Method-detail-text-2">{{ Data.Method_Detail_1 }}</p>
                <p class="Prop-Method-detail-text-1">2. ASTM D790-17 : </p>
                <p class="Prop-Method-detail-text-2">{{ Data.Method_Detail_2 }}</p>
                <div class="table-responsive" data-aos="fade-up">
                    <table>
                        <tr>
                            <th>Mechanical and physical properties</th>
                            <th>Testing results</th>
                            <th>Standard method</th>
                        </tr>
                        <tr>
                            <td>Tensile strength [MPa]</td>
                            <td>34.445±1.194</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Ultimate tensile strain [usn]</td>
                            <td>7875.167±793.89</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Tensile modulus (chord 1000-3000 usn) [GPa]</td>
                            <td>4.883±0.115</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Flexural strength [MPa]</td>
                            <td>43.221±3.359</td>
                            <td>ASTM D790-17</td>
                        </tr>
                        <tr>
                            <td>Flexural modulus (chord 50-100 N) [MPa]</td>
                            <td>590.944±41.81</td>
                            <td>ASTM D790-17</td>
                        </tr>
                        <tr>
                            <td>Maximum Load [kN]</td>
                            <td>2.85±0.202</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Tensile strength [MPa]</td>
                            <td>34.445±1.194</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Ultimate tensile strain [usn]</td>
                            <td>7875.167±793.89</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Tensile modulus (chord 1000-3000 usn) [GPa]</td>
                            <td>4.883±0.115</td>
                            <td>ASTM D3039/D3039M-17</td>
                        </tr>
                        <tr>
                            <td>Flexural strength [MPa]</td>
                            <td>43.221±3.359</td>
                            <td>ASTM D790-17</td>
                        </tr>
                        <tr>
                            <td>Flexural modulus (chord 50-100 N) [MPa]</td>
                            <td>590.944±41.81</td>
                            <td>ASTM D790-17</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center " data-aos="fade-up">
            <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('third')"></div>
        </div>
        <br>
        <br>
        <hr class="line-section-2" size="5px" data-aos="fade-up">
    </div>
    <div class="bg-image-farm" v-bind:style="{ backgroundImage: 'url(' + hemp_farm + ')' }" id="third">
        <div class="container-fluid bg-image-farm pt-8 pb-5">
            <div class="container d-flex justify-content-center pt-5" data-aos="fade-up">
                <p class="head-text ">{{ Data.Research_Solar_Title }} ‘<span class="hemp-car-text">{{ Data.Solar }}</span>’
                </p>
            </div>
            <div class="row d-flex justify-content-center m-solar-image" data-aos="fade-up">
                <div class="col-6 custom-width">
                    <img :src="solar_2" alt="solar-1" class="solar-image-1">
                    <img :src="solar_3" alt="solar-2" class="solar-image-2">
                </div>
                <div class="col-6 custom-width-2">
                    <img :src="solar_1" alt="solar-3" class="solar-image-3">
                </div>
            </div>
            <div class="container" data-aos="fade-up">
                <div class="m-solar-main-text">
                    <p class="Prop-main-text">{{ Data.Prop_solar_1 }} ‘<span class="hemp-car-text">{{ Data.Solar }}</span>’
                    </p>
                </div>
                <div class="p-table-solar table-responsive" data-aos="fade-up">
                    <table>
                        <tr>
                            <th>Mechanical and physical properties</th>
                            <th>Testing results</th>
                            <th>Standard method</th>
                        </tr>
                        <tr>
                            <td>Weight [g/m2]</td>
                            <td>282.40</td>
                            <td>ASTM D3776</td>
                        </tr>
                        <tr>
                            <td>Tensile strength, Warp [Lbf]</td>
                            <td>297.50</td>
                            <td>ASTM D5034</td>
                        </tr>
                        <tr>
                            <td>Tensile strength, Filling [Lbf]</td>
                            <td>426.74</td>
                            <td>ASTM D5034</td>
                        </tr>
                        <tr>
                            <td>Tongue Tear strength, Warp [Lbf]</td>
                            <td>48.82</td>
                            <td>ASTM D2261</td>
                        </tr>
                        <tr>
                            <td>Tongue Tear strength, Filling [Lbf]</td>
                            <td>82.92</td>
                            <td>ASTM D2261</td>
                        </tr>
                    </table>
                </div>
                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('fourt')"></div>
                </div>
            </div>

        </div>
        <div class="bg-image-farm">
            <hr class="line-section-2" size="5px" data-aos="fade-up">
        </div>
    </div>
    <div class=" bg-container full-height " id="fourt">
        <div class="py-5 mb-5 ">
        </div>
        <div class="container d-flex justify-content-center">
            <div class="row ">
                <div class="col-lg-4 " data-aos="fade-up">
                    <img :src="graphene" alt="graphene" class="graphene-photo">
                </div>
                <div class="col-lg-8 graphene-text" data-aos="fade-up">
                    <p class="head-text hemp-car-text">{{ Data.Graphene }}</p>
                    <p class="graphene-detail-text m-0">{{ Data.Graphene_Detail_1 }}</p>
                    <p class="graphene-detail-text m-0">{{ Data.Graphene_Detail_2 }}</p>
                    <p class="graphene-detail-text m-0">{{ Data.Graphene_Detail_3 }}</p>
                    <p class="graphene-detail-text m-0">{{ Data.Graphene_Detail_4 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">// Import Main styles for this application
@import '/src/assets/services.scss';</style>