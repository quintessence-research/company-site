<template>
    <Toast />
    <footer class="bg-gray-200 py-8 w-full mt-auto">
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="flex flex-col lg:flex-row justify-between items-center mb-8">
                <!-- Logo -->
                <NuxtLink to="/" class="mb-4 lg:mb-0">
                    <!-- <img :src="logoUrl" alt="company logo" class="h-12 lg:h-20" /> -->
                    <img :src="logoUrl" alt="company logo" class="h-16 lg:h-20" />
                </NuxtLink>


                <!-- Company Links -->
                <div
                    class="flex flex-col lg:flex-row text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-6 lg:mr-10">
                    <div>
                        <h4 class="font-medium text-2xl text-gray-900 mb-3">Company</h4>
                        <NuxtLink to="/about" class="block text-lg text-gray-700 hover:text-gray-500">About</NuxtLink>
                        <NuxtLink to="/services" class="block text-lg text-gray-700 hover:text-gray-500">Services
                        </NuxtLink>
                        <NuxtLink to="/publications" class="block text-lg text-gray-700 hover:text-gray-500">
                            Publications</NuxtLink>
                        <NuxtLink to="/blog" class="block text-lg text-gray-700 hover:text-gray-500">Blog</NuxtLink>
                        <NuxtLink to="/contact" class="block text-lg text-gray-700 hover:text-gray-500">Contact
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Copyright and Information -->
            <div class="text-center text-gray-700 text-sm">
                &copy; {{ new Date().getFullYear() }} Quintessence Research B.V. All rights reserved.
                <br />
                Site last updated on {{ currentDate }}.
                <br />
                Adapted from the <a href="https://github.com/primefaces/sakai-vue" target="_blank" rel="noreferrer"
                    class="text-blue-600 hover:underline">Sakai PrimeVue</a> template.
                Images sourced from <a href="https://www.freepik.com" target="_blank" rel="noreferrer"
                    class="text-blue-600 hover:underline">FreePik</a>.
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';

// PrimeVue Toast
const toast = useToast();

// Function to format the current date
const formatDate = (date: Date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined);
};

// Current date
const currentDate = ref(formatDate(new Date()));

// Show toast for "under construction" message
const showInfoHeader = () => {
    toast.add({
        severity: 'info',
        summary: 'Coming soon!',
        detail: 'Parts of the website are still under construction. Check back soon.',
        life: 3000,
    });
};

// Computed logo URL
const logoUrl = computed(() => 'logos/qr_logo.png');
</script>

<style scoped>
/* No additional CSS required due to Tailwind utility classes */
</style>