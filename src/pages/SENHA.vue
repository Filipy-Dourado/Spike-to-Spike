<template>
  <q-page class="column items-center">
   <div style="padding-top: 180px;">
    <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">SOLICITE UMA NOVA SENHA</label>
    <section>
      <div class="q-pa-md" style="margin-bottom: 20px;">
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;" rounded class="absolute-center" @click="irVerificar()" color="black" label="SOLICITAR"/>
      </div>

    </section>
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

 },
  name: 'SENHA',
  setup (){

  }

})

</script>

<style scoped>
  .margem{
          margin-bottom: 30px;

        }

      .q-input {
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
      }

 </style>
