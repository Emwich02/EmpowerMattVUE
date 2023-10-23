<script setup>
import { ref } from 'vue'
const Data = {
    MainTitle: "Our services",
    MainDetail_1: "Research & Consultant services",
    MainDetail_2: "Research and development in composite and green materials including nanotechnology.",
    MainDetail_3: "Consultant for an innovation project in the field of composite and green materials including nanotechnology.",
    Research_1: "Research meterials for ‘",
    Research_2: "Research & Consultant service",
    Research_Detail_1: "Empowermatt Co.,Ltd. and YATT Co., Ltd. are doing the development of electric automotive. The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer as called ‘Hemp Car’. By the way, we will never stop to develop our products, and we will update our progressing project as soon as possible. It is coming soon, Thank you.",
    Spec_Hempcar: "Specification of",
    Prop_Hempcar: "Properties of materials for ",
    Prop_Hempcar_Lab: "Testing Laboratory : GALAXI (GISTDA’s Aerospace Laboratory of Excellence and Innovation),GISTDA.",
    Prop_Hempcar_Method: "Test method :"
}
const listdata_1 = ref({
    Spec_Detail_Hempcar_1: "Body Material: Structural car body made with Hemp Fiber Composite Material",
    Spec_Detail_Hempcar_2: "Electrical System: Rechargeable electric motor with BLDC (Brushless DC) 1,000 W, 60 V",
    Spec_Detail_Hempcar_3: "Controller: EM30s",
    Spec_Detail_Hempcar_4: "Battery: Lead acid, 72V, 20 Ah, with a rechargeable box (2.5 Ah)",
    Spec_Detail_Hempcar_5: "Differential Gear: Hi-Lo/Wheel & Tire: Upside-down/4-link",
    Spec_Detail_Hempcar_6: "Brakes: Front and Rear Disc",
    Spec_Detail_Hempcar_7: "Lighting: LED Headlight, Taillight",
    Spec_Detail_Hempcar_8: "Display: 5-inch screen",
    Spec_Detail_Hempcar_9: "Security: Anti-theft Remote (No GPS)",
    Spec_Detail_Hempcar_10: "Weight: 150 kg",
    Spec_Detail_Hempcar_11: "Dimensions: 105 cm width x 210 cm length x 160 cm height",
    Spec_Detail_Hempcar_12: "Color Options: Light blue, white, black, and natural hemp fiber",
    Spec_Detail_Hempcar_13: "Decorative Art: Customizable for customers with an additional charge",
})

const mech_list = ref({
    Prop_Mech_1 : "Tensile strength [MPa]",
    Prop_Mech_2 : "Ultimate tensile strain [usn]"
})
</script>
<template>
    <div class="continer-fluid bg-container">
        <div class="container mb-5 bg-container" style="padding-top: 10rem;">
            <div class="col-3 bg-head d-flex align-items-center justify-content-center">
                <p class="title-text">{{ Data.MainTitle }}</p>
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
                        :style="{ backgroundImage: 'url(src/images/hempcar-art.png)' }">
                        <div class="container-fluid bg-image-research d-flex align-items-center justify-content-center m-0">
                            <p class="services-text">{{ Data.Research_1 }}<span class="hemp-car-text">Hemp Car</span>’</p>
                        </div>

                    </div>
                    <div class="col-5 bg-image-consult p-0"
                        :style="{ backgroundImage: 'url(src/images/solar-sheet-1.jpg)' }">
                        <div class="container-fluid bg-image-consult d-flex align-items-center justify-content-center m-0">
                            <p class="services-text">{{ Data.Research_2 }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="line-section-1" size="5px">
    </div>

    <div class="bg-image-hempcar">
        <!-- {{!-- <img src="/images/hempcar-bg.png" alt="hempcar" style="width: 100%;"> --}} -->
    </div>
    
    <div class="bg-green-color">
        <div class="container opacity-container ">
            <!-- Spec hemp car -->
            <div class="row pt-5 mb-5">
                <div class="col-1"></div>
                <div class="col-5">
                    <img src="/src/images/hempcar.jpg" alt="" class="hempcar-photo">
                </div>
                <div class="col-5">
                    <p class="hempcar-head-text">Hemp Car</p>
                    <p class="hempcar-detail-text">{{ Data.Research_Detail_1 }}</p>
                </div>
            </div>
            <div class="m-spec">
                <p class="Spec-main-text">{{ Data.Spec_Hempcar }} ‘<span class="hemp-car-text">Hemp Car</span>’</p>
                <ul>
                    <li class="Spec-detail-text"  v-for="(value, key) in listdata_1" :key="key">
                        {{ value }}
                    </li>
                </ul>
                <p>video hemp car</p>
            </div>
            <!-- Prop hemp car -->
            <div class="m-prop">
                <p class="Prop-main-text">{{ Data.Prop_Hempcar }} ‘<span class="hemp-car-text">Hemp Car</span>’</p>
                <p class="Prop-detail-text">{{ Data.Prop_Hempcar_Lab }}</p>
                <p class="Prop-detail-text">{{ Data.Prop_Hempcar_Method }}</p>
                <p class="Prop-Method-detail-text-1">1. ASTM D3039/D3039M-17 : </p>
                <p class="Prop-Method-detail-text-2">Standard test method for tensile properties of polymer matrix composite materials.</p>
                <p class="Prop-Method-detail-text-1">2. ASTM D790-17 : </p>
                <p class="Prop-Method-detail-text-2">Standard test method for flexural properties of unreinforced and reinforced plastics and electrical.</p>
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

        <br>
        <br>
        <hr class="line-section-2" size="5px">
    </div>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/services.scss';
</style>