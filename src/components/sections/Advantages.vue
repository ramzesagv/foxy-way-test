<script setup>
import Section from "../bases/Section.vue";
import AdvantageItem from "../items/AdvantageItem.vue";
import { advantages } from "../../utils/variables/advantages.js";
</script>

<template>
  <Section class="Advantages">
    <div class="Advantages__list">
      <AdvantageItem
        v-for="advantage in advantages"
        :key="advantage.id"
        :item="advantage"
      />
    </div>
  </Section>
</template>
