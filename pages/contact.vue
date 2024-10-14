<script setup>
import { useHead } from '@unhead/vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';

useHead({
    title: 'Contact Us - Quintessence Research',
    meta: [
        { name: 'description', content: 'Contact Quintessence Research for inquiries on applied research consultancy services in the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:title', content: 'Contact Us - Quintessence Research' },
        { property: 'og:description', content: 'Contact Quintessence Research for inquiries on applied research consultancy services in the Circular Economy, Digital Product Passport, Digital Identities, Digital Twins, and Data Sharing.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://quintessenceresearch.com/contact' },
        { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    ],
    link: [{ rel: 'canonical', href: 'https://quintessenceresearch.com/contact' }],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact Us - Quintessence Research",
                "url": "https://quintessenceresearch.com/contact",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@quintessenceresearch.com",
                    "contactType": "Contact Point"
                }
            }),
        },
    ],
});

onMounted(() => {
    const map = L.map('map').setView([51.4416, 5.4697], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.marker([51.4416, 5.4697], { icon: customIcon }).addTo(map)
        .bindPopup('Quintessence Research B.V.')
        .openPopup();
});
</script>

<template>
    <div class="flex flex-col bg-white">
        <main class="flex-grow max-w-screen-lg mx-auto p-4">
            <div class="flex justify-center">
                <div class="w-full overflow-hidden">
                    <div id="contact" class="grid grid-cols-1">
                        <div class="col-span-1 p-6 text-center">
                            <section class="w-full max-w-screen-md mx-auto">
                                <h1 class="text-5xl font-light text-gray-900 leading-tight mb-4">
                                    Contact
                                </h1>
                                <p class="text-xl text-gray-800 mb-4">
                                    For inquiries, collaborations, or more information, feel free to reach out to us. We
                                    are always open to discussing how we can work together to bridge the gap between
                                    fundamental research and industrial applications.
                                </p>
                            </section>
                        </div>

                        <div class="col-span-1 p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-md mx-auto">
                                <section class="text-center md:text-left">
                                    <h2 class="text-2xl font-bold text-gray-900 mb-3">
                                        Address
                                    </h2>
                                    <p class="text-xl text-gray-800 mb-4">
                                        Quintessence Research B.V.<br />
                                        5612HZ Eindhoven, Netherlands
                                    </p>
                                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Email</h2>
                                    <p class="text-xl text-gray-800 mb-4">
                                        <a href="mailto:contact@quintessenceresearch.com"
                                            class="text-blue-500 hover:underline">contact@quintessenceresearch.com</a>
                                    </p>

                                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Social</h2>
                                    <p class="text-xl text-gray-800 flex items-center justify-center md:justify-start">
                                        <a href="https://linkedin.com/company/quintessence-research" target="_blank"
                                            class="mr-4 text-gray-500 hover:text-gray-700">
                                            <i class="pi pi-linkedin text-3xl"></i>
                                        </a>
                                        <a href="https://github.com/quintessence-research" target="_blank"
                                            class="text-gray-500 hover:text-gray-700">
                                            <i class="pi pi-github text-3xl"></i>
                                        </a>
                                    </p>
                                </section>

                                <div class="relative h-96 mt-8 md:mt-0">
                                    <div id="map" class="absolute inset-0 bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>