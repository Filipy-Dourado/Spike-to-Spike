<template>
  <q-page padding class="">
  <div class="column items-center">
    <div class="flex items-baseline">
<div class="q-pa-md">
    <q-checkbox
      v-model="valo"
      checked-icon="language"
      unchecked-icon="language"
    />
  </div>
  <div class="q-pa-md">
    <q-checkbox
      v-model="val"
      checked-icon="settings"
      unchecked-icon="settings"
      color="black"
    />
  </div>
  <div class="q-pa-md">
    <q-checkbox
      v-model="val"
      checked-icon="star"
      unchecked-icon="star_border"
    />
  </div>
  <div class="q-pa-md">
    <q-checkbox
      v-model="val"
      checked-icon="star"
      unchecked-icon="star_border"
    />
  </div>
  <div class="q-pa-md">
    <q-checkbox
      v-model="val"
      checked-icon="star"
      unchecked-icon="star_border"
    />
  </div>
  <div class="q-pa-md">
    <q-checkbox
      v-model="val"
      checked-icon="star"
      unchecked-icon="star_border"
    />
  </div>
   </div>
    </div>

    <div class="q-pa-md">
    <q-list >
      <q-item>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-size: 20px;">20.500</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />
    <q-item>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />
    <q-item>
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />
    </q-list>
  </div>

    <!-- <div class="column items-center">
      <div class=" flex items-baseline">
    <fieldset class="login">
    </fieldset>
      </div>
      </div> -->


  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import router from './router'

export default defineComponent({
  data: function(){
  return{
 val: ref(true),
 valo: ref(true)
  }

 },
 methods: {

 },
  name: 'HOME',
  setup (){

  }

})

</script>

<style scoped>
.card{
  width: 150px;
  height: 250px;
  border-color: black;
}
.margem{
  margin-left: 10px;
  border-color:black;
}
.alinhar{
        text-align: center;
      }
      .login{
        background-color: white ;
        width: 150px;
        height: 230px;
        border-radius: 20px;
        border-color: #1976D2;
        margin-bottom: 50px;
      }

      fieldset{
        padding-top: 25px;
      }
 </style>
