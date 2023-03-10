<script setup>
import { getImageUrl } from "../../utils/get-image-url.js";
import { computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  }
})

const imageUrl = computed(() => getImageUrl(`/src/assets/images/${props.item?.imageUrl}.jpeg`));
</script>

<template>
  <a
    :href="item.url"
    class="PostItem"
  >
    <h2 class="PostItem__title">{{ item.title }}</h2>

    <img
      :src="imageUrl"
      class="PostItem__image"
      alt="image"
    >

    <p class="PostItem__description">{{ item.description }}</p>
  </a>
</template>

<style lang="scss" scoped>
.PostItem {
  display: block;
  cursor: pointer;
  color: #111;
  max-width: 320px;
  text-align: left;

  &__title {
    margin-bottom: 20px;
  }

  &__image {
    height: 120px;
  }
}
</style>
