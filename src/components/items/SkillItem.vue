<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  }
})
</script>

<template>
<div class="SkillItem">
  {{ item.name }}
</div>
</template>

<style lang="scss" scoped>
.SkillItem {
  border: solid #333 1px;
  border-radius: 20px;
  width: auto;
  float: left;
  margin: 5px 2px;
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;
}
</style>
