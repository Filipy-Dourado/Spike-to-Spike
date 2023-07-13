<template>
  <q-page class=" column items-center">
      <div style="padding-top: 130px;">
      <label style=" font-size: 20px; font-family: The Old English;" class="column items-center">COMO VOCÊ DESEJA COMEÇAR</label>
      <label style=" padding-bottom: 80px; font-size: 20px; font-family: The Old English;" class="column items-center">A NEGOCIAR P2P?</label>
      <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px; font-family: times 'Times New Roman', Times, serif !; text-transform: unset !important; color: gold; " outline class="margem" @click= "irSingup() " label="Conta Privada"/>
  <q-btn style="width: 150px; text-transform: unset !important; font-family: times 'Times New Roman', Times, serif; margin-bottom: 15px; color: gold; " outline class="margem" @click= "irSingup2()" label="Conta E-mail" />
</div>
<div class=" flex flex-center">
  <a class="aprenda" style="opacity: 0.9;font-size: 15px;"><q-icon  style="opacity: 0.9;" class="fa-regular fa-circle-question" size="20px"/> Aprenda a diferença.</a>
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
   irSingup2(){
    this.$router.push('/singin2')
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

        .aprenda{
          color: gold;
          cursor: pointer;
          font-size: 11px;
        }
        .q-btn--outline:before {
        border: 2px solid black;
        }


   </style>
