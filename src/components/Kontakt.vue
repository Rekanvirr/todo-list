<script>
export default {
    data() {
        return {
          Dane: {
            adres: 'ulica ulicowa 123',
            telefon1: '111222333',
            telefon2: '222333444',
            email: 'biuro@biuro.com.pl'
          }
        }
      }
  }
  </script>
<template>
  <h1>Kontakt do nas!</h1>
    <ul id="list">
        <li v-for="value in Dane">
            {{ value }}
        </li>
    </ul>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38996.66176140478!2d20.952527263659665!3d52.34700069471176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec997b38f2723%3A0xa314c8ed39a0ba2d!2sBiedronka!5e0!3m2!1spl!2spl!4v1666543169632!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style>
.v-list__tile__content{
    justify-content: center!important;
    flex-direction: row!important;
    text-align: center!important;
    align-items: center!important;
}

.v-list__tile__title, .v-list__tile__sub-title {
    text-align: center!important;
}
</style>