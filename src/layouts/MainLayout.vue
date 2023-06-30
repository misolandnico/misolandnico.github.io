<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
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

<script lang="ts">
import MainTitle from 'src/pages/MainTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: { MainTitle },
});
</script>
