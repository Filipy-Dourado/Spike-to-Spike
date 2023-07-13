<template>
  <q-page class="flex flex-center">
    <div style=" padding-top: 150px;">
      <label style="font-size: 22px; font-family: The Old English ;" class="column items-center">RESPEITAMOS A SUA</label>
      <label style="padding-bottom: 40px; font-size: 20px; font-family: The Old English;" class="column items-center">PRIVACIDADE</label>
    <section class="login">
     <div class="q-pa-md">
      <q-input input-style="color: initial; font-weight: bold;" rounded borderless input-class="text-center"  v-model="Senha" name="f-senha" placeholder="Insira sua chave privada" >
      </q-input>
        </div>
        <div class="relative-position q-pa-md" style="margin-bottom: 10px;">
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;" rounded class="absolute-center" @click="ir()" color="black" label="Gerar Chave"/>
      </div>
        <div class=" flex flex-center">
         <a class="aprenda" style="opacity: 0.9;"><q-icon class="fa-regular fa-circle-question" size="15px"/> Store it somewhere safe.</a></div>
      </section>
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

  name: 'LOG-PRIVADO',
  methods:{
  irVerificar(){
    this.$router.push('/verificar')
  }
  },
  setup (){
   return{
      email: ref(''),
      password: ref(''),
      isPwd: ref(true)
   }
  }

})

</script>


<style scoped>
      .login{
        width: 340px;
        height: 250px;
        border-color: transparent;
      }

      fieldset{
        padding-top: 25px;
      }
      .margem{
          margin-bottom: 30px;
        }
      .aprenda{
        color: gold;
      }

      .q-input {
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
      }
       .q-field__input {
          width: 100%;
          text-align: center;
          color: #000;
          min-width: 0;
          outline: 0 !important;
          -webkit-user-select: auto;
          user-select: auto;
      }
      .text-white {
    color: gold!important;
   }

      .q-page{
   background-image: url('src/assets/IMG6.jpeg');
   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-layout{
   background-image: url('src/assets/IMGm8.jpeg');
  }
}

 </style>
