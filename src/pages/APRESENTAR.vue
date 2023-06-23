<template>
  <q-page class="flex flex-center" >
     <div class="column itemns-center">
      <h5 style="display: block;">Spike to Spike</h5>
      <q-btn outline rounded color="yellow" @click="irEscolha()" label="Começar a negociar"/>
     </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import router from './router'

export default defineComponent({
  data: function(){
  return{

  }

 },
 methods: {
   irLogin(){
      this.$router.push('/logs')
   },
   irEscolha(){
      this.$router.push('/escolha')
   }
 },
  name: 'APRESENTAR',
  setup (){

  }

})

</script>

<style scoped>


 </style>
