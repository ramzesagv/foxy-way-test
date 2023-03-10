<script setup>
import Section from "../bases/Section.vue";
import Button from "../ui/Button.vue";

const emit = defineEmits(['action']);
</script>

<template>
  <Section class="Consultation g-bg-image">
    <div class="Consultation__info">
      <h2 class="Consultation__title">
        Получи бесплатную консультацию
      </h2>

      <h3 class="Consultation__additional-title">Первая неделя обучения веб-разработки бесплатно!</h3>

      <p class="Consultation__desc">Свяжемся, обсудим удобный формат, подберем направление, составим программу, начнем твою карьеру в веб-разработке!</p>

      <div class="Consultation__actions">
        <Button
          class="Consultation__action"
          @click="emit('action')"
        >
          Я готов
        </Button>

        <Button
          plain
          class="Consultation__action"
          @click="emit('action')"
        >
          Мне нужно подумать
        </Button>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.Consultation {
  min-height: 435px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(../../assets/images/hologram-projector-screen-with-cloud-system-technology-2.jpg);

  @media (max-width: 576px) {
    padding: 21px 0;
  }

  &__info {
    text-align: center;
    align-self: center;
    color: #fff;
  }

  &__desc {
    font-size: 1.25rem;
  }

  &__additional-title {
    margin-top: 20px;
  }

  &__actions {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  &__action {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
