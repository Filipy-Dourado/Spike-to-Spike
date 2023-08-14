<template>
  <q-page class=" column items-center">
      <div style="padding-top: 160px;">
      <label style=" font-size: 20px; font-family: The Old English;" class="column items-center">VOCÊ DESEJA COMEÇAR</label>
      <label style=" padding-bottom: 80px; font-size: 20px; font-family: The Old English;" class="column items-center">A NEGOCIAR P2P?</label>
      <div class="flex flex-center">
       <section class="login">
<div class="column items-center">
  <q-btn style="width: 150px; text-transform: unset !important; font-family: times 'Times New Roman', Times, serif; margin-bottom: 15px; " outline class="margem" @click= "irSingup()" label="Iniciar a negociar" />
</div>
<div class=" flex flex-center">
  <a class="aprenda" style="opacity: 0.9;font-size: 15px;" @click="icon = true">
   <q-icon  style="opacity: 0.9;" class="fa-regular fa-circle-question" size="20px"/> Sugestão de privacidade</a>
   <q-dialog v-model="icon" persistent>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
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

  setup (){
    return{
      icon: ref(false)
    }

  },

  methods:{

   irSingup(){
    this.$router.push('/signin')
  },
 }
})

</script>

  <style scoped>

        .login{
          width: 250px;
          height: 300px;
          margin-bottom: 50px;
          border-color: transparent;
        }

        .margem{
          margin-bottom: 30px;
          border-radius: 10px;
        }

        .aprenda{
          color: black;
          cursor: pointer;
          font-size: 11px;
        }
        .q-btn--outline:before {
        border: 2px solid black;
        }


   </style>
