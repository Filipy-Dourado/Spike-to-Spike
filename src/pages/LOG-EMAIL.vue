<template>
  <q-page class="flex flex-center">
    <div>
      <label style="font-size: 20px; font-family: The Old English;" class="column items-center">VOCÊ ESTÁ ENTRANDO</label>
      <label style="padding-bottom: 40px; font-size: 20px; font-family: The Old English;" class="column items-center">EM SUA CONTA</label>
    <section class="login">
     <div class="q-pa-md" style="margin-bottom: 20px;">
      <q-input  class="margem"  rounded borderless input-class="text-center" input-style="font-weight: bold;" v-model="email" type="email" fill-mask="" placeholder="E-mail" >
          <template v-slot:append>
          <q-icon name="person"
            color="black" />
        </template>
      </q-input>
         <q-input  class="margem"  rounded borderless input-class="text-center" input-style="font-weight: bold;" v-model="email" type="email" fill-mask="" placeholder="E-mail" >
          <template v-slot:append>
          <q-icon name="email"
            color="black" />
        </template>
      </q-input>
      <q-input class="" rounded borderless input-style="font-weight: bold;" input-class="text-center" :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" placeholder="Password" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="black"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
        </div>
      <div class="relative-position q-pa-md">
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;" rounded class="absolute-center" @click="irVerificar()" color="black" label="Entrar"/>
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
          color: #000;
          min-width: 0;
          outline: 0 !important;
          -webkit-user-select: auto;
          user-select: auto;
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
 </style>
