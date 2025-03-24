<template>
    <footer class="bg-gray-200 py-4 w-full mt-auto">
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="flex flex-col lg:flex-row justify-between items-center mb-8">
                <!-- Logo -->
                <NuxtLink to="/" class="mb-4 lg:mb-0">
                    <NuxtImg format="webp" :src="logoUrl" alt="company logo" class="h-16 lg:h-20" />
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
                        <NuxtLink to="/circular-data-suite" class="block text-lg text-gray-700 hover:text-gray-500">
                            Circular Data Suite <span
                                class="ml-2 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">
                                New
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/imprint" class="block text-lg text-gray-700 hover:text-gray-500">Imprint
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Copyright and Information -->
            <div class="text-center text-gray-700 text-sm">
                &copy; {{ new Date().getFullYear() }} Quintessence Research B.V.
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
// Function to format the current date
const formatDate = (date: Date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined);
};

// Current date
const currentDate = ref(formatDate(new Date()));

// Computed logo URL
const logoUrl = '/logos/qr_logo.png';
</script>

<style scoped>
/* No additional CSS required due to Tailwind utility classes */
</style>