<script setup>
import { computed } from "vue";

const props = defineProps({
  plain: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => ([
  { 'Button--plain': props.plain }
]))
</script>

<template>
  <button
    class="Button"
    :class="buttonClasses"
    @click="emit('click')"
  >
    <span class="Button__content">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.Button {
  $this: &;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  transition: .2s;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #db545a;
  padding: 10px 30px;
  border: 0 none transparent;

  &--plain {
    border: 2px solid #fff;
    background: transparent;

    &:hover, &:focus {
      background-color: #000;
      border-color: #000;
    }
  }

  &:not(#{$this}--plain) {
    &#{$this} {
      &:hover, &:focus {
        background-color: #d63b42;
      }
    }
  }

  +#{$this} {
    margin-left: 10px;
  }

  &__content {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
  }
}
</style>
