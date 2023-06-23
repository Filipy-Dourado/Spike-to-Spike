<template>
  <q-page class="flex flex-center">
    <div style="padding-top: 100px;">
      <label style="font-size: 20px;" class="column items-center">VOCÊ ESTÁ ACESSANDO</label>
      <label style="padding-bottom: 100px; font-size: 20px;" class="column items-center">A SUA CONTA</label>
    <section class="login">
     <div class="q-pa-md">
         <q-input style="text-align: center;" class="margem" rounded outlined color="white" v-model="email" type="email" fill-mask="" label="Enter your e-mail" >
          <!-- <template v-slot:append>
          <q-icon name="email"
                  color="white" />
        </template> -->
      </q-input>
      <q-input class="margem" rounded outlined color="white" :type="isPwd ? 'password' : 'text'" v-model="Senha" name="f-senha" placeholder="Type your password" >
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
  <a class="aprenda"><q-icon name="help" size="25px" class=""/> Recover Password</a></div>
      <!-- <div class="relative-position q-pa-md">
        <q-btn rounded class="absolute-center" @click="irVerificar()" color="yellow" label="Cadastrar"/>
      </div>
      <div class=" flex flex-center" style="margin-top: 30px;">
        </div> -->
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

  name: 'EMAIL',
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
        height: 250px;
        border-color: transparent;
      }

      fieldset{
        padding-top: 25px;
      }
      .margem{
          margin-bottom: 30px;
          border-color: yellow;
        }
      .aprenda{
        color:white;
      }

 </style>
