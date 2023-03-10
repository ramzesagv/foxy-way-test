<script setup>
import Section from "../bases/Section.vue";
import SkillItem from "../items/SkillItem.vue";
import { skills } from "../../utils/variables/skills.js";
</script>

<template>
<Section class="Skills">
  <div class="Skills__wrapper">
    <div class="Skills__items">
      <h2 class="Skills__title g-title">Что изучаем</h2>

      <SkillItem
        v-for="skill in skills"
        :key="skill.id"
        :item="skill"
        class="Skills__item"
      />
    </div>

    <div class="Skills__image g-bg-image" />
  </div>
</Section>
</template>

<style lang="scss" scoped>
.Skills {

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__items {
    flex: 0 0 50%;
    padding-right: 60px;
    padding-bottom: 21px;

    @media (max-width: 992px) {
      flex: 0 0 100%;
    }
  }

  &__image {
    flex: 0 0 50%;
    min-height: 1200px;
    background-image: url(../../assets/images/business-serious-manager-working-laptop-standing.jpg);

    @media (max-width: 992px) {
      display: none;
    }
  }
}
</style>
