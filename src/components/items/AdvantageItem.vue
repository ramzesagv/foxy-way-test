<script setup>
import { computed} from "vue";
import  { getImageUrl } from "../../utils/get-image-url.js";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const imageUrl = computed(() => getImageUrl(`/src/assets/images/${props.item?.imageUrl}.png`));
</script>

<template>
<div class="AdvantageItem">
  <h2 class="AdvantageItem__title g-title">{{ item.title }}</h2>

  <div class="AdvantageItem__content">
    <img
      :src="imageUrl"
      class="AdvantageItem__content-icon"
      alt="icon"
    >

    <div class="AdvantageItem__content-desc g-line-height-desc">
      <template v-if="Array.isArray(item.desc)">
        <p
          v-for="content in item.desc"
          :key="content"
          class="AdvantageItem__content-desc-item"
        >
          {{ content}}
        </p>
      </template>

      <template v-else>
        <p class="AdvantageItem__content-desc-item">
          {{ item.desc }}
        </p>
      </template>
    </div>
  </div>

  <div class="AdvantageItem__additional">
    <ul class="AdvantageItem__additional-list">
      <li
        v-if="item.duration"
        class="AdvantageItem__additional-list-item"
      >
        Длительность: {{ item.duration }}
      </li>

      <li
        v-if="item.expense"
        class="AdvantageItem__additional-list-item"
      >
        Расход: {{ item.expense }}
      </li>

      <li
        v-if="item.income"
        class="AdvantageItem__additional-list-item"
      >
        Доход: {{ item.income.from }} - {{ item.income.to }}
      </li>

      <li
        v-if="item.promotion"
        class="AdvantageItem__additional-list-item"
      >
        <strong>{{ item.promotion }}</strong>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
.AdvantageItem {
  margin-bottom: 100px;

  &:last-child {
    margin-bottom: 0;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding-left: 90px;
  }

  &__content {
    display: flex;

    &-icon {
      display: block;
      width: 64px;
      height: 64px;
      margin-right: 30px;
    }

    &-desc {
      &-item {
        margin-top: 0;
      }
    }
  }

  &__additional {
    margin-top: 20px;
    text-align: right;

    &-list {
      line-height: 1.6;
    }
  }
}
</style>
