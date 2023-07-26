<template>
  <q-page class="column items-center">
   <div style="padding-top: 180px;">
    <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">SOLICITE UMA NOVA SENHA</label>
    <q-form class="login" @submit.prevent="handleReset">

     <div class="q-pa-md">
      <q-input rounded borderless input-class="text-center"
        input-style="font-weight: bold;" v-model="email"
        type="email" fill-mask="" placeholder="E-mail">
      </q-input>

        </div>
      <div class="q-pa-md column items-center"  >
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded color="black" label="Solicitar" type="submit"/>
            <q-btn flat style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded class="q-pt-md" color="black" label="Voltar para Login" :to="{name: 'login'}" />
      </div>
      </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'




export default defineComponent({

 name: 'RECUPERARSENHA',

  setup (){

    const {sendPasswordRestEmail} = useAuthUser()

    const email = ref('')

    const handleReset = async () => {
      try {
        await sendPasswordRestEmail(email.value)
        alert(`Password reset email sent to: ${email.value}`)
      } catch (error) {
        alert(error.message)
      }
    }

    return{
     email,
     handleReset
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

      .q-input {
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
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
