<template>
  <q-page class="column items-center">
   <div style="padding-top: 180px;">
    <q-form class="login" @submit.prevent="handleReset">
     <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">DIGITE SUA NOVA SENHA</label>

    <div class="q-pa-md">
      <q-input  rounded borderless input-style="font-weight: bold;" input-class="text-center"
       :type="isPwd ? 'password' : 'text'" v-model="password"
       name="f-senha"  placeholder="        Password" >
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
      <div class="q-pa-md column items-center"  >
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded color="black" label="Confirmar" type="submit"/>
      </div>
      </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter , useRoute} from 'vue-router'

export default defineComponent({
  data (){
  return{
    isPwd: ref(true),
  }

 },

 name: 'NOVASENHA',

  setup (){

    const {resetPassword} = useAuthUser()

    const router = useRouter()

    const route = useRoute()

    const token = route.query.token


    const password = ref('')

    const handleReset = async () => {
      try {
        await resetPassword(token, password.value)
        router.push({name: 'login'})
      } catch (error) {
        alert(error.message)
      }
    }

    return{
     password,
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
