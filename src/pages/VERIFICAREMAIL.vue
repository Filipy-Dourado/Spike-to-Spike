<template>
  <q-page class="flex flex-center">
    <h4 v-text="veri"></h4>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import router from './router'

export default defineComponent({
  data: function(){
  return{
   veri: "Verique seu email para concluir o cadastro"
  }

 },
 methods: {

 },
  name: 'VERIFICAREMAIL',
  setup (){

  }

})

</script>

<style scoped>


 </style>
