<template>
  <div class="button-container">
    <q-btn
      :disable="$i18n.locale === 'en-US'"
      round
      color="white"
      class="button"
      @click="setLanguage(enLang)"
    >
      <img class="image" src="../assets/en.svg" />
    </q-btn>
    <q-btn
      :disable="$i18n.locale === 'de'"
      round
      color="white"
      class="button"
      @click="setLanguage(deLang)"
    >
      <img class="image" src="../assets/de.svg" />
    </q-btn>
    <q-btn
      :disable="$i18n.locale === 'es'"
      round
      color="white"
      class="button"
      @click="setLanguage(esLang)"
    >
      <img class="image" src="../assets/es.svg" />
    </q-btn>
  </div>
</template>

<style lang="scss">
.image,
.button {
  height: 50px;
  min-width: 50px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  width: 150px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    setLanguage(lang: any) {
      this.lang = lang;
    },
  },
  name: 'LanguageSelector',
  data() {
    return {
      esLang: {
        label: 'Español',
        value: 'es',
      },
      deLang: {
        label: 'German',
        value: 'de',
      },
      enLang: {
        label: 'English',
        value: 'en-US',
      },
      lang: this.$i18n.locale,
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang.value;
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then((language) => {
        this.$q.lang.set(language.default);
      });
    },
  },
});
</script>
