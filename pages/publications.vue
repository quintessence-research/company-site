<script lang="ts" setup>
useHead({
    title: 'Publications - Quintessence Research',
    meta: [
        { name: 'description', content: 'Explore our research and other publications in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Publications - Quintessence Research' },
        { property: 'og:description', content: 'Explore our research and other publications in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/publications' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Quintessence Research B.V.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Publications - Quintessence Research' },
        { name: 'twitter:description', content: 'Explore our research and other publications in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { name: 'twitter:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [
        { rel: 'canonical', href: 'https://quintessenceresearch.com/publications' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Quintessence Research",
                "url": "https://quintessenceresearch.com/",
                "logo": "https://quintessenceresearch.com/logos/qr_logo.png",
                "description": "Research Consultancy specializing in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@quintessenceresearch.com",
                    "contactType": "Contact Point"
                }
            }),
        },
    ],
});

const publications = ref([
    {
        title: "Position Paper on Trusted Digital Product Passports (tDPPs)",
        description: "This position paper outlines the strategic vision for Trusted Digital Product Passports (tDPPs) as tools to address sustainability challenges across complex supply chains. Built on open, decentralized architectures with digital identities at their core, tDPPs aim to balance transparency with data protection while establishing implementation horizons through 2030.",
        date: "December 2024",
        url: "https://fides.community/trusted-digital-product-passports"
    }
]);

const openPublication = (url: string | URL | undefined) => {
    window.open(url, '_blank');
};


</script>
<template>
    <div class="flex flex-col bg-white">
        <main class="max-w-screen-lg mx-auto p-4">
            <div class="flex justify-center">
                <div class="w-full overflow-hidden">
                    <div id="publications" class="grid grid-nogutter surface-section text-800">
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center justify-content-center">
                            <section class="w-full">
                                <h1 class="text-5xl font-light text-gray-900 line-height-2 mb-4">
                                    Publications
                                </h1>
                                <p class="font-normal text-xl line-height-3 md:mt-3 text-gray-800 mb-6">
                                    A chronological list of publications, projects and press releases related to the
                                    ongoing work of the company.
                                </p>

                                <div class="grid grid-cols-1 gap-6 mt-4">
                                    <div v-for="(pub, index) in publications" :key="index"
                                        class="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
                                        <h3 class="text-xl font-medium text-gray-800 mb-2">{{ pub.title }}</h3>
                                        <p class="text-gray-600 mb-3">{{ pub.description }}</p>
                                        <div class="flex justify-between items-center">
                                            <span class="text-sm text-gray-500">{{ pub.date }}</span>
                                            <Button icon="pi pi-external-link" class="p-button-text p-button-sm"
                                                :style="{ gap: '0.5rem' }" @click="openPublication(pub.url)"
                                                label="Read More" />
                                            <!-- <Button icon="pi pi-external-link" class="p-button-text p-button-sm"
                                                @click="openPublication(pub.url)" label="Read More" /> -->
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.animate-spin {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
