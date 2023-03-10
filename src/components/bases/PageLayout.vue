<script setup>
</script>

<template>
 <div class="PageLayout">
   <header class="PageLayout__header">
     <slot name="header" />
   </header>

   <main class="PageLayout__main">
     <slot name="main" />
   </main>

   <footer class="PageLayout__footer">
     <slot name="footer" />
   </footer>
 </div>
</template>

<style lang="scss" scoped>
.PageLayout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  &__main {
    flex: 1;
  }
}
</style>
