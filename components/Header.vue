<template>
    <header class="bg-[#a80000] text-white p-6 relative z-50">
        <div class="flex justify-between items-center max-w-screen-xl mx-auto">
            <NuxtLink to="/">
                <NuxtImg format="webp" :src="logoUrl" alt="Logo" class="h-16 w-auto lg:h-20 mb-0" />
            </NuxtLink>

            <nav class="hidden lg:flex space-x-8 text-lg">
                <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:text-gray-300">
                    {{ link.text }}
                    <span v-if="link.badge"
                        class="ml-2 px-2 py-1 text-xs font-bold text-white bg-green-600 rounded-full">
                        {{ link.badge }}
                    </span>
                </NuxtLink>
            </nav>

            <a v-ripple class="lg:hidden ml-auto text-4xl text-white" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </a>
        </div>

        <Transition name="slide-fade">
            <div v-if="isMenuVisible" class="lg:hidden bg-[#a80000] shadow-md p-4 absolute w-full left-0 top-full z-50">
                <nav class="flex flex-col space-y-4">
                    <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:text-gray-300"
                        @click="closeMenu">
                        {{ link.text }}
                        <span v-if="link.badge"
                            class="ml-2 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">
                            {{ link.badge }}
                        </span>
                    </NuxtLink>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script lang="ts" setup>
const isMenuVisible = ref(false);
const logoUrl = '/logos/qr_logo_white.png';

const links = [
    { to: '/about', text: 'About' },
    { to: '/services', text: 'Services' },
    { to: '/publications', text: 'Publications' },
    { to: '/circular-data-suite', text: 'Circular Data Suite', badge: 'New' }, // Added badge
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact' },
];

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

const closeMenu = () => {
    isMenuVisible.value = false;
};

// Expose isMenuVisible to parent components
defineExpose({ isMenuVisible });
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.badge {
    background-color: #22c55e;
    /* Green */
    color: white;
    font-size: 0.75rem;
    /* text-xs */
    font-weight: bold;
    padding: 4px 8px;
    /* Good internal margins */
    border-radius: 9999px;
    /* Fully rounded */
    line-height: 1;
    margin-left: 8px;
    /* Space from text */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    min-height: 20px;
}
</style>