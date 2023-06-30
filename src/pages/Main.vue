<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="our-story-container">
        <OurStory></OurStory>
      </div>
      <div class="details-container">
        <DetailsView></DetailsView>
      </div>
      <div class="photos-container">
        <PhotosView></PhotosView>
      </div>
      <div class="rsvp-container">
        <RSVP></RSVP>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OurStory from './OurStory.vue';
import DetailsView from './DetailsView.vue';
import PhotosView from './PhotosView.vue';
import RSVP from './RSVP.vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {};
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
  components: { OurStory, DetailsView, PhotosView, RSVP },
});
</script>
