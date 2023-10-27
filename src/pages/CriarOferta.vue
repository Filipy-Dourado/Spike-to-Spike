<template>
  <q-page class="column items-center">
   <div style="padding-top: 150px;">
    <q-form class="login">
      <label style=" font-size: 20px; font-family: The Old English; padding-bottom: 40px;" class="column items-center">CRIE A SUA OFERTA</label>
      <div class="q-mb-md column items-center">
       <q-option-group class="" v-model="group" :options="option" color="black"
         style="font-weight: bold; font-size: 18px;" inline />
  </div>


        <div class="q-pa-md">
          <div class=" q-mt-md">
          <q-input class="" rounded borderless input-style="font-weight: bold;" input-class="text-center"
              v-model="quantidade"  mask="#" reverse-fill-mask="" name="f-quantidade" placeholder="   Quantidade" >
            <template v-slot:append >
            <q-icon name="money"/>
            </template>
            <template v-slot:hint>
              <q-icon name="money"/>
            </template>
          </q-input>

            </div>
        <div class=" q-mt-md row flex-center">
          <q-select v-model="model2" use-input use-chips label="Moeda" input-debounce="0"
          color="black" :options="options" @filter="filterFn" rounded borderless type="" class="q-mr-md">
          <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:selected-item="scope">
          <q-chip
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
            :tabindex="scope.tabindex"
            color="white"
            text-color="black"
            size="15px"
            class="q-ma-none"
          >
            <q-avatar>
              <q-img :src="scope.opt.icon" loading="lazy" height="28px" style="max-width: 20px;" />
            </q-avatar>
            {{ scope.opt.label }}
          </q-chip>
        </template>
        </q-select>

          <q-select class="" v-model="model3" use-input use-chips input-debounce="0" label="Prêmio"
           color="black" :options="options3" @filter="filterFn" rounded borderless suffix="%" >
           <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:selected-item="scope">
          <q-chip
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
            :tabindex="scope.tabindex"
            color="white"
            text-color="black"
            size="15px"
            class="q-ma-none"
          >
            {{ scope.opt.label }}
          </q-chip>
        </template>
          </q-select>
        </div>

        <div class="q-mt-md">
          <q-select class="" v-model="model" use-input multiple input-debounce="0" label="Método de pagamento"
            color="black" @new-value="createValue" :options="options2" @filter="filterFn" rounded borderless max-values="4" >
            <template v-slot:no-option>
             <q-item>
              <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:selected-item="scope">
          <q-chip
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
            :tabindex="scope.tabindex"
            color="white"
            text-color="black"
            size="18px"
            class="q-ma-none"
          >
            <q-avatar>
              <q-img :src="scope.opt.icon" height="28px" style="max-width: 20px;" />
            </q-avatar>
            {{ scope.opt.label }}
          </q-chip>
        </template>
          </q-select>
        </div>





        <div class="q-mt-md row">

           <div class="q-mb-sm">
      <q-badge color="transparent"  style="font-family: 'Times New Roman', Times, serif;
         font-weight: bold ; font-size: 15px;" text-color="black">
        Expiry: {{ time }}
      </q-badge>
    </div>

    <q-btn icon="access_time" round color="black">
      <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale" >
        <q-time v-model="proxyTime" format24h color="black" text-color="yellow" style="background-color: gold; ">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="black" flat v-close-popup />
            <q-btn label="OK" color="black" flat @click="save" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>
    <div class="q-mb-sm">
      <q-badge color="transparent" style="font-family: 'Times New Roman', Times, serif;
        font-size: 15px; font-weight: bold;" text-color="black">
        Timer: {{ time2 }}
      </q-badge>
    </div>

    <q-btn icon="access_time" round color="black">
      <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
        <q-time v-model="proxyTime2" color="black" text-color="yellow" style="background-color: gold; "
           :hour-options="hourOptionsTime1">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="black" flat v-close-popup />
            <q-btn label="OK" color="black" flat @click="save" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>
        </div>

         </div>
      <div class="q-pa-md column items-center"  >
        <q-btn style="font-family: 'Times New Roman', Times, serif; font-weight: bold;"
            rounded color="black" label="Criar Oferta" type="submit"/>
      </div>

      <div class=" flex flex-center">
        <a class="aprenda " style="opacity: 0.9;font-size: 15px;" @click="icon = true"><q-icon
          style="opacity: 0.9;" class="fa-regular fa-circle-question" size="20px"/>Dúvidas</a>
          <q-dialog v-model="icon" per>
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
      </q-form>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter , useRoute} from 'vue-router'


 const stringOptions = [
 {
          label: 'USD',
          icon: ''
        },
        {
          label: 'BRL',
          icon: ''
        },
        {
          label: 'EUR',
          icon: ''
        },
        {
          label: 'JPY',
          icon: ''
        },
        {
          label: 'GBP',
          icon: ''
        },
        {
          label: 'AUD',
          icon: ''
        },
        {
          label: 'CAD',
          icon: ''
        },
        {
          label: 'CHF',
          icon: ''
        },
        {
          label: 'CNY',
          icon: ''
        },
        {
          label: 'HKF',
          icon: ''
        },
        {
          label: 'NZD',
          icon: ''
        },
        {
          label: 'SEC',
          icon: ''
        },
        {
          label: 'KRW',
          icon: ''
        },
        {
          label: 'SGD',
          icon: ''
        },
        {
          label: 'NOK',
          icon: ''
        },
        {
          label: 'MXN',
          icon: ''
        },
        {
          label: 'RUB',
          icon: ''
        },
        {
          label: 'ZAR',
          icon: ''
        },
        {
          label: 'TRY',
          icon: ''
        },
        {
          label: 'CLP',
          icon: ''
        },
        {
          label: 'CZK',
          icon: ''
        },
        {
          label: 'DKK',
          icon: ''
        },
        {
          label: 'HRK',
          icon: ''
        },
        {
          label: 'HUF',
          icon: ''
        },
        {
          label: 'INR',
          icon: ''
        },
        {
          label: 'ISK',
          icon: ''
        },
        {
          label: 'PLN',
          icon: ''
        },
        {
          label: 'RON',
          icon: ''
        },
        {
          label: 'ARS',
          icon: ''
        },
        {
          label: 'VES',
          icon: ''
        },
        {
          label: 'COP',
          icon: ''
        },
        {
          label: 'PEN',
          icon: ''
        },
        {
          label: 'UYU',
          icon: ''
        },
        {
        label: 'PYG',
        icon: ''
        },

]

 const options2 = [
        {
          label: 'Pix',
          icon: 'https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png'
        },
        {
          label: 'Visa',
          icon: 'src/assets/PAGAMENTOS/Visa.jpeg'
        },
        {
          label: 'Boleto',
          icon: 'map'
        },
        {
          label: 'PicPay',
          icon: 'golf_course'
        },
        {
          label: 'PayPal',
          icon: 'https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-0.png'
        },
        {
          label: 'USDT',
          icon: 'casino'
        },
        {
          label: 'Monero',
          icon: 'casino'
        },
        {
          label: 'Revolut',
          icon: 'https://1000logos.net/wp-content/uploads/2022/08/Revolut-Symbol.png'
        }

      ]
      const options3 = [
        {
          label: '1'

        },
        {
          label: '2'
        },
        {
          label: '3'
        },
        {
          label: '4',

        },
        {
          label: '5'
        },
        {
          label: '6'
        }
      ]


export default defineComponent({


 name: 'CRIAOFERTA',

  setup () {
    const options = ref(stringOptions)


    const time = ref('00:00')
    const time2 = ref('00:00')

    const proxyTime = ref('00:00')
    const proxyTime2 = ref('00:00')


    return {
      model: ref(null), options, options2, options3, model2: ref(null),
      model3: ref(null), model4: ref(null), time,
      time2, proxyTime, proxyTime2, icon: ref(false), quantidade: ref(null),
      group: ref('op1'),

      hourOptionsTime1: [ 1, 2, 3, 4, 5, 6],

    //  optionsFnTime (hr) {
    //     return hr <= 6
    //   },



option: [
  {
    label: 'Comprar',
    value: 'op1'
  },
  {
    label: 'Vender',
    value: 'op2'
  },

],

      updateProxy () {
        proxyTime.value = time.value
      },

      save () {
        time.value = proxyTime.value
      },

      createValue (val, done) {
        if (val.length > 2) {
          if (!stringOptions.includes(val)) {
            done(val, 'add-unique')
          }
        }
      },

      filterFn (val, update, abort) {
        // call abort() at any time if you can't retrieve data somehow

        setTimeout(() => {
          update(
            () => {
              if (val === '') {
                options.value = stringOptions
              }
              else {
                const needle = val.toLowerCase()
                options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
              }
            },

            // "ref" is the Vue reference to the QSelect
            ref => {
              if (val !== '' && ref.options.length > 0) {
                ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
              }
            }
          )
        }, 300)
      },

       abortFilterFn () {
        // console.log('delayed filter aborted')
      }
    }
  }
})


</script>

<style scoped>

   .login{
        width: 380px;
        height: 650px;
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
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
      }


      .q-select {
        border-radius: 20px;
        border: 2px solid black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
        min-width: 100px;
      }

      .text-white {
        color: gold !important;
}

.row {
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between;
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
