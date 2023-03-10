<script setup>
import Section from "../bases/Section.vue";
import Button from "../ui/Button.vue";

const emit = defineEmits(['action'])
</script>

<template>
  <Section class="Advice g-bg-image">
    <h2 class="Advice__title">
      Начните обучение сегодня
    </h2>

    <div class="Advice__info">
      <p class="Advice__info-desc g-line-height-desc">
        Консультация, подбор направления и первая неделя обучения бесплатно!
      </p>

      <Button
        class="Advice__action"
        @click="emit('action')"
      >
        Подробнее
      </Button>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.Advice {
  min-height: 266px;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../../assets/images/saas-concept-collage-2.jpg);

  @media (max-width: 576px) {
    padding: 21px 0;
  }

  &__title {
    color: #fff;
    align-self: flex-end;
  }

  &__info {
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: space-between;
    color: #fff;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
    }

    &-desc {
      font-size: 1.25rem;
      max-width: 500px;
    }
  }
}
</style>
