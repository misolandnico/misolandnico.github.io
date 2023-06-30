<template>
  <div class="header">
    <div class="header-content">
      <div class="header-date">
        <p>{{ $d(weddingDate) }}</p>
      </div>
      <div><p>Misol & Nico</p></div>
      <div class="header-rsvp"><p>RSVP</p></div>
    </div>
  </div>
</template>

<style lang="scss">
.header-content {
  display: flex;
  justify-content: space-between;
}
</style>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainTitle',
  data() {
    return {
      langs: [
        {
          label: 'German',
          value: 'de',
        },
        {
          label: 'US English',
          value: 'en-US',
        },
        {
          label: 'Español',
          value: 'es',
        },
      ],
      lang: this.$i18n.locale,
    };
  },
  components: {},
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
    const weddingDate = new Date('14 December 2024');
    console.log(weddingDate);
    return { todos, meta, weddingDate };
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
