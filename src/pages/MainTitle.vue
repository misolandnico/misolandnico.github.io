<template>
  <div class="header">
    <div class="header-content">
      <div class="header-date">
        <p>{{ $d(weddingDate) }}</p>
      </div>
      <img class="headline-image" src="../assets/headline.svg" />
      <LanguageSelector></LanguageSelector>
    </div>
  </div>
</template>

<style lang="scss">
.header-content {
  display: flex;
  justify-content: space-between;
}

.headline-image {
  width: 500px;
  // https://codepen.io/sosuke/pen/Pjoqqp
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(20deg)
    brightness(106%) contrast(101%);
}

.header-content {
  display: flex;
  justify-content: space-between;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelector from '../components/LanguageSelector.vue';

export default defineComponent({
  name: 'MainTitle',

  setup() {
    const weddingDate = new Date('14 December 2024');
    console.log(weddingDate);
    return { weddingDate };
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
  components: { LanguageSelector },
});
</script>
