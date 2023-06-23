<template>
  <q-page class=" column items-center">
    <div style="padding-top: 170px;">
      <label style=" font-size: 20px;" class="column items-center">ENTRE OU CRIE</label>
      <label style=" padding-bottom: 100px; font-size: 20px;" class="column items-center">A SUA CONTA</label>
      <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px;" outline rounded color="white" class="abaixo, margem" @click= "irSingup() " label="Private"/>
  <q-btn style="width: 150px;" outline rounded color="white" label="E-mail" class="margem" @click= "irSingup()"/>
</div>
<div class=" flex flex-center">
  <a class="aprenda"><q-icon name="help" size="25px" class=""/> Aprenda a diferença</a>
</div>
</section>

      </div>
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

  name: 'ESCOLHA',
  methods:{
    irSingup(){
    this.$router.push('/singin')
 },
 irPrivado(){
    this.$router.push('/privado')
  },
 }
})

</script>

  <style scoped>
        .abaixo{
          display: block;
        }
        .login{
          width: 250px;
          height: 300px;
          margin-bottom: 50px;
          border-color: transparent;
        }

        .margem{
          margin-bottom: 30px;
          border-color: yellow;
        }
        .margem2{
          margin-bottom: 30px;
        }

        .aprenda{
          color: white;
          cursor: pointer;
        }
        .q-btn--outline:before {
        border: 1px solid yellow;
        }
   </style>
