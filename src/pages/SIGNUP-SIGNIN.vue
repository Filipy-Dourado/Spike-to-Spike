<template>
  <q-page class=" column items-center">
    <div style="padding-top: 150px;">
      <label style="font-size: 20px; font-family: The Old English;" class="column items-center">ENTRE OU CRIE</label>
      <label style="padding-bottom: 80px; font-size: 20px; font-family: The Old English;" class="column items-center">A SUA CONTA</label>
    <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px; font-family: times 'Times New Roman', Times, serif; text-transform: unset !important; color: gold;" outline class="margem" @click= "irCadastroPrivado()" label="Sign Up"/>
  <q-btn style="width: 150px; font-family: times 'Times New Roman', Times, serif; text-transform: unset !important; color: gold;" outline  class="margem" @click= "irLoginPrivado() " label="Login"/>
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

  name: 'SINGUP-SINGIN',
  methods:{
    irCadastroPrivado(){
    this.$router.push('/cadastro-privado')
 },
 irLoginPrivado(){
    this.$router.push('/login-privado')
 },

 }
})

</script>

  <style scoped>
        .login{
          width: 250px;
          height: 300px;
          margin-bottom: 50px;
          border-color: transparent;
        }

        .margem{
          margin-bottom: 30px;
          border-radius: 10px;
        }

        .q-btn--outline:before {
        border: 2px solid black;
        }
   </style>
