<template>
  <div class="buttons-container">
    <img
      class="image image-es"
      src="../assets/es.svg"
      @click="setLanguage('es')"
    />
    <img
      class="image image-de"
      src="../assets/de.svg"
      @click="setLanguage('de')"
    />
    <img
      class="image image-en-US"
      src="../assets/en.svg"
      @click="setLanguage('en-US')"
    />
  </div>
</template>

<style lang="scss">
.image {
  height: 50px;
  min-width: 50px;
  padding: 5px;
}
.image:hover {
  filter: brightness(100%);
  -webkit-filter: brightness(120%);
}
.buttons-container {
  height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: space-between;
  width: 150px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    setLanguage(lang: string) {
      const curLang = this.languages[lang as keyof typeof this.languages];
      this.$i18n.locale = curLang.value;
      import(`quasar/lang/${curLang.value}`).then((language) => {
        this.$q.lang.set(language.default);
      });
    },
  },
  name: 'LanguageSelector',
  data() {
    return {
      languages: {
        es: {
          label: 'Español',
          value: 'es',
        },
        de: {
          label: 'German',
          value: 'de',
        },
        'en-US': {
          label: 'English',
          value: 'en-US',
        },
      },
    };
  },
});
</script>
