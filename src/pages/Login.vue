<template>
  <q-page class="flex flex-center">
    <div>
      <label style="font-size: 20px; font-family: The Old English;" class="column items-center">VOCÊ ESTÁ ENTRANDO</label>
      <label style="padding-bottom: 40px; font-size: 20px; font-family: The Old English;" class="column items-center">EM SUA CONTA</label>
    <q-form class="login" @submit.prevent="handleLogin">
     <div class="q-pa-md" style="margin-bottom: 20px;">
      <q-input  class="margem"  rounded borderless input-class="text-center"
        input-style="font-weight: bold;" v-model="form.email"
        type="email" fill-mask="" placeholder="E-mail">
      </q-input>
      <q-input  rounded borderless input-style="font-weight: bold;" input-class="text-center"
       :type="isPwd ? 'password' : 'text'" v-model="form.password"
       name="f-senha" placeholder="        Password" >
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
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded class="absolute-center" color="black" label="Entrar" type="submit"/>
      </div>
      <div class=" flex flex-center q-mt-md">
        <a class="aprenda " style="opacity: 0.9;font-size: 15px;" @click="novaSenha()"><q-icon
        style="opacity: 0.9;" class="fa-regular fa-circle-question" size="20px"/>Recuperar senha</a>
        </div>
      </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import useAuthUser from 'src/composables/UseAuthUser';
import { useRouter } from 'vue-router';

export default defineComponent({
  data: function(){
  return{
  }

 },

  name: 'LOGIN',
  methods:{
  novaSenha(){
    this.$router.push('/nova-senha')
   },

  },
  setup (){
   const form = ref({
    email: '',
    password: ''
})
   const router = useRouter ()

   const {login} = useAuthUser ()



   const handleLogin = async () => {
     try {
      await login(form.value)
         router.push({ name: 'home' })
     } catch (error) {
      alert(error.message)
     }
   }

   return{
      form ,
      isPwd: ref(true),
      handleLogin
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

        .aprenda{
          color: black;
          cursor: pointer;
          font-size: 11px;
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

.q-page{
   background-image: url('src/assets/IMG5.jpeg');
   background-position: center;
   background-repeat: no-repeat;
     background-size: cover;
   /* background-attachment: fixed; */

  }

@media(max-width: 500px) and (max-height: 900px){
  .q-page{

  }
}
 </style>
