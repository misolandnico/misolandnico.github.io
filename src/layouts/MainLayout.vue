<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white navbar"
      :class="{ change_color: scrollPosition > 50 }"
    >
      <q-toolbar>
        <q-toolbar-title>
          <MainTitle></MainTitle>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.navbar {
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}
.change_color {
  background-color: rgba(15, 118, 210, 0.4) !important;
}
</style>

<script lang="ts">
import MainTitle from 'src/pages/MainTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      scrollPosition: 0,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  components: { MainTitle },
});
</script>
