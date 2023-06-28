<template>
  <q-page class="flex flex-center">
    <div>
      <label style="font-size: 20px; font-family: Shadows Into Light;" class="column items-center">RESPEITAMOS A SUA</label>
      <label style="padding-bottom: 80px; font-size: 20px; font-family: Shadows Into Light;" class="column items-center">PRIVACIDADE</label>
    <section class="login">
     <div class="q-pa-md">
      <q-input class="" style="opacity: 0.9;" flat rounded borderless input-class="text-center" dark color="black" :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" placeholder="ejrjow350523mdkkt" >
        <!-- <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="white"
            @click="isPwd = !isPwd"
          />
        </template> -->
      </q-input>
        </div>
        <div class=" flex flex-center">
  <a class="aprenda" style="opacity: 0.8;"><q-icon class="fa-regular fa-circle-question" style="opacity: 0.7;" size="15px"/> Store it somewhere safe.</a></div>
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
        width: 340px;
        height: 250px;
        border-color: transparent;
      }

      fieldset{
        padding-top: 25px;
      }
      .margem{
          margin-bottom: 30px;
          border-color: yellow;
          /* border: solid 2px;
          border-radius: 50px; */
        }
      .aprenda{
        color:white;
      }

      .q-input {
        border-radius: 50px;
        border: 1px solid yellow;
        transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: Raleway, sans-serif;
        font-size: 14px;
        min-width: 100px;
        width: 100%;
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


 </style>
