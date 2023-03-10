<script setup>
import Section from "../bases/Section.vue";
import FacebookIcon from "../icons/FacebookIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
</script>

<template>
  <Section class="Footer">
    <div class="Footer__wrapper">
      <p class="Footer__desc g-line-height-desc">
        <strong>Фокси</strong>
        <br>
        Клуб веб-разработчиков.
        <br>
        Обучаем програмированию с нуля и до трудоустройства
      </p>

      <h2 class="Footer__logo">
        Foxy
      </h2>

      <div class="Footer__social">
        <a class="Footer__social-item Footer__social-item--facebook" target="_blank" href="https://facebook.com/name">
          <FacebookIcon />
        </a>
        <a class="Footer__social-item Footer__social-item--twitter" target="_blank" href="https://twitter.com/name">
          <TwitterIcon />
        </a>
        <a class="Footer__social-item Footer__social-item--instagram" target="_blank" href="https://instagram.com/name">
          <InstagramIcon />
        </a>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.Footer {
  min-height: 251px;
  background-color: #333333;
  color: #fff;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;
  }

  &__desc {
    max-width: 300px;
  }

  &__logo {
    flex-basis: 380px;

    @media (max-width: 576px) {
      text-align: center;
    }
  }

  &__social {
    display: flex;
    align-items: center;

    &-item {
      margin-right: 10px;
      width: 32px;
      height: 32px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
