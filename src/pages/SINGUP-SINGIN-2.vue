<template>
  <q-page class=" column items-center">
    <div style="padding-top: 220px;">
      <label style="font-size: 20px; font-family: Shadows Into Light;" class="column items-center">ENTRE OU CRIE</label>
      <label style="padding-bottom: 80px; font-size: 20px; font-family: Shadows Into Light;" class="column items-center">A SUA CONTA</label>
    <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px; font-family: Raleway, Sans; text-transform: unset !important; opacity: 0.8;" outline rounded color="white" class="abaixo, margem" @click= "irLogin() " label="Login"/>
  <q-btn style="width: 150px; font-family: Raleway, Sans; text-transform: unset !important; opacity: 0.8;" outline rounded color="white" label="Sing up" class="margem" @click= "irCadastro()"/>
</div>
</section>
      </div>
    </div>
       </q-page>
  </template>


<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
// import router from './router'

export default defineComponent({
  data() {
    return{
    }
  },

  name: 'SINGUP-SINGIN-2',
  methods:{
    irCadastro(){
    this.$router.push('/cadastro-email')
 },
 irLogin(){
    this.$router.push('/login-email')
 },

 }
})

</script>

  <style scoped>
        .abaixo{
          display: block;
        }
        .login{
          width: 250px;
          height: 300px;
          margin-bottom: 50px;
          border-color: transparent;
        }

        .margem{
          margin-bottom: 30px;
          border-color: yellow;
        }
        .margem2{
          margin-bottom: 30px;
        }

        .aprenda{
          color: white;
          cursor: pointer;
        }
        .q-btn--outline:before {
        border: 1px solid yellow;
        }
   </style>
