<template>
  <q-page class="flex flex-center">
    <div>
      <label style="font-size: 20px; font-family: The Old English;" class="column items-center">VOCÊ ESTÁ CADASTRANDO</label>
      <label style="padding-bottom: 40px; font-size: 20px; font-family: The Old English;" class="column items-center">A SUA CONTA</label>
    <section class="login">
     <div class="q-pa-md" style="margin-bottom: 20px;">
      <q-input  class="margem"  rounded borderless input-class="text-center" input-style="font-weight: bold; color: initial;" v-model="user" type="" fill-mask="" placeholder="User" >
      </q-input>
         <q-input  class="margem"  rounded borderless input-class="text-center" input-style="font-weight: bold; color: initial;" v-model="email" type="email" fill-mask="" placeholder="E-mail" >
      </q-input>
      <q-input class="" rounded borderless input-style="font-weight: bold; color: initial;" input-class="text-center"  :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" placeholder="          Password" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer "
            color="black"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
        </div>
      <div class="relative-position q-pa-md">
        <q-btn rounded style="font-family: 'Times New Roman', Times, serif; font-weight: bold;" class="absolute-center" @click="irVerificar()" color="black" label="Cadastrar"/>
      </div>
      <div class=" flex flex-center" style="margin-top: 30px;">
        </div>
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

  name: 'CAD-EMAIL',
  methods:{
  irVerificar(){
    this.$router.push('/verificar')
  }
  },
  setup (){
   return{
      user: ref(''),
      email: ref(''),
      password: ref(''),
      isPwd: ref(true)
   }
  }

})

</script>


<style scoped>
      .login{
        width: 300px;
        height: 300px;
        border-color: transparent;
      }

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
       .q-field__input {
          width: 100%;
          text-align: center;
          min-width: 0;
          outline: 0 !important;
          -webkit-user-select: auto;
          user-select: auto;
          color: gold;
      }

      .text-white {
      color: gold !important;

  }

.q-icon {
    line-height: 1;
    width: 1em;
    height: 1em;
    flex-shrink: 1;
    letter-spacing: 20px !important;
    text-transform: none;
    white-space: unset;
    word-wrap: normal;
    direction: ltr;
    text-align: center;
    position: inherit;
    box-sizing: content-box;
    fill: currentColor;
}

.q-page{
   background-image: url('src/assets/IMG5.jpeg');
   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-layout{

  }
}

 </style>
