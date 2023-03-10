<script setup>
import Section from "../bases/Section.vue";
import Button from "../ui/Button.vue";

const emit = defineEmits(['action'])

</script>

<template>
<Section class="Home g-bg-image">
  <div class="Home__info">
    <h1 class="Home__title">
      Foxy <br> Клуб <br> Веб-разработки
    </h1>

    <h2 class="Home__additional-title">Стать веб-разработчиком за 3 месяца</h2>

    <p class="Home__desc">Курс веб-програмирования с нуля | Блог на ZEN</p>

    <Button
      class="Home__action"
      @click="emit('action')"
    >
      Вступить в клуб бесплатно
    </Button>
  </div>
</Section>
</template>

<style lang="scss" scoped>
.Home {
  min-height: 800px;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(../../assets/images/professional-programmer-working-late-dark-office-2.jpg);
  color: #fff;
  text-align: center;

  &__info {
    align-self: center;
  }

  &__additional-title {
    margin: 20px 0;
  }

  &__desc {
    font-size: 1.25rem;
  }

  &__action {
    margin-top: 40px;
  }
}
</style>
