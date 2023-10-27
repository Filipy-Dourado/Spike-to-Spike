<template>
  <q-page class="column items-center">
   <div style="padding-top: 150px;">
    <q-form class="login">
      <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">ÁREA DO USUÁRIO</label>





      <div class="column items-center" >
        <label  class=" q-mt-md" style=" font-size: 20px; font-family: The Old English; margin-left: 15px;
         padding-bottom: 15px; display: inline; "> Username:
        <q-input borderless input-class="text-center" :disable="disable"
         input-style="font-weight: bold;" v-model="email">
        </q-input></label>

        <label class=" q-mt-md" style=" font-size: 20px; font-family: The Old English; margin-left: 15px;
         padding-bottom: 15px; text-align: left;"> Senha:
         <q-input borderless input-style="font-weight: bold;"
         input-class="text-center" :disable="disable" :type="isPwd ? 'password' : 'text'"
         v-model="password" name="f-senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="black"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input></label>
      </div>

      <div class="q-pa-md column items-center"  >
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded color="black" label="Alterar Dados"/>
      </div>
     </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter , useRoute} from 'vue-router'

export default defineComponent({

name: 'ÁREAUSUÁRIO',

  setup (){
   const form = ref({
    email: '',
    password: ''
})


   return{
    isPwd: ref(true),
    disable: ref(true),
    form
   }
  }


})

</script>

<style scoped>

   .login{
        width: 380px;
        height: 380px;
        border-color: transparent;
        background-color: gold;
        border: solid 1px transparent;
        border-radius: 25px;
      }

      .aprenda{
          color: black;
          cursor: pointer;
          font-size: 11px;
        }

      .q-input {
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        width: 250px;
        align-items: center;
        border-radius: 20px;
        border: 2px solid black;
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
