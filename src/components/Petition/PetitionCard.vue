<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn6.aptoide.com/imgs/6/f/6/6f6640f7964e71d877e4b061ffa0a026_fgraphic.png"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Доступен для голосования</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Заголовок</div>
        <div class="text-caption text-grey">
          К недостаткам моделей электронного правительства, особенно на ранних этапах его построения, следует отнести излишне «механический» способ перевода традиционных государственных и муниципальных услуг в электронный вид.        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />

        <q-space />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
