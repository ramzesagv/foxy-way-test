<script setup>
import { ref } from 'vue';
import PageLayout from "../components/bases/PageLayout.vue";
import Home from "../components/sections/Home.vue";
import Advantages from "../components/sections/Advantages.vue";
import Advice from "../components/sections/Advice.vue";
import Skills from "../components/sections/Skills.vue";
import Consultation from "../components/sections/Consultation.vue";
import Lessons from "../components/sections/Lessons.vue";
import Footer from "../components/sections/Footer.vue";
import Modal from "../components/ui/Modal.vue";

const isVisibleModal = ref(false);

const changeStateModal = () => isVisibleModal.value = !isVisibleModal.value;
</script>

<template>
  <PageLayout class="Main">
    <template #header>
      <Home @action="changeStateModal"/>
    </template>

    <template #main>
      <Advantages />
      <Advice @action="changeStateModal"/>
      <Skills />
      <Consultation @action="changeStateModal"/>
      <Lessons />
    </template>

    <template #footer>
      <Footer />
    </template>
  </PageLayout>

    <Modal v-model="isVisibleModal" />
</template>
