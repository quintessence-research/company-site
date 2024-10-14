<template>
  <div class="flex flex-col min-h-screen">
    <Header ref="headerRef" />
    <Transition name="fade">
      <div v-if="showOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>
    </Transition>
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import '~/assets/theme.css';

const headerRef = ref(null);
const showOverlay = computed(() => headerRef.value?.isMenuVisible);

const closeMenu = () => {
  if (headerRef.value) {
    headerRef.value.isMenuVisible = false;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>