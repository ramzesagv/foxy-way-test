<script setup>

</script>

<template>
  <section class="Section">
    <div class="Section__container">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.Section {
  &__container {
    position: relative;
    margin: 0 auto;
    min-height: inherit;
    height: inherit;
    display: grid;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) { width: 540px }
    @media (min-width: 768px) { width: 720px }
    @media (min-width: 992px) { width: 960px }
    @media (min-width: 1200px) { width: 1140px }
  }
}
</style>
