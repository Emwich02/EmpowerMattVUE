<script setup>
import Office_photo1 from '@/images/Emoffice4_0.png'; // Replace with the correct path to your image
import Office_photo2 from '@/images/Emoffice5_0.png';
import Office_photo3 from '@/images/Emoffice1_0.png';

const Data = {
    MainTitle_1: "GET IN TOUCH",
    MainTitle_2: "Contact us",
    ContactTitle: "Contact ",
    InfoTitle: "Information",
    IP_1: "Tel : (+66)84 914 4787, (+66)81-988-5787",
    IP_2: "Email : empowermatt2021@gmail.com",
    IP_3: "Tax ID : 0135564006410",
    IP_4: "Empowermatt Company Limited (Head Office) 26/17 Moo 5, Khu Khot Subdistrict, Lam Luk Ka District, Pathum Thani Province, 12130, Thailand."
}
</script>
<template>
    <div class="bg-image" v-bind:style="{ backgroundImage: 'url(' + Office_photo3 + ')' }">
        <div class="container-fluid bg-image padding-head">
            <div class="container">
                <div class="center margin-head">
                    <p class="m-0 Touch-text">{{ Data.MainTitle_1 }}</p>
                    <hr class="line-contact-head" size="5px" />
                    <p class="contact-text">{{ Data.MainTitle_2 }}</p>
                </div>
                <div class="row row-bg-color">
                    <div class="col-lg-6">
                        <p class="contact-head">{{ Data.ContactTitle }}<span class="green-text">{{ Data.InfoTitle
                        }}</span> </p>
                        <p class="contact-detial margin-text-detail">{{ Data.IP_1 }}</p>
                        <p class="contact-detial margin-text-detail">{{ Data.IP_2 }}</p>
                        <p class="contact-detial margin-space">{{ Data.IP_3 }}</p>
                        <p class="contact-detial margin-text-bottom">{{ Data.IP_4 }}</p>
                    </div>
                    <div class="col-lg-6" style="padding: 0%;">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15500.671625122215!2d100.52852859022104!3d13.768745988822806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eb0f28f5e81%3A0xd4594d75ebaee10d!2z4Lit4LiZ4Li44Liq4Liy4Lin4Lij4Li14Lii4LmM4LiK4Lix4Lii4Liq4Lih4Lij4Lig4Li54Lih4Li0!5e0!3m2!1sth!2sth!4v1698504282345!5m2!1sth!2sth"
                            width="100%" height="100%" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8 m-0 p-0 ">
                <img :src="Office_photo1" alt="Office_photo_1" class="image-office">
            </div>
            <div class="col-4 m-0 p-0 ">
                <img :src="Office_photo2" alt="Office_photo2" class="image-office">
                <img :src="Office_photo3" alt="Office_photo3" class="image-office">
            </div>
        </div>
    </div>
</template>
<style lang="scss">// Import Main styles for this application
@import '/src/assets/contactUs.scss';</style>