<template>
  <q-page padding>
  <div class="column items-center">
    <label style=" font-size: 30px; font-family: The Old English; margin-bottom: 40px; font-weight: bold;
    margin-top: 25px;" class="column items-center">Ofertas</label>
    <div class="flex items-baseline">
      <q-tabs
        v-model="tab"
>
        <q-btn-dropdown auto-close stretch flat>
          <template v-slot:label>
            <div>
              <div class="row justify-around items-center no-wrap">
                <q-icon name="money" />
              </div>
              <div class="row items-center no-wrap">
                Moeda
              </div>
            </div>
          </template>

          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-tab name="alarms" icon="shop" label="Compra" />
        <q-tab name="movies" icon="sell" label="Venda"/>
        <q-btn-dropdown auto-close stretch flat>
          <template v-slot:label>
            <div>
              <div class="row justify-around items-center no-wrap">
                <q-icon name="payment" />
              </div>
              <div class="row items-center no-wrap">
                Métodos
              </div>
            </div>
          </template>

          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
      <!-- <q-btn-group flat style=" margin-bottom: 22px;">
      <q-btn color="yellow" text-color="black" icon="language" push label="País"/>
      <q-btn color="amber" text-color="black"  icon="shop" push label="Compra" />
      <q-btn color="yellow" text-color="black" icon="sell" push label="Venda" />
      <q-btn color="amber" text-color="black" icon="payment" push label="Pagamento"/>
    </q-btn-group> -->
  </div>
    </div>

    <div class="q-pa-md">
    <q-list>

      <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="green" />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
           <q-badge floating color="teal" rounded><q-icon name="done"/></q-badge>
          </q-avatar>
            <q-item-label style="font-weight: bold; font-size: 10px;">Username123456</q-item-label>
            <q-item-label >

          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label>120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
          <q-item-label  style="justify-content: space-between;">
             <q-img src="https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png"  loading="lazy" height="23px" style="max-width: 20px;" />
             <q-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABj1BMVEX///8AaK7/wgAASoT+mQDz7eqb5v//xQAAMWUAY6wAZLL/xgClmXFVy/wAXJ778u1yn8YAYKuFo8b/vwAASYWTl2T+mwCTuNilvdkAbbGW4/4ARYcAR4aemGr+lQAAL2YAQoj+pwAAJ2gAIWkAKmcAQIlaq9hDqN5VyvsZd7j/+uulgnGls8ewh2f/uAD3vwCujFH/7NH/+Ob/sQD+pQD/1GParyODgFmPh1HAoTeTgWQAO3z/7sL/8s//6bH+skz/yS4hVHsATID/4rz/5aT/3owyW3XmtRlBYHL/26zMpy9WampKZW50eV5tdWJjcGaAc0UANWEzR1kRUXuPfT//2nqGkHVFhbq7y9r+uFz+rzv+0Jn+wG3/zED/127/0JHljACUi3+RaETN0M6zeTRGWnXViCOvtbhtV02slkOHkZpaan0AGlLCozJPRkkoPl/DgCywmT6fkEloZUx9cUYAHGpSWFKkijZMVFR4ak5hYE/V3NjKrjRwiH++xLVIepMxaZtcgoZ+zO09kMbQ4e7PDdc2AAAMEElEQVR4nO2c/UPbxhnHjexENloLzIpKZs82fmkT2qEFqIEBafAIbkhCwksDSZqtL1tbujEGoYXlZc0S/vDJL7rTy+leJFl3qPr+iCxLH+6ee57nq5NTKUE0cufxbCajPXk6zftOBqTViVIpY6hUKj2OI+PSrbw0lemrlPkz7/sJW9Of5iVJkvMZwHiH9y2FqskvOnwdxCmIeIP3XYWoVbkPaCBOAMInvG8rNC3fAnwdwUF8yvvOwlEvAKHkmRJAnOR9c2Hodt4OaEgDhF/yvrvgunnLxSdJU6XYLDbLzxB8xjydBYSf8b7FQJr8C5LPkCUpXuS8vyp5AVoWm9Is79v0rSVUAKIyxl9536k/TaMDEOqCZwxQomFkLjbaV1/zvl12WUo0b/XKU037plz7lvcNM4oQgKY6GUPT/rZZz5b/zvuWmeQs0byVz2jfbVXL2Wy29j3vu6bXJKJE85Iy80OXL5stb/K+b2qt6tR8sry/Xc/2Vf2R953TaZkuAHsDuL5WUdMmYfafl3jfPIXoA9Dgaz9oFNNpSFj/B+/bJ+u2d4nm4tPn1UK6KziIomcMZI+ElqwcrRgT1EEoeMbw6JHQA9j8HPBZEUXOGDQlGuBr3+8GIJAK5ylvDk9heiTXBJWOW4W0XXCxETRjUJZoXT7lYMU6Qe2I5dq/RLT5iT2SdYI27zXcfCZh/fDfmniGBlMA6nOVIoKvh1jPfpPRxDM0WAJQPt52BiAkLFd/+EoTz9BgKNFkZR0VgH0VK1vfaeJZ4KwlmiefWlk7sDyqEcXQmGQq0eaKnhM0XWjtGzlEOAv8JkOPpOxv4ybofV2RhLPAmQKwuebNp1butZXe50SywKc9bWzEBG1vNDwyRDcAFxS5/0mBLHCGAJT1+TQmANPHugw/C91TjSsfUwAu4DJEY0NXbJ8XwgK/wdYj4TLEvabiOEEAC5yxR/Iq0Tp8K0eK7DoHLjacMgZbiebqkSwBWJjXnQPYEecdGsF7JDMAKw/aKD7OOzSYSrTmXVwAfr6O5pNsGSPinURMNrY+V/AMwHRle192ByAYRF4Zg+o5Uv8eFaNHwkzQOWQAQsHyNMKMwdYjYUq0YuWuRwBCWcrTqAwNPza2RwCuHZD4JGvGeBwNoD8bGyGjRJO8AxDKkjGiKE9vsgTgEUWPRPE9E2CHxuAzBqONzVaieQsO4oANDe+tPgg+Qom2gCjRvGTJGJmBArL0SBK2RypYeyQaRWJoLLEEILZHqjh7JLIiMDTYAhBtY/sIQFMDNzQYbWxcibZyhCnRvDVgQ4OlR1KMHslzAAsVdI9E8b0TA9zTt8Syk8Jfj0SjgRka4fVIDUyPRCFLxgjT0GC0sXElWtfGDqKBZAymEm0fE4DkHomsAWQMxh7Je4LS9EgU14AZI5zylM3GfoAp0RprLCWat/JwEMPIGGw9Eq5EK9L1SDjJiq4o4Roa4fVIBdoeCXeF9a1qfUcK0dDgXKI5r9B+/lM5m62dyNaMEcTQYOuRNrxLNNVviWa7gr6T7W3HLOshWeAsPZJ8jAvAynwIAbiwWe1vrfmpHUrGYOmR5AVsALL3SG6+5latbO4dOtRDsMCXI7Gxqa/QPgF82XJ1ofOFwSzwyS9YMsT9IiYAt4+CT1BpZxPshy7Xtta7XxgoYzA9R9pX8T1S8ABcP6yCAaxmT8GS5TtjsDxHkg9wJVohSI/Ul9L8GU7Qev2hJaR9WuDhbfXp9EjBM8TDumWCvrDnVF8WeFg9knEkaI/UmaCnIEMYC8zhuiOn+ihPb7IE4FEa0yMVgvdI9gCsZ09dM4Ld0GCZoOtYG/tuGCXaC0sAVk/s/zFFb3emCMwYVBY4fQ1qBCCmRDN6pDBKtLIlAM+aDr6Hh5tnRp5lMzSoR1CWMM+R1EIhjB7pCAZgtrpp/491j5bL9XKbbU/fTUpAIwBbg+6RLCWaEYA7ioI8Wn2oMJWnOt3lI+mRrCXac3tOtRyt/0dhscCXqIZQ0TfwJVrwAJTMHqlXojVtK6jtaO1UYckYNG69LB3jSrTifGA+qdMjwRJt88gRgLajZ92/TdCWp7fIfPLCCq5E2wjBRdPPLAFY3nFkiKb1aNfMkBh6DOLFB2pjm9d4DkuY2gv7f0zWT6p1xFHqRpF0bXyP1AreI3WkVwGBs0STm5YCzuigYHjC5TSDXU6xS6ks7RdxATgnhTCAHcKaGYDuEu0MvjJrP2qZpljCTzF8CrZHCvQcyS6li2Hvkfpqm4Cuo3mNLhBXPddSko19EHwFhRyHtWrtZ1RO1bPl3gR1HbUQYovTaQ9CWcK8DqHSbvWhlSwtnDaRXaVyUut2UAeuo7SzNIX0RmUJW6IVg/dIrit6ds3Py/VDd3gy+IrTiC81eiTc6xAh9EgMUtpN1P+TwZG67RxEgo29HbxHYhT6cgzthez4unnc+0hqCCVaKJpi2MRv7Z9INnbwHiksMXmKz8BpRomGCcDGvTBKtHDEtoFouT+IRomGC8BW5AHoLehF0e2Q6mYMo0fClWhpUQKw80OgWh+wRGt7T/e2+uBKtDB6pJCUnzHHr/SY+gnbbRkfgCHY2GFJngEDOMuyXWEeU4IWWrjXIaKVPAX4Mmy7hb9f9AxANfwSza/k/CwIwC9Zd379gh5DtfEg0hINrxmYItgfcb9cRISh2lgJs0cKJssE1XztF/rRVaoZAXgsEB+YoBmfW2kutRyDWCyKU6LJ+Qn/AQhkX2zURrQ9El4zGRPwSZBdidtwEHn0SJ6yZohgbyB+Cwax0BKpRIMBGHjjbD9jiFSiGQEIS7Tgr+a9VFU2G1seuGa0zg9hGso8WQ7Ml+pkDCNDoF4ZR/NJr45/M1h9DPT1OI0+ATpHE46kVerXIZTm69xwhBqjU2Gxr/QnSMT/0gfgo+HhIRH1vpkOFlt7KETyw7ae9F/E5OsIpLxF1DAuUz7VFxgQIqYXxxGIVDszlEciA4KJaiQ+xIKDssBdagoNODQEirPiLmIQXRY4YghfC04IB3ERlTXI2VC/yhuBJEBYQC02xC1E8oHgQ2gZRPUNKmM8IxEeXxzCdBpFSMoY8pWLToh+aBorwsnYjyEhY7gJiSV4TjRCfMZwEQ6/efR7i/7Qk/VP/4sYkUyI3bHoJBx+LSuWprW/R2LC+jflVbQplEyI3RntIMy9sR82CW3zQIk2w1AQ3qAnHH5k7ymRhJIuGiFu36mT8IrjbQgkoSwcISZjxIQQs+EtLoTehkaUhKQsYy7RV+0fpCP0zBgREl798Hd4vWfqI1s6oiP0NDSiI8y9vUzQ22sm4jUfhJ4bM6MizL0jAV6+DAbxvXeWiUpJ6FWeUhI6TvJD+CEL4Uc+CD22uTsJ/6jZ1SN0/HFWTEK0oeEizFBIE5MQbWjEihBpaMSKEGloxIsQlTHiRYjKGKS1FC1hCRGGhisfKs5n0wgp4hK6MwYh46MlZk3TkytjREY48Lq0L1fGiI5waIjQW7y9ZspXb2HKmTGiJBzLXcXpuilf/SHQJEdCn2IkdBoaMSR0GBpxJLQbGgS/FC3x/FK7bBa4y/OmGEPxPG+HpjGEzucWyIrmVZR8fghtFjjq2dMVvMR79uQWZgwv5PNDtywZIw7PgFF6FntCmDHiSggt8NgSTseeEBga8SU0DY0YE/YNjRgT9jNGnAl7hoYSY8JuxpCn/hRjwklJys9m4kyYWpotZbRYE6bulEoxJ0zdmC3FnDCVehp7wtQHY7wJSEoIE8KEkL8SwoQwIeSvhDAhTAj5KyFMCO2EOZfwR/GiOjdawrHd3zq0O4Y7ihfVuaPEF03CJMztjbi0hz2K116O4txLuwTEEAnHPhi55NKI+QHkUbzgueO4c69HR/gSdf3zHO4oXi/7X57DnTsyih/EhJCFcHCzFHsu4bXii7HSDImx0hgQu6MOWS/vPooX3bnXo8wWv4KML6QSwoQwIeSvhDAhTAj5KyFMCBNC/koIE8K9C0TY8kV4HvUrMMwCgMVRX4Qpkk3CXYBwEfmL12SNCz5N4Q+0qv4AUymiFcRXcAjRP8xOoXOhBxEMYfGNX0Cxl1MI6G8hNRGJT7h4Cf6wfoAR7Gp0TMRxNPmKi6rvGAQ6H39HeMgVtd4HE7Q1aqaJ/wPdQ97t+uhpFwAAAABJRU5ErkJggg==" loading="lazy" height="23px" style="max-width: 20px;" />
             <q-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABOFBMVEU0NDT////u7u7t7e3+mQArLC35+fn09PT7+/teXVsvLy8AAAAwMTEtLi4qKy1OS0by7eb/ogD/pQD/ngAfISMlJigbHR8WGBsLDxT/qAACBgoqLzGUkYzf3dpXUUn28+8jKzHIxcC5ta+hmpFHQTcXFhSVk5HOycAQDAAbKDKup599eXNyb2uIiIhhXFO6uLYfGhIyMCsrIA2Jg3lVVFK+exCSZynRjB6DVheEgoErJyERAAB3c2w0MSzk4+DAua8RJTJeRCw+NSyEWCgDGidpSia2eCXjjgvklReJZC9XRTFaWFQjGgmnn5Q5Lx+xr648LxprZV0dCwBJQDJFRUQgFgI1KRMrJRuKfm51a1xmWkmgoaFDOChxTSQSKDXtmBKfZR6kcyxMNx25dR1jUDQAFytwShtbQiAjtjTKAAAXJ0lEQVR4nO2dCVvbOLeA46SOgy2bLN5IYnACAUICJSyl0CSkISyFmTLcdr7O9IObLkP7///BtWQ7mzfJcSBzn57ZGg8oen2OpCPp6ChG2cLELWEGj+wnieTgUcJ+lLKfJAeP5rKoeGwuq/WL8BfhL8Lnr9Yvwl+EHoQJS0bKsh+NlGXLSFm2zGdRMcaW5ECwHjE+j+aqqJhT5ymnrdg6T8RHXq71aPhyE3NZFBlhfKQsZwMhqtaTFRWe0OfFp/yKijuLmk/ClGH0qZVUikmNmX/Ukhy8LeNDPD7WC82C0Lb4dLtU3lrdPq7VavXaQr2+MDOpN4+Pt7fXV8vlkpZGtHFHrSIjTDBJKq6VijtrHMfl84ooSkhoSeJpmuZpdiDwI3w28oS3no0+sp6N/h4/WpRA0+gbRFFU1bzxnWs7xZeay5gXBWHCMJj2afOgtSsKNIg9jwBaEOXGzfHpSuSEDEOlyzd7qsQ+E9uosKK61zxlcPu/kRE/Zcmw37CfUJR2zEvCc6nOKUASQbHtrGiKcT7C8doordaQ5wfPFFZubK/YFfX12vxMGOk7xexX5OfmcRWxsm7VdZq5BUNtLM+d/mwB8vLGlIQJZqWo0s8N4iOCWpyOkNIO5laBpgBloT0FIaW1xOdGCBQx1g5P+HJzni3UFn6zRIUkLDX45649ltAnZQqLcHI8LL2Z7yY4FPCmTHmPhzZqfOi1oY/Uy8YsAIElEZd6UvJsah5+aSLZ3hSirAItKWo+b8xJjH/n8yr8g6pIbFSk9GZ7jDB4FYPRGlF1MrQoq7+tLTTXf4dTvDSc5KXSaU0rb63Xb7q7qhiJv8ufaEQ6ZFYOIhkmgCRLseZ6qZ1gBi1kRJJMQivXlvlKBHMWcYGEMEEVI/BEgai+r99qbmjj0j7dv1en9iyUIgFhakOd2nKk3Y+1kqvm3CS1sf9Rlab6QqBu4BMyy9M2QplbLidcWbw1eXvPTcUoLDO4hNT+dDYKlPfHbTI8U0rN3WkYlXVXwsHIONwFaFemslGxVQvFhxiXp2gfbGXFZRofS04KQxWVKfgkrq6F5YPycje8ASnbDppk0um1JbVW+NcIVGtOGl7atfAm9Gnwcn1WMRLTtEKW+4txrTaRbHFhPX65OCT0nFsw6Vjo4Vekp1WgKSUpZF/OAvsF+xG+DK1CZXmqFjgimhzSKa6UAwkTyZuwHrfajMBCbUQQTotCM5CQSeyFbOfyXWR8EDGcqwr2VoIIk6dqOED1DtdDw5NyuB5VPfUhRM9SzXCTCrnpUdPQsh7qVYtNH0LzwUGoVyd9jq4N2vU5CNMU+RvTNxtuNU96bVorDCDLRtWLjojGhXnZDS0+4bVNeN6l3RClgjel6AEpqhZm3JJfotVTb8LfwzRD5a9ZAFJtNkR/KhYDCHdCjIb0cuSN0JRiiImGtBNAuBaieXNlrypOKW2OfJWK/YPynwGHaN3C4owAKepOJvbBQR6NCp6EKY4YMCaW8KucZJLBPzSUcoVciVzal1AjJ5RuMKurba3X6gt3te0t7KElzQvErYbTJgjHx8NSnpiQw5kxMaW7/+FUVRFFWVHz3KftEh7igUiT9qdqiRkfD8fCGFJlYleJPgjuSJPlg10FhRWZIUGCpFaOsZbiigpNqkS1TI0FlIz5pYnkFjGh8t/AarYXORHRsbQZGwVF3XuJQVhSadL4JHULvVQPvzS5Sjzgbwauq5U/KQiPpwUTzvyPxN0GE7b3BFIzFVd9CBOpbdL1Svo+EFCVLLVBBbI8iAG4x8bSkloKJEysCaRmKq77EVLHpIRykJGecgKCQ3+P/67wJrAJJ+siKaG07UMYZ+qkhLsBetC6EoKD4vhlZT2IkNpWHS9mKsL4AaHR84tp/xouK6jhGebp1mF0AzvU3w1CMr+GXmB8CBOLhB2XVPevoGbYKOxBBfc3pwZ6tFt5N+X7CViMexEmQhAqq771SzVl00A91CB9xiIkqpSDcOyoArGVBiihvQtVSAMvO+NjQX1NiTMsnJRwLPR83GuLLxISKv5j2q3q0cfYIgW5qBpHrkPDdfFcxWBIdSj4L5LeyagVetewEtQQ06EIvecWxDqMiUWfZdJ0S/JXYWz39MkJSadjQLnbKqU9Jn2nFaOP8VNhrBLkuSFCotfuT8jchFgYUVWO2/ywc7y6VdLaiRGVtk0V+g1nYtCYjwiJhouodWgWKkmSrCj53ZPYx5uFv4oGaoJJlRYV5M74FSkWveGQJDlYxvMTCtacAZ7+kBUY3fXnf9bglIkXWI/BHpNwZT50GAM0EGzv05ohSfaMwrd6T0E4MR6G3FoD7JBvOM/l0YenJxxfxRj8CUUqhCW0SweAh6yCSYoofUucSTs0vTb3SIVpCQffYkxyWaTDgHkBFiGpDj097wgJsSWQMA390n8tIQC0sv//kRCwkhkwnN/7Yw3Lp/mXEAJWkERF3d1bO6gfF7dgwHAA3b+IkKVFsSLFlj/vr0LHLk4Q05AO3Zc+FSErKvm9tZ2iobIVb44n0mEiETEhKymVj3+vltrJ8IEo4Qlds0akQvs0Lngyx91tYbW1yAktHLesEVER0rJ4UIwkPCNMO0z4nLeIhpCW1/a1iLb252R+OCYSt1iOLnJh/gglcaEUZYAbJOTniBDkP0XKF7odzopQBJHHncyVlQKlTniI5F9GKL2ZReBQBKPFaNaIaQiVxRmEJ4bUoU/WiDDrpaaod6HPyURNeGPuH7qvYjALIU8iVGYTnRiGkPXdIQ1LWNknCuYiJCRrhzMhVP8mr3pqZSXdbgc6d/OhQ6VOMPVLxrXSVu3u88dYg5XoCsZK1PMTCi3sYTBVXq8vVvJ5VRZRfik6H/3OTPSErIg5TLRP797kVUkSRhb/FRwdPnc7xAiKQXy1j5uyuZfB8vbqP6s+qZXC8ZCcUGziuNrx/YpiKQ+lOjOzlmHqMByhe9YIckLA4Yz0t7Qi2Ds1JqJBCFNHyDjtkGz2ZBD6+KXkhIGL1lCanGWe5p4UP0yLgbUHTNwOfVYxiAn5VrAK04uqvenm2PPG2bcgtFI6Wh0GtiOKWllQaM/gvRkQRmulYDd4tbBWEcx9Nrcd/RlYabQ6DFQBPLZs8rlvBotB4anPrcNKKQgw8VGizf7F/RXNOaFwEARI/aWigAyvSgbGwUfQ04xFKhASyoFGusJZPprHzBorro18tPDOGkFIuBl4mASGh7I+VaxgxbWR6tA7awShX2ru8vhJEgUn0oJnvEJgQ47AaxsSEnve8nFA9dBxCccoP/qOxCAreN7Zk3k6xU9KHAt7GW9CNsglet7ZU74URFhUvAcKKPTHoBKeV4dc4OIFDGTnfY4QSoF5GMijviIkpP8Iqh71WfQZKWKBof5Q0HDzXIRrGIS8LyHGyac9CUQ3xyckDDYx6qPo20+A4DMz1B/S8+lQChwsTCv1aYbBJVB3YjjCwdrFFF4bxsTis+g8sTYiwZ0xRd2SHgsyCH2yRhARyoHDIfXZ6Eu9UxiASjAgtbFLeAKRj25uIf8eWL19hfdZRgpchoKysijNMyE0MU8d4qzxGFJTyI6URDg/xCDU/vQhxFjjgbLBkR0piXAVQwzuCePGDN+LkG7gRd2kDDMlIYxQhxiE1LrnaXMQODW05WWFiDDCdijWgmsHz5C6E6oBp09H5INI0hAdhOHHQwyvjaL+VtznTvId/q6xViHpTB3j4fjlFySEPM5wprUkN0LxPcm2eFElOOxs9DTeWSNIZ084vX2Zc1GAckMUW8SQpPd/2hkwlFWHAlilThi8uPEJ306fdhXDRBzXIlAqwbPCSfkvft6cKAkFzN6ivaOI1vEnVlI+7Qet0LlJEzuzWZSEwauJdtGl5kdJrhjCLq+Gi51Kf8TNZxHpPn7wivBAVrTSafm0FD40rISbKTJSQqwN4KgENwNfhKsYmGN+VFLO49XNQTh+wSXh7pocTd5gLNHcBlZ3Qp+sEcQ7pBiuaVRS4vAym0W4igHlzbRnYvClJuNlqok4UkGOoq9hMDyc5LEq+K7bDSTieBpwEkHs83Gwrac/Q0DPreQZEsak6dNCLuS5oMnwRkwxowEwqhexlRruN05iOR9hjvO0uObvCZQqg4x2wRWKWocxAKayU6YON5f8g4y3NiUTD+t+0Mh1GBM/T3EOqL2GzE/gvKcpyf0KyhUG95JxaufQ4VTjIZIpfDdtTTYjwiTJy06Zep62QxqxquMYD4dFhYsvNSQfFvGUk+zKS/fuQ0biN9WMR8VO20ZHGKkwkHBaTBVVM38GSsMquw4Z2hran4OJNnBrNpvzFvl98rao7ZiAvJUdxK0pvjQ7URZvrJ8lYUz5TNijplZPZMGMB7NrX3FEgK3mJTtwE3/BdEaEMVEkGhe1OzMlJjsS48xOZnbft9NmBqSAGRf/vInhCWOAwz+8pjW5QVTtyIQBvBnd64nf5QXLkSHdXZsNYQxIJzUsxnatoQpmutYJ8wO7w1W4lRuY15P2DThylZnpMAbXQd/USk6icbzbO06R7KBhYTLnJ3dsdVlaDKXmReH9ZLXwIQw9Ho6UrsCj+AmPRcZ4+3aHrYhWPKZ7B6kso5wPtw3Z/hnSGtH1ifFwNGtEMlmf8uJKWhCVzW79vxOLaqm0Vl5tLv6pysJAM7T7lF3qHv++uoCOL7hEjBUKuikFz75Hqg9xnFkjUrXpbugzmhK0PVnlOG5vbbl5d3dX31n7Y8/4yKniIGMyOpjg1T8CWVVFy1EbfQlAr+rdnw8Pr6H8+PlB7+iuJRiECe/zFqnmtIQwd5upJpiGT5YVBR5TE/jhcS6vpMLjJZh9zMBCgd7qvru47GeQ5HKZTP/q8l236kZYS/nMLVxzQQNvi3AXlh3PTodGbGR19qmSgPENWCZq90OFDvh6lctmMi9GJJfL5l65IAYQuuTzLnQfrqukB6DR8TSBNbPTmVzwkYCyzmP8Pj8SeAv0t5e5XO6FU3LZ/3VWLIjQuVHXPVrqn3V0QkSUnW5EhwKqM/5FwGAwF9Srhxk3PCjZh4KTcBteUuJJuO5CeJl7sXR0ppMzoprGAIsS1MVCnoPXz3LQOHOGVQ5kSPjaWStp2/d+C5e8+oXrK1j80Vvd+b6eQAr9JdS79F8cHR0i6fcHDTL72tl+xNWkH6Hb7Q+F1pFRYmbp6LzzDIzgy8WXhx8fYh0oPUM6j4/3FxZi9lx39MrKVjLhmTUi5UpoIb7IZC7fgqdn1PVqoWAlYqQFNOpIj19MxKVHZwSxWk75ZY1wv6Ok0LtYQn1X5uifDnG/Go3ww16LpaX7jNmXPjrnjmZ0gecqhtc9M52fWVSmYauv7qtPr0hgjaZoxiwYPbNJeNhzzq04zST0mFukvSICqj8vzS4st9S/+BCyYw0vyAXQq41WVQAsywotRJj92oNnAcZ/lKP8COOpvJcNFjrflyzGTO7i9ePT9qwAFPTe+cVV/yu6+a7ww7SoH7pjhgICCKn/eHocQDzr2yNRLnf56m3hCRlB5/rhEg4SS6/0GBwkEWH/m+BYRrX2pT3zJvreu1btHmUHDlMmc3jdqeqzxLKlUO3ELvpZ9HqXvsKvrF7AD5nvPacTL+wEEBb94qsK1aEajS/I5i4eClVSv5xQCnr1/FU/m7WN5xpaTusKNcNXVefdLlZ8vaeVBtyVC/T7w4Ea4fdlrg6vW/qs7BUUqvT1F8M67deavbrX4fMuetA3b3gZf8PWtTBeqxiJuNbw/1KhczY+iclk+xdn1x2fSXdIKeid2I8vR9mh253JfDG8KkNr+jvkql5U0VrP+Bc3NGpiPLRR49b9nQcBK1t8rzvh68OJm9Hx3FcjowTGfL779uEylxn9ptzlB92crnTQyJWBLtvkShx9YNJ43w5IHQcGOkrVH1dLL8bFqMvV4esPPaPvmdZijYbX019/v+qPv8fM0jtBN5cKhG99+JVXj7RzR0pqogsefe4hpTDuAwZ678uVc86Wyy71j76e/SxUQzZMY8yrVgs/Xh1eZrOZybIPuz17EaT6Cv5f6HWzjqMA6mkySIcrOHc6C73u91xmEhGtLGT6l0df/vnQYnUCq4Vseqt7ff7l0nh1jvm8wXfes/aBjb8ej4wfyBzqhvfGTqwYgL0EE0RI4S1GSb17V0azRzBs9uri4uxHV+8YdgsX/wqO6b3xQIdrg9VOR//w4/XFxRVs0S6z+Vz26qyjC8Be/OGrsI0sXRdc7gGjb6xO1I/wFi9CjtWV1mHfg/GFOSOHve7R4bt3787f3n+7vu+CwkDuW9f3b8/PH969Ojx60UfrZ+5LFbnM5blUtZbqeNboWHRopJkvVRN4/L1VyvYV8T6EDMBcZRak3rfvmaxrvUZJYfUzfUOujoZyddSHc/UsRHvhtQwD+5f+WQfxsWhdywACXWO4zx42YryznwFsGoOQKuKG4wJe7xl9Tta7giOkY8rF+IUXlmf4WLVXyS2F6Q/ZF7k+WwBOnxSen084CMciFZBov2ESwmmbUD0xXOIARYYSg+/rW0kfrCLbONXvuVzf8N3QlHFi8G5pjEXjlTXClG2C26JZWhB73a/9ye59ajxjhmaMi6b6zJtAzBZXeAsBdThldFwpIO5TjINmwmtD+CubJL6J8S4NRf5j9Dq41heIl8scfmlVqyP3gNCDC6wL5/3+WgG+Wsd1ZaAy3L/0WsWwTHid6MpvuEQkiJ3G2YV7b0+Il81cff2hD3pPYXIXR//ZKiDjcbbCfSo1JPSYW5iEzDLhJhvacdJ7jz8PrzJTqNKwTcP3azz27NbnevUl8peAc3eHXmYSuITUBvGV36ZLrPfef3tn2GsISjh4Gv77+15VGuKZOwFu38c7AIG6kcInpIoKIWEMtQyoScNH+fn64shwLTN4vY/Bls1eHb46jz1WDU+MBnbrM7oY15svoTj35+QilSAgpBaIr82FYiVENFwxsXt99v3SmCBkc+4joPnYcGP7l98v/umeiIjOYmNRFAPvPZEDjvAF6WCFiZMQaifEt5qbX23ZliCIhjKlbw+vv15cXl1mDTWNieHNHF1efH398PN9r9MRpcHmvsDDrV+HO+b4nsl329DQdb++hIlRQqq9SXznt/3lPGt7IYJhtL3eY6fT67Ra3dcDibX0x8fOozGdFPVB6JcxItgL257G6SX8pga9GRIdUlTpJCwiugVocD21+V9JEqQqFB3+M57EFLnUwx/H3mMcCtt4SaG6DwnjA0Kn15YyP1PlN+ERESbLDwZsO+/l+J/QdE/grdghOKwTK88E5EoDQ3R6bU7PO2UpmCpPocUBJuB53gqyHIwBcOd7gA7QHWbevWawCA0b0GGI/oRxqrQZrrtxYgIwtndk7ujbbQ7e0z1F6XxlGDRISJig2iehBg0fMVh4HgCosYgW5qTGSDQdMSGlLSjPs12IK0A+0JLxKQjhSfEpA8FmKrRaXDGGuakIqY1leV7VCOTlDQQ1HSHFrG8SzaaeTMTKPmNW1pfQczyEQ6IlK9sNebqwzOgFyI2a4ccgGSF0GQ/Hs0YwY2EMwziNdhGcSPNjrEAQ2X2jC3VW1H7ilTUC2eYQf9SCmdPmnirOgyZZSd27uU2PHlsctCsiv3SCEBrr6fFNQxaxzlfNRAz3Rz5pHDRP24aKRtpVZISwjWoviztreY7L5xVFFCUophsG06zzVoBlZB8FQUBfAa+GNL6UW9splrQ4lWTGaxUlIYUadSqtlcpbq+vb28fHzfrC7KRer9dqtePj7VV456VV/XjCUasoCVHXBa/fG2h12Kajl2QSdnsMXAVN+dYqSkLvshI4RcX9ipociSmr/0t49n9zSPjkRbmsYoy+LSKLT8xlUZNZIyzrn3yUJHs0V0VheW3DXQBf/2g+i8LwvMd0PizL2UASc1nUL8JfhL8In7+oX4S/COef8P8A0VDIEeS1l/MAAAAASUVORK5CYII="  loading="lazy" height="23px" style="max-width: 20px;" />
             <q-img src="https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png"  loading="lazy" height="23px" style="max-width: 20px;" />

       </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label style="font-weight: bold;">Venda</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrsb-6442f43c-3f20-410f-85e3-d3d680646783.jpg/v1/fit/w_643,h_643,q_70,strp/arrow_red_by_junior_motta_dgbdrsb-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnNiLTY0NDJmNDNjLTNmMjAtNDEwZi04NWUzLWQzZDY4MDY0Njc4My5qcGciLCJ3aWR0aCI6Ijw9NjQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYdvlX8LNukFx47_Qd1PqGq6-m4a-1mdZJfdUlfVwzY">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>





    <q-separator spaced inset />

       <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="green" />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Compra</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrs5-524f1a44-ffd2-4549-83e4-74c0da053066.jpg/v1/fit/w_642,h_642,q_70,strp/arrow_green_by_junior_motta_dgbdrs5-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQyIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnM1LTUyNGYxYTQ0LWZmZDItNDU0OS04M2U0LTc0YzBkYTA1MzA2Ni5qcGciLCJ3aWR0aCI6Ijw9NjQyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.HrwOwIqUnU__Xbq1KAsuKHNdVDAS6VE0zYztceBVMHQ">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>

      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="red" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Venda</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrsb-6442f43c-3f20-410f-85e3-d3d680646783.jpg/v1/fit/w_643,h_643,q_70,strp/arrow_red_by_junior_motta_dgbdrsb-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnNiLTY0NDJmNDNjLTNmMjAtNDEwZi04NWUzLWQzZDY4MDY0Njc4My5qcGciLCJ3aWR0aCI6Ijw9NjQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYdvlX8LNukFx47_Qd1PqGq6-m4a-1mdZJfdUlfVwzY">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Compra</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrs5-524f1a44-ffd2-4549-83e4-74c0da053066.jpg/v1/fit/w_642,h_642,q_70,strp/arrow_green_by_junior_motta_dgbdrs5-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQyIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnM1LTUyNGYxYTQ0LWZmZDItNDU0OS04M2U0LTc0YzBkYTA1MzA2Ni5qcGciLCJ3aWR0aCI6Ijw9NjQyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.HrwOwIqUnU__Xbq1KAsuKHNdVDAS6VE0zYztceBVMHQ">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="red" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Venda</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrsb-6442f43c-3f20-410f-85e3-d3d680646783.jpg/v1/fit/w_643,h_643,q_70,strp/arrow_red_by_junior_motta_dgbdrsb-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnNiLTY0NDJmNDNjLTNmMjAtNDEwZi04NWUzLWQzZDY4MDY0Njc4My5qcGciLCJ3aWR0aCI6Ijw9NjQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYdvlX8LNukFx47_Qd1PqGq6-m4a-1mdZJfdUlfVwzY">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="red" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">VENDA</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrsb-6442f43c-3f20-410f-85e3-d3d680646783.jpg/v1/fit/w_643,h_643,q_70,strp/arrow_red_by_junior_motta_dgbdrsb-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnNiLTY0NDJmNDNjLTNmMjAtNDEwZi04NWUzLWQzZDY4MDY0Njc4My5qcGciLCJ3aWR0aCI6Ijw9NjQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYdvlX8LNukFx47_Qd1PqGq6-m4a-1mdZJfdUlfVwzY">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="green" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Compra</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrs5-524f1a44-ffd2-4549-83e4-74c0da053066.jpg/v1/fit/w_642,h_642,q_70,strp/arrow_green_by_junior_motta_dgbdrs5-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQyIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnM1LTUyNGYxYTQ0LWZmZDItNDU0OS04M2U0LTc0YzBkYTA1MzA2Ni5qcGciLCJ3aWR0aCI6Ijw9NjQyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.HrwOwIqUnU__Xbq1KAsuKHNdVDAS6VE0zYztceBVMHQ">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />

    <q-item clickable v-ripple>
        <q-item-section side top>
          <q-icon name="circle" color="red" />
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar style="font-size: 80px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdssp-3b047a5b-e5ab-4f01-b215-ba34d4aad182.png/v1/fill/w_894,h_894,q_70,strp/ratel3_by_junior_motta_dgbdssp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzVhZDY1NGYyLWIzMWEtNGZhMC1hYmQyLWIxNzdkNWEyM2JjYVwvZGdiZHNzcC0zYjA0N2E1Yi1lNWFiLTRmMDEtYjIxNS1iYTM0ZDRhYWQxODIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-M_H3jYqs0c58gwJp3n7JD026UGeYYB19xZd_syEfLs">
          </q-avatar>
            <q-item-label style="font-weight: bold;"></q-item-label>
        </q-item-section>
        <!-- <q-icon name="star" color="yellow" /> -->
        <q-item-section>
          <q-item-label style="font-weight: bold;">Sats</q-item-label>
          <q-item-label> 120.000</q-item-label>
          <q-item-label style="font-weight: bold;">BRL/BTC</q-item-label>
          <q-item-label>350.000</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Venda</q-item-label>
          <q-avatar style="font-size: 25px;">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ad654f2-b31a-4fa0-abd2-b177d5a23bca/dgbdrsb-6442f43c-3f20-410f-85e3-d3d680646783.jpg/v1/fit/w_643,h_643,q_70,strp/arrow_red_by_junior_motta_dgbdrsb-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNWFkNjU0ZjItYjMxYS00ZmEwLWFiZDItYjE3N2Q1YTIzYmNhXC9kZ2JkcnNiLTY0NDJmNDNjLTNmMjAtNDEwZi04NWUzLWQzZDY4MDY0Njc4My5qcGciLCJ3aWR0aCI6Ijw9NjQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYdvlX8LNukFx47_Qd1PqGq6-m4a-1mdZJfdUlfVwzY">
          </q-avatar>
          <q-item-label style="font-weight: bold;">Premium</q-item-label>
          <q-item-label> 3%</q-item-label>

        </q-item-section>
        <q-item-section>
          <q-item-label style="font-weight: bold;">Expiry</q-item-label>
          <q-item-label> 3 hs</q-item-label>
          <q-item-label style="font-weight: bold;">Timer</q-item-label>
          <q-item-label> 24 hs</q-item-label>
        </q-item-section>
      </q-item>
    <q-separator spaced inset />


  </q-list>
    <q-footer class="column items-center" style="background-color: transparent; position: fixed; " >
        <q-toolbar class="flex flex-center">
        <!-- <q-btn-group push>
        <q-btn  color="yellow" text-color="black" icon="light" push label="Criar Oferta"/>
        <q-btn color="amber" text-color="black" icon="timeline" push label="Chart" />
        </q-btn-group> -->
        <q-tabs
        v-model="tab" dense
        class="bg-black text-gold"
        style="border-radius: 10px; margin-bottom: 10px ">
        <q-tab name="alarms" icon="light" label="Criar Oferta"  @click= " irOferta() "/>
        <q-tab name="movies" icon="timeline" label="chart" @click= " irChart() " />
      </q-tabs>
        </q-toolbar>
      </q-footer>
  </div>
</q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'


// import router from './router'

export default defineComponent({
  data (){
   return {
   }


 },

  name: 'HOME1',

  methods:{
    irOferta(){
     this.$router.push('/criar-oferta')
 },
    irChart(){
     this.$router.push('/chart')
 },

 },
  setup (){

 },

})

</script>

<style scoped>

.q-toolbar{
  width:auto;
}
     .q-item{
      cursor: pointer;
     }


      @media(max-width: 390px){
        .q-btn{
          width: 75px;
        }

      }
 </style>
