<template>
  <!-- <img v-bind:src="$t(this.componentName + '.picture')" /> -->
  <h1>{{ $t(this.componentName + '.title') }}</h1>
  <p>{{ $t(this.componentName + '.content') }}</p>
</template>

<script type="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'OurStoryPage',
  props: ['componentName']
})
</script>
