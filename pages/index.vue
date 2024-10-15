<script setup lang="ts">
useHead({
    title: 'Quintessence Research - Applied Research Consultancy',
    meta: [
        { name: 'description', content: 'Quintessence Research specializes in applied research for the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Quintessence Research - Applied Research Consultancy' },
        { property: 'og:description', content: 'Quintessence Research specializes in applied research for the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Quintessence Research B.V.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Quintessence Research - Applied Research Consultancy' },
        { name: 'twitter:description', content: 'Quintessence Research specializes in applied research for the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { name: 'twitter:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [
        { rel: 'canonical', href: 'https://quintessenceresearch.com/' },
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
    <div class="flex justify-center bg-surface-0">
        <main class="max-w-screen-xl mx-auto p-4">
            <div id="home" class="overflow-hidden">
                <!-- Landing Section -->
                <div class="grid grid-cols-1 md:grid-cols-2 bg-surface-section text-gray-800">
                    <!-- Text Content -->
                    <div class="p-6 text-center md:text-left flex items-center">
                        <section>
                            <h1 class="text-5xl font-bold text-gray-900 leading-tight">
                                <span class="font-light block">Advancing and developing</span>
                                next-generation software standards
                            </h1>
                            <p class="font-normal text-2xl mt-3 text-gray-800">
                                We provide research services and technical support for industry, institutes, and
                                academia in
                                a wide TRL range.
                            </p>
                            <NuxtLink to="/about">
                                <Button label="About us"
                                    class="bg-gray-200 text-black rounded px-4 py-2 text-xl border-none mt-5 font-normal hover:bg-[#a80000] hover:text-white transition-colors" />
                            </NuxtLink>
                        </section>
                    </div>

                    <!-- Image Content -->
                    <div class="overflow-hidden">
                        <div class="relative h-full pt-[100%] overflow-hidden">
                            <NuxtImg src="/hero/hero-world.jpg" alt="Hero Image"
                                class="absolute top-0 left-0 w-full h-full object-cover" />
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-red-600 bg-opacity-20 pointer-events-none">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Expertise Section -->
                <div id="expertise" class="py-4 px-4 lg:px-8 mt-5 mx-auto max-w-7xl">
                    <div class="grid grid-cols-1 text-gray-800">
                        <!-- Divider Component -->
                        <Divider />

                        <!-- Section Title -->
                        <div class="text-center mt-8 mb-4">
                            <h1 class="text-3xl font-bold mb-2 text-gray-900">Expertise</h1>
                        </div>

                        <!-- Expertise Items -->
                        <!-- Self-sovereign Identity -->
                        <div class="p-4">
                            <div class="flex flex-col lg:flex-row items-center rounded-lg p-4 bg-gray-200">
                                <div class="w-full lg:w-1/4 p-2 flex justify-center">
                                    <NuxtImg src="/expertise/digital-identity.jpg" alt="Self-sovereign Identity"
                                        class="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div class="w-full lg:w-2/3 flex flex-col justify-center p-2">
                                    <h2 class="mb-2 text-xl font-bold text-gray-900">Self-sovereign Identity</h2>
                                    <p class="text-lg text-gray-600">
                                        Empowering individuals with control over their digital identities through a
                                        decentralized model and advanced cryptographic methods.
                                        This approach allows users to manage and share verified credentials securely,
                                        enhancing privacy and minimizing identity fraud,
                                        thus providing greater autonomy in a connected world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Digital Product Passports -->
                        <div class="p-4">
                            <div class="flex flex-col lg:flex-row items-center rounded-lg p-4 bg-gray-200">
                                <div class="w-full lg:w-1/4 p-2 flex justify-center">
                                    <NuxtImg src="/expertise/product-passport.jpg" alt="Digital Product Passports"
                                        class="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div class="w-full lg:w-2/3 flex flex-col justify-center p-2">
                                    <h2 class="mb-2 text-xl font-bold text-gray-900">Digital Product Passports</h2>
                                    <p class="text-lg text-gray-600">
                                        Decentralized system architectures detailing a product’s lifecycle at various
                                        levels, leveraging a complex and interoperable mix of technologies to ensure
                                        transparency and traceability.
                                        DPPs offer insights into a product's origin, materials, emissions, and
                                        end-of-life
                                        options, supporting informed consumer choices and promoting sustainability in
                                        supply
                                        chains.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Privacy-enhancing Technologies -->
                        <div class="p-4">
                            <div class="flex flex-col lg:flex-row items-center rounded-lg p-4 bg-gray-200">
                                <div class="w-full lg:w-1/4 p-2 flex justify-center">
                                    <NuxtImg src="/expertise/privacy-enhancing-technologies.jpg"
                                        alt="Privacy Enhancing Technologies"
                                        class="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div class="w-full lg:w-2/3 flex flex-col p-2">
                                    <h2 class="mb-2 text-xl font-bold text-gray-900">Privacy-enhancing Technologies</h2>
                                    <p class="text-lg text-gray-600">
                                        Tools, frameworks, and methodologies designed to protect personal information.
                                        They
                                        include techniques such as data pseudonymization,
                                        federated learning, and multiparty computation. These technologies balance data
                                        usage with privacy protection, safeguarding
                                        sensitive information from unauthorized access and ensuring compliance with data
                                        protection regulations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Digital Twins -->
                        <div class="p-4">
                            <div class="flex flex-col lg:flex-row items-center rounded-lg p-4 bg-gray-200">
                                <div class="w-full lg:w-1/4 p-2 flex justify-center">
                                    <NuxtImg src="/expertise/digital-twins.jpg" alt="Digital Twins"
                                        class="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div class="w-full lg:w-2/3 flex flex-col justify-center p-2">
                                    <h2 class="mb-2 text-xl font-bold text-gray-900">Digital Twins</h2>
                                    <p class="text-lg text-gray-600">
                                        Virtual representations of physical entities, typically used to refer to
                                        manufacturing equipment in Industry 4.0.
                                        They simulate real-world counterparts using data from sensors and IoT devices.
                                        This
                                        technology enables real-time monitoring,
                                        predictive maintenance, and optimization, enhancing decision-making and
                                        efficiency
                                        across various sectors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Data Sharing Technologies -->
                        <div class="p-4">
                            <div class="flex flex-col lg:flex-row items-center rounded-lg p-4 bg-gray-200">
                                <div class="w-full lg:w-1/4 p-2 flex justify-center">
                                    <NuxtImg src="/expertise/data-sharing-technologies.jpg"
                                        alt="Data Sharing Technologies" class="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div class="w-full lg:w-2/3 flex flex-col justify-center p-2">
                                    <h2 class="mb-2 text-xl font-bold text-gray-900">Data Sharing Infrastructures</h2>
                                    <p class="text-lg text-gray-600">
                                        Frameworks and system architectures for secure and efficient data exchange
                                        across
                                        diverse stakeholders. Architectures such as Data Spaces use
                                        standards and technologies to facilitate interoperability and collaboration.
                                        They
                                        support innovation in the data economy by enabling
                                        technical standards, secure transfers, legal interoperability, and common
                                        decentralized marketplaces for data providers to publish on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>
