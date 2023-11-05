<script setup>
// import Hexagonal from '@/images/Hexagonal.png';
// import Graphene from '@/images/Graphene.png';
import Solarpic from '@/images/Hempfabric/SolarSatellitePanels.png';
import fabric from '@/images/Hempfabric/fabric.png';
import aktableone from '@/images/Hempfabric/aktableone.png';
import aktabletwo from '@/images/Hempfabric/aktabletwo.png';
import aktablethree from '@/images/Hempfabric/aktablethree.png';


const Data = {
    Title: 'Products',
    Our: 'our',
    Product: 'product',
    Natural: 'Natural',
    HempFabric: 'Hemp Fabric',
    Descriptionmain: `           Natural hemp fabrics are reinforcement textiles based on natural hemp fibre and others such
as polypropylene fibre, recycled polyethylene terephthalate fiber, glass fiber and cotton fibre which
are designed for fibre-reinforced polymer composite applications. The fabrics can be used with a
large variety of resins in processes including wet lay-up, vacuum infusion, resin transfer moulding
(RTM), press moulding, pultrusion, prepregging etc. The fabrics can be processed in the same
technique to glass or carbon fibre. Hybrid Hemp-PP reinforcements provide a high performance, an
easy processing, a lightweight and an environmental impact. They are suitable for semi-structural
and decorative applications in sectors such as automotive, construction, marine, sports and
consumer goods.`,
    SolarSatellitePanels: 'Solar Satellite Panels',
    DescriptionSolarSatellitePanels: `Hemp and recycled polyethylene terephthalate
(rPET) composite materials consisted of
approximately 20 wt% natural hemp fiber. Then,
the composite materials were studied to fabricate
the panels for making the prototype for solar
satellite panels. This research project is the
collaboration between Empowermatt Co.,Ltd.
Hemp Thai Co.,Ltd., Thai Taffita Co.,Ltd., and
GALAXI (GISTDA’s Aerospace Laboratory of
Excellence and Innovation), GISTDA.`,
    DescriptionNaturalhempfabric: `Natural hemp fabric for bio-composite materials, 
making possible lightweight structure.`,
    Propertiesof: 'Properties of ',
    AKNaturalFabric: `'AK Natural Fabric'`
}
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
<!-- <script>
export default {
    data() {
        return {
            current : null
        };
    },
    mounted() {
        window.addEventListener('wheel', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            const  s = this.$refs;

            for (const  Name in  s) {
                const   =  s[ Name];
                const rect =  .getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) {
                    this.current  =  Name;
                }
            }

            if (event.deltaY > 0 && this.current ) {
                const next  =  s[` ${parseInt(this.current .charAt(this.current .length - 1)) + 1}`];
                if (next ) {
                    next .scrollIntoView({ behavior: 'smooth' });
                }
            } else if (event.deltaY < 0 && this.current ) {
                const previous  =  s[` ${parseInt(this.current .charAt(this.current .length - 1)) - 1}`];
                if (previous ) {
                    previous .scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }
}
</script> -->
<template>
    <div class="bgpic full-height" :style="{ backgroundImage: 'url(src/images/Hempfabric/hempcar.png)' }"
        style="margin-top: 2rem; ">
        <div class="container">
            <div class="row">
                <div class="box mt-5 col-2" style="margin-left: 0px;">
                    <h4 class="text-center" style="color:white">{{ Data.Title }} </h4>
                </div>
                <div class="row pt-5">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                        <h4 class="front-17px">{{ Data.Our }} <span class="greencolor">{{ Data.Product }}</span></h4>
                        <h2 class="front-20px"><span class="greencolor ">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h2>
                        <p class="front-13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ Data.Descriptionmain }}</p>
                    </div>
                </div>
            </div>
            <div class="text-center " >
                <span style="cursor: pointer;  " @click="scrollToSection('first')">↓ ↓ ↓</span>
            </div>
        </div>

    </div>

    <div id="first">
        <div class="container ps-5 full-height  ">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h4><span class="greencolor front-17px">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h4>
                        <h2 class="greencolor front-17px">{{ Data.SolarSatellitePanels }}</h2>
                        <p class="front-13px" >{{ Data.DescriptionSolarSatellitePanels }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img :src="Solarpic" class="img-fluid" style="max-width: 100%; height: auto;">
                </div>
                <div class="text-center ">
                    <span style="cursor: pointer;  " @click="scrollToSection('second')">↓ ↓ ↓</span>
                </div>
            </div>
        </div>
    </div>
    <div id="second">
        <div class="container ps-5  align-self-center full-height  ">
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
                <div class="text-center ">
                    <span style="cursor: pointer;  " @click="scrollToSection('third')">↓ ↓ ↓</span>
                </div>
            </div>
        </div>

    </div>
    <div id="third">
        <div class="container ps-5 full-height  ">
            <div class="row d-flex align-items-center">
                <div>
                    <h4 class="front-17px"><span class="greencolor ">{{ Data.Propertiesof }}</span> {{ Data.AKNaturalFabric }}</h4>
                </div>
                <div class="text-center">
                    <div class="mt-5 item">
                        <img :src="aktableone" class="img-fluid">
                    </div>
                    <div class="mt-5">
                        <img :src="aktabletwo" class="img-fluid">
                    </div>
                    <div class="mt-5">
                        <img :src="aktablethree" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '/src/assets/hempfabric.scss';
</style>
