<script setup>
// import Hexagonal from '@/images/Hexagonal.png';
// import Graphene from '@/images/Graphene.png';
import Solarpic from '@/images/Hempfabric/SolarSatellitePanels.png';
import fabric from '@/images/Hempfabric/fabric.png';
// import aktableone from '@/images/Hempfabric/aktableone.png';
// import aktabletwo from '@/images/Hempfabric/aktabletwo.png';
// import aktablethree from '@/images/Hempfabric/aktablethree.png';
import hempcar from '@/images/Hempfabric/hempcar.png';
import { computed, reactive } from 'vue'
import { useLanguage } from '/src/stores/useLanguage.js'
const languageStores = useLanguage()
const isLang = computed(() => languageStores.activeLang)

const Data = reactive({
    Title: computed(() => isLang.value == 'THA' ? 'ผลิต' : 'Products'),
    Our: computed(() => isLang.value == 'THA' ? 'พบกับทีมของพวกเรา' : 'our'),
    Product: computed(() => isLang.value == 'THA' ? '1111' : 'Product'),
    Natural: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Natural"),
    HempFabric: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Hemp Fabric"),
    Descriptionmain: computed(() => isLang.value == 'THA' ? 'ไอยู' : `           Natural hemp fabrics are reinforcement textiles based on natural hemp fibre and others such
as polypropylene fibre, recycled polyethylene terephthalate fiber, glass fiber and cotton fibre which
are designed for fibre-reinforced polymer composite applications. The fabrics can be used with a
large variety of resins in processes including wet lay-up, vacuum infusion, resin transfer moulding
(RTM), press moulding, pultrusion, prepregging etc. The fabrics can be processed in the same
technique to glass or carbon fibre. Hybrid Hemp-PP reinforcements provide a high performance, an
easy processing, a lightweight and an environmental impact. They are suitable for semi-structural
and decorative applications in sectors such as automotive, construction, marine, sports and
consumer goods.`),
    SolarSatellitePanels: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Solar Satellite Panels"),
    DescriptionSolarSatellitePanels: computed(() => isLang.value == 'THA' ? 'ไอยู' : `Hemp and recycled polyethylene terephthalate
(rPET) composite materials consisted of
approximately 20 wt% natural hemp fiber. Then,
the composite materials were studied to fabricate
the panels for making the prototype for solar
satellite panels. This research project is the
collaboration between Empowermatt Co.,Ltd.
Hemp Thai Co.,Ltd., Thai Taffita Co.,Ltd., and
GALAXI (GISTDA’s Aerospace Laboratory of
Excellence and Innovation), GISTDA.`),
    DescriptionNaturalhempfabric: computed(() => isLang.value == 'THA' ? 'ไอยู' : `Natural hemp fabric for bio-composite materials, 
making possible lightweight structure.`),
    Propertiesof: computed(() => isLang.value == 'THA' ? 'ไอยู' : "Properties of "),
    AKNaturalFabric: computed(() => isLang.value == 'THA' ? 'ไอยู' : `'AK Natural Fabric'`),
});


function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
<template>
    <div>
        <div class="bgpic" v-bind:style="{ backgroundImage: 'url(' + hempcar + ')' }" >
            <div class="d-flex flex-column align-items-center justify-content-center " data-aos="fade-up">
                <div class="container pt-5">
                    <div class="col-2 box-naturalhemp d-flex align-items-center justify-content-center">
                        <h4 class="title-text-natural" style="color:white">{{ Data.Title }} </h4>
                    </div>
                    <div class="row pt-5">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-11">
                            <h4 class="front-17px">{{ Data.Our }} <span class="greencolor">{{ Data.Product }}</span>
                            </h4>
                            <h2 class="front-20px"><span class="greencolor ">{{ Data.Natural }}</span> {{
                                Data.HempFabric }}
                            </h2>
                            <p class="front-13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                Data.Descriptionmain }}</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow" style="cursor: pointer; " @click="scrollToSection('first')"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-color-hempfabric full-height-hempfabric-1 d-flex flex-column align-items-center justify-content-center" id="first" style="padding-top: 10rem;">
        <div class="container ps-5 full-height " data-aos="fade-up">
            <div class="row ">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h4 class="front-17px"><span class="greencolor">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h4>
                        <h2 class="greencolor front-20px">{{ Data.SolarSatellitePanels }}</h2>
                        <p class="front-13px">{{ Data.DescriptionSolarSatellitePanels }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img :src="Solarpic" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('second')"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="second" class="full-height-hempfabric-1 bg-color-hempfabric d-flex flex-column align-items-center justify-content-center" style="padding-top: 15rem;">
        <div class="container ps-5  align-self-center full-height  " data-aos="fade-up">
            <div class="row justify-content-center">
                <div class="col-md-5 d-flex align-items-center">
                    <div>
                        <h2 class="front-17px"><span class="greencolor">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h2>
                        <p class="front-13px">{{ Data.DescriptionNaturalhempfabric }}</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <img :src="fabric" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
                <div class="d-flex align-items-center justify-content-center ">
                    <div class="arrow mt-5" style="cursor: pointer;" @click="scrollToSection('third')"></div>
                </div>
            </div>
        </div>
    </div>
    <div class=" bg-color-hempfabric full-height-hempfabric-1 d-flex flex-column align-items-center justify-content-center" style="padding-top: 10rem;" id="third">
        <div class="container mb-5" data-aos="fade-up">
            <h2 class="front-17px"><span class="greencolor ">{{ Data.Propertiesof }}</span> {{ Data.AKNaturalFabric
            }}</h2>
        </div>
        <div class="table-responsive container" data-aos="fade-up">
            <table class="mb-5">
                <tr>
                    <th>Physical properties</th>
                    <th>Testing results</th>
                    <th>Standard method</th>
                </tr>
                <tr>
                    <td>
                        Fabric Weight <br>
                        Weave Style<br>
                        <div class="row">
                            <div class="col-lg-12 col-xl-6">
                                Tensile Strength
                            </div>
                            <div class="col-lg-12 col-xl-6">Warp direction:</div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-xl-6">

                            </div>
                            <div class="col-lg-12 col-xl-6">Weft direction:</div>
                        </div>

                    </td>
                    <td>
                        170 ± 10 g/m2<br>
                        Plain<br>
                        ≥ 1317 N/25mm<br>
                        ≥ 1317 N/25mm
                    </td>
                    <td>
                        ASTM D3776<br><br>
                        ASTM D5035<br>
                        ASTM D5035
                    </td>
                </tr>

            </table>
            <table class="mb-5">
                <tr>
                    <th>Construction</th>
                    <th>Testing results</th>
                    <th>Standard method</th>
                </tr>
                <tr>
                    <td>
                        <div class="row">
                            <div class="col-lg-12 col-xl-6">
                                Density
                            </div>
                            <div class="col-lg-12 col-xl-6">Warp count:</div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-xl-6">

                            </div>
                            <div class="col-lg-12 col-xl-6">Weft direction:</div>
                        </div>
                        Fabric Thickness <br>
                    </td>
                    <td>
                        56 ± 0.5 pick/in<br>
                        25 ± 0.5 pick/in<br>
                        0.53 ± 0.05 mm<br>
                    </td>
                    <td>
                        ASTM D3775<br>
                        ASTM D3775<br>
                        ASTM D1777
                    </td>
                </tr>

            </table>
            <table class="mb-5">
                <tr>
                    <th>Dimension</th>
                    <th>Testing results</th>
                    <th>Standard method</th>
                </tr>
                <tr>
                    <td>
                        Roll Width <br>
                        Roll Length <br>

                    </td>
                    <td>
                        1000 -0, +10 mm<br>
                        200 m<br>
                    </td>
                    <td>
                        ASTM D3774<br>
                        ASTM D3773
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style lang="scss">
@import '/src/assets/NaturalHempFabric.scss';
</style>
