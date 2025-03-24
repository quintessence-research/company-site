<script lang="ts" setup>
useHead({
  title: 'Circular Data Suite - Quintessence Research',
  meta: [
    { name: 'description', content: 'Circular Data Suite is a upcoming comprehensive open-source software platform focused on enabling Digital Product Passports for the Circular Economy.' },
    { property: 'og:title', content: 'Quintessence Research - Applied Research Consultancy' },
    { property: 'og:description', content: 'Circular Data Suite is a upcoming comprehensive open-source software platform focused on enabling Digital Product Passports for the Circular Economy.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://quintessenceresearch.com/circular-data-suite' },
    { property: 'og:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'Quintessence Research B.V.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Circular Data Suite - Quintessence Research' },
    { name: 'twitter:description', content: 'Circular Data Suite is a upcoming comprehensive open-source software platform focused on enabling Digital Product Passports for the Circular Economy.' },
    { name: 'twitter:image', content: 'https://quintessenceresearch.com/logos/qr_icon.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://quintessenceresearch.com/circular-data-suite' },
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CircularDataSuitePage",
        "name": "Circular Data Suite - Quintessence Research",
        "url": "https://quintessenceresearch.com/circular-data-suite",
        "description": "Circular Data Suite is a upcoming comprehensive open-source software platform focused on enabling Digital Product Passports for the Circular Economy.",
      }),
    },
  ],
});

</script>
<template>
  <div>
    <div class="flex flex-col bg-white">
      <main class="max-w-screen-lg mx-auto p-4">
        <div class="flex justify-center">
          <div id="about" class="w-full overflow-hidden">
            <div class="grid grid-cols-1 gap-6 text-gray-800">
              <div class="p-6 text-center md:text-left">
                <section>
                  <h1 class="text-5xl font-bold">
                    Circular Data Suite
                  </h1>
                  <p class="font-normal text-xl mt-4">
                    Circular Data Suite is an upcoming open-source, modular, research-driven digital infrastructure
                    platform designed to enable Digital Product Passports for the circular economy by streamlining data
                    flows.
                    It aims to enable organizations to harness, integrate, and share data efficiently while maintaining
                    control and compliance with evolving regulations.
                  </p>
                  <!-- Divider -->
                  <div class="w-full border-t border-gray-300 my-8"></div>

                  <!-- Principles Section -->
                  <h2 class="text-3xl font-bold text-gray-900 mb-6">Principles of Circular Data Suite</h2>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Panel class="border border-gray-300 rounded-lg p-4 shadow-md">
                      <template #header>
                        <span class="text-xl font-semibold text-gray-900">Digital Sovereignty</span>
                      </template>
                      <p class="text-gray-700">
                        Users maintain full control over their data, with secure and transparent access management.
                      </p>
                    </Panel>

                    <Panel class="border border-gray-300 rounded-lg p-4 shadow-md">
                      <template #header>
                        <span class="text-xl font-semibold text-gray-900">Data Portability</span>
                      </template>
                      <p class="text-gray-700">
                        Seamless data mobility across platforms, preventing lock-in and ensuring long-term usability.
                      </p>
                    </Panel>

                    <Panel class="border border-gray-300 rounded-lg p-4 shadow-md">
                      <template #header>
                        <span class="text-xl font-semibold text-gray-900">Cross-platform Interoperability</span>
                      </template>
                      <p class="text-gray-700">
                        Designed to integrate with diverse systems, fostering compatibility across domain-specific
                        platforms and services.
                      </p>
                    </Panel>

                    <Panel class="border border-gray-300 rounded-lg p-4 shadow-md">
                      <template #header>
                        <span class="text-xl font-semibold text-gray-900">Comprehensive cross-domain support</span>
                      </template>
                      <p class="text-gray-700">
                        A holistic approach to Product Data management that enables harmonization and visibility across
                        domains in
                        fascinating new ways!
                      </p>
                    </Panel>
                  </div>
                  <!-- Divider -->
                  <div class="w-full border-t border-gray-300 my-8"></div>
                  <p class="font-normal text-xl mt-4">
                    Our approach is deeply rooted in research methodologies and will be shaped by stakeholder and
                    community feedback,
                    ensuring solutions
                    that align with
                    real-world needs and evolving domain challenges. Keep watching this space and official announcements
                    for updates!
                  </p>

                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style></style>