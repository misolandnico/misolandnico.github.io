<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <LanguageSelector />
      <div class="row q-pt-md">Phrase for Success: {{ $t('success') }}</div>
      <div class="row q-pt-md">Phrase for Failure: {{ $t('failed') }}</div>
      <div class="row q-pt-md">Current Language: {{ $i18n.locale }}</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from '../components/models';
import { defineComponent, ref } from 'vue';
import LanguageSelector from '../components/LanguageSelector.vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {};
  },
  components: {
    LanguageSelector,
  },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
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
