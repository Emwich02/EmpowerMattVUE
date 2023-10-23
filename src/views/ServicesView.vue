<script setup>
const Data = {
    MainTitle: "Our services",
    MainDetail_1: "Research & Consultant services",
    MainDetail_2: "Research and development in composite and green materials including nanotechnology.",
    MainDetail_3: "Consultant for an innovation project in the field of composite and green materials including nanotechnology.",
    Research_1: "Research meterials for ‘",
    Research_2: "Research & Consultant service",
    Research_Detail_1: "Empowermatt Co.,Ltd. and YATT Co., Ltd. are doing the development of electric automotive. The energy is an electrical battery and the body is produced by hemp fiber reinforced polymer as called ‘Hemp Car’. By the way, we will never stop to develop our products, and we will update our progressing project as soon as possible. It is coming soon, Thank you.",
    Spec_Hempcar: "Specification of",
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
    Prop_Hempcar: "Properties of materials for",
    Prop_Hempcar_Lab: "Testing Laboratory ",
    Prop_Hempcar_Method: "Test method"
}
</script>
<template>
    <div class="container mb-5" style="padding-top: 10rem;">
        <div class="col-3 bg-head d-flex align-items-center justify-content-center">
            <p style="font-size: 1.875vw;">{{ Data.MainTitle }}</p>
        </div>
        <div class="row">
            <div class="col-lg-6 text-head-box">
                <p class="head-text">{{ Data.MainDetail_1 }}</p>
                <p class="detail-text">{{ Data.MainDetail_2 }}</p>
                <p class="detail-text">{{ Data.MainDetail_3 }}</p>
            </div>
            <div class="col-lg-6 row">
                <div class="col-5 bg-image-research d-flex align-items-center justify-content-center">
                    <p class="services-text">{{ Data.Research_1 }}<span class="hemp-car-text">Hemp Car</span>’</p>
                </div>
                <div class="col-5 bg-image-consult d-flex align-items-center justify-content-center">
                    <p class="services-text">{{ Data.Research_2 }}</p>
                </div>
            </div>
        </div>
    </div>
    <hr class="line-section" size="5px">
    <div class="bg-image-hempcar">
        <!-- {{!-- <img src="/images/hempcar-bg.png" alt="hempcar" style="width: 100%;"> --}} -->
    </div>
    <div class="bg-green-color">
        <div class="container opacity-container">
            <div>
                <p>Hemp Car</p>
                <p>{{ Data.Research_Detail_1 }}</p>
            </div>
            <div>
                <p>{{ Data.Spec_Hempcar }} ‘<span class="hemp-car-text">Hemp Car</span>’</p>
                <ul>
                    <li>{{ Data.Spec_Detail_Hempcar_1 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_2 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_3 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_4 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_5 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_6 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_7 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_8 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_9 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_10 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_11 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_12 }}</li>
                    <li>{{ Data.Spec_Detail_Hempcar_13 }}</li>
                </ul>
                <p>video hemp car</p>
            </div>
            <div>
                <p>{{ Data.Prop_Hempcar }} ‘<span class="hemp-car-text">Hemp Car</span>’</p>
                <p>{{ Data.Prop_Hempcar_Lab }}</p>
                <p>{{ Data.Prop_Hempcar_Method }} : GALAXI (GISTDA’s Aerospace Laboratory of Excellence and Innovation),
                    GISTDA</p>
                <p>{{ Data.Prop_Hempcar_Method }} :</p>
                <p>1. ASTM D3039/D3039M-17 : Standard test method for tensile properties of </p>
                <p>polymer matrix composite materials</p>
                <p>2. ASTM D790-17 : Standard test method for flexural properties of </p>
                <p>unreinforced and reinforced plastics and electrical</p>
                <table>
                    <tr>
                        <th>Mechanical and physical properties</th>
                        <th>Testing results</th>
                        <th>Standard method</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Admin</td>
                        <td>North</td>
                    </tr>
                    <tr>
                        <td>Smith</td>
                        <td>Logistics</td>
                        <td>South</td>
                    </tr>
                    <tr>
                        <td>David</td>
                        <td>Transport</td>
                        <td>East</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <br>
        <br>
        <hr class="line-section-2" size="10px">
    </div>
    <hr class="line-section-2" size="10px">

</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/services.scss';
</style>