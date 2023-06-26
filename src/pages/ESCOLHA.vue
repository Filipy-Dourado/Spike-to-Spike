<template>
  <q-page class=" column items-center">
    <div style="padding-top: 170px;">
      <label style=" font-size: 20px; font-family: Shadows Into Light;" class="column items-center">COMO VOCÊ DESEJA COMEÇAR</label>
      <label style=" padding-bottom: 80px; font-size: 20px; font-family: Shadows Into Light;" class="column items-center">A NEGOCIAR P2P?</label>
      <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px; font-family: Raleway, Sans; text-transform: unset !important; opacity: 0.8;" outline rounded color="white"  class="abaixo, margem" @click= "irSingup() " label="Private"/>
  <q-btn style="width: 150px; text-transform: unset !important; opacity: 0.8; font-family: Raleway, Sans;" outline rounded color="white" label="E-mail" class="margem" @click= "irSingup()"/>
</div>
<div class=" flex flex-center">
  <a class="aprenda" style="opacity: 0.8;"><q-icon  style="opacity: 0.7;" name="help" size="15px" class=""/> Aprenda a diferença</a>
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

  name: 'ESCOLHA',
  methods:{
    irSingup(){
    this.$router.push('/singin')
 },
 irPrivado(){
    this.$router.push('/privado')
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
          font-size: 11px;
        }
        .q-btn--outline:before {
        border: 1px solid yellow;
        }


   </style>
