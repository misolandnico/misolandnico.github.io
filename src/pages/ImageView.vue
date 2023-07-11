<template>
  <div class="image-container" :style="inlineStyle"></div>
</template>

<style scoped type="scss">
.image-container {
  min-height: 500px;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script type="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ImageView',
  props: ['imageName'],
  computed: {
    bgImage() {
      return require('../assets/images/' + this.imageName)
    },
    inlineStyle () {
      return {
        backgroundImage: `url(${this.bgImage})`
      }
    }
  }
})
</script>
