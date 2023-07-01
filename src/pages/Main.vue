<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="our-story-container">
        <BasicView componentName="ourStoryView"></BasicView>
      </div>
      <div class="details-container">
        <BasicView componentName="detailsView"></BasicView>
      </div>
      <div class="photos-container">
        <BasicView componentName="photosView"></BasicView>
      </div>
      <div class="rsvp-container">
        <BasicView componentName="rsvpView"></BasicView>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicView from './BasicView.vue';

export default defineComponent({
  name: 'IndexPage',
  watch: {
    lang(lang) {
      this.$i18n.locale = lang.value;
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then((language) => {
        this.$q.lang.set(language.default);
      });
    },
  },
  components: { BasicView },
});
</script>
