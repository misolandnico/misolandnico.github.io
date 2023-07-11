<template>
  <!-- <img v-bind:src="$t(this.componentName + '.picture')" /> -->
  <h1 class="title">{{ $t(this.componentName + '.title') }}</h1>
  <p class="content">{{ $t(this.componentName + '.content') }}</p>
</template>

<style scoped type="scss">
/* https://fonts.google.com/?category=Handwriting */
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
.title {
  font-family: 'Dancing Script', sans-serif;
}

.content {
  white-space: pre-line;
}
</style>

<script type="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BasicView',
  props: ['componentName']
})
</script>
