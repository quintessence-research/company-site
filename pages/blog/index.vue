<script lang="ts" setup>
useHead({
    title: 'Blog - Quintessence Research',
    meta: [
        { name: 'description', content: 'Explore our blog posts about topics in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Blog - Quintessence Research' },
        { property: 'og:description', content: 'Explore our blog posts about topics in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/blog' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Quintessence Research B.V.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Blog - Quintessence Research' },
        { name: 'twitter:description', content: 'Explore our blog posts about topics in the Circular Economy, Digital Product Passports, Digital Identities, Digital Twins, and Data Sharing.' },
        { name: 'twitter:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [
        { rel: 'canonical', href: 'https://quintessenceresearch.com/blog' },
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
</script>

<template>
    <div class="flex flex-col bg-white">
        <main class="max-w-screen-lg mx-auto p-4">
            <div class="flex justify-center">
                <div class="w-full overflow-hidden">
                    <!-- <div class="grid grid-cols-1 gap-6 text-gray-800"> -->
                    <div class="grid grid-nogutter surface-section text-800">

                        <!-- <div class="p-6 text-center md:text-left"> -->
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center justify-content-center">
                            <section>

                                <h1 class="text-5xl font-light text-gray-900 line-height-2 mb-4">
                                    Blog
                                </h1>

                                <p class="font-normal text-xl line-height-3 md:mt-3 text-gray-800">
                                    A collection of general and technical articles about topics related to digital
                                    innovation,
                                    system design and circularity.
                                </p>
                                <p class="font-normal text-xl text-center line-height-3 md:mt-3 text-gray-800 mb-6">
                                    Our blog section is currently under construction.
                                </p>
                                <div class="flex justify-center">
                                    <i class="pi pi-cog text-6xl text-gray-400 animate-spin"></i>
                                </div>
                                <p class="font-normal text-lg text-center line-height-3 mt-6 text-gray-600">
                                    Please check back soon for updates. We appreciate your patience!
                                </p>
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