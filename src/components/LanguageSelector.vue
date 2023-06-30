<template>
  <q-select
    label="Select Language"
    v-model="lang"
    map-options
    :options="langs"
    class="row"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LanguageSelector',
  data() {
    return {
      langs: [
        {
          label: 'German',
          value: 'de',
        },
        {
          label: 'English',
          value: 'en',
        },
        {
          label: 'Español',
          value: 'es',
        },
      ],
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
