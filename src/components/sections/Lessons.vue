<script setup>
import Section from "../bases/Section.vue";
import PostItem from "../items/PostItem.vue";
import { posts } from "../../utils/variables/posts.js";
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}

const breakpoints = {
  576: {
    itemsToShow: 1,
    snapAlign: 'center',
  },

  768: {
    itemsToShow: 2,
    snapAlign: 'start',
  },

  1200: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
};
</script>

<template>
  <Section class="Lessons">
    <h2 class="Lessons__title g-title">
      Уроки программирования
    </h2>

    <div class="Lessons__posts">
      <Carousel
        class="Lessons__carousel"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="post in posts" :key="post">
          <PostItem :item="post"/>
        </Slide>

        <template #addons>
          <Navigation class="Lessons__carousel-nav" />
        </template>
      </Carousel>
    </div>
  </Section>
</template>

<style lang="scss">
.Lessons {
  &__posts {
    overflow: hidden;
    padding-top: 50px;
    padding-bottom: 120px;
  }

  &__carousel {
    &-nav {
      background: #4d4d4d !important;
      opacity: .7 !important;
      border-radius: 50% !important;

      svg {
        color: #fff;
      }
    }
  }
}
</style>
