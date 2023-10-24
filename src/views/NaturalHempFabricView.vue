<script setup>
// import Hexagonal from '@/images/Hexagonal.png';
// import Graphene from '@/images/Graphene.png';
import Solarpic from '@/images/Hempfabric/SolarSatellitePanels.png';
import fabric from '@/images/Hempfabric/fabric.png';


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
}
</script>
<template>
    <div>
        <br><br><br>
        <div class="picture" :style="{ backgroundImage: 'url(src/images/Hempfabric/hempcar.png)' }"
            style="margin-top: 2rem; ">
            <div class="container"><br><br>
                <div class="box mt-5 col-2" style="margin-left: 0px;">
                    <h4 class="text-center" style="color:white">{{ Data.Title }} </h4>
                </div>
                <br><br>
                <div class="row ">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                        <h4>{{ Data.Our }} <span class="greencolor">{{ Data.Product }}</span></h4>
                        <h2><span class="greencolor">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ Data.Descriptionmain }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div><br><br>
    <div class="container ps-5">
        <div class="row">
            <div class="col-md-6 d-flex align-items-center">
                <div>
                    <h4><span class="greencolor">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h4>
                    <h2 class="greencolor">{{ Data.SolarSatellitePanels }}</h2>
                    {{ Data.DescriptionSolarSatellitePanels }}
                </div>
            </div>
            <div class="col-md-6">
                <img :src="Solarpic" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>
    <br><br>
    <div class="container ps-5 mt-5 align-self-center">
        <div class="row justify-content-center">
            <div class="col-md-6 d-flex align-items-center">
                <div>
                    <h2><span class="greencolor">{{ Data.Natural }}</span> {{ Data.HempFabric }}</h2>
                    {{ Data.DescriptionNaturalhempfabric }}
                </div>
            </div>
            <div class="col-md-4">
                <img :src="fabric" class="img-fluid" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
// Import Main styles for this application
@import '/src/assets/hempfabric.scss';
</style>