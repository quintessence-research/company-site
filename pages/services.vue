<script lang="ts" setup>

</script>
<template>
    <div class="flex flex-col bg-white">
        <main class="max-w-screen-lg mx-auto p-4">
            <!-- <div class="surface-0 flex justify-content-center"> -->
            <div class="flex justify-center">
                <div class="w-full overflow-hidden">
                    <!-- All above this is standard to ensure content sits within bounds-->
                    <!-- About Section -->
                    <div id="about" class="grid grid-nogutter surface-section text-800">
                        <div class="col-12 p-6 text-center md:text-left flex align-items-center">
                            <section>
                                <h1 class="text-5xl font-light text-gray-900 line-height-2 mb-4">
                                    Services Offerings
                                </h1>
                                <p class="font-normal text-xl line-height-3 md:mt-3 text-gray-800">
                                    Quintessence Research operates at three distinct levels of Technology Readiness
                                    Level (TRL) expertise, guiding clients from discovery to demonstration.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 2-3 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-4xl font-bold text-gray-900 line-height-2">TRL 2-3: Discovery Phase:
                                    <div class="text-2xl font-light text-gray-800 mb-3">Understanding Emerging
                                        Technologies</div>
                                </h2>
                                <Fieldset legend="Example Scenario" class="border border-gray-300 rounded-lg p-2">

                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "A new technology (such as Digital Product Passports or Data Spaces) or
                                        regulation (for instance, the ESPR, or the GDPR) is emerging and gaining
                                        traction in the market.
                                        How does this impact your sector, company, or region?"
                                    </p>
                                </Fieldset>

                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3 p-4">
                                    In this phase, we collaborate with academic institutions and knowledge organizations
                                    (such as Research and Technology Organizations, RTOs) to drive scientific research
                                    in key and impactful areas. Our focus includes emerging topics and technologies,
                                    where we offer strategic direction for application development. Additionally, we
                                    assist in designing and developing system infrastructure and integrations for
                                    innovative technologies.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 4-5 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-4xl font-bold text-gray-900 line-height-2">TRL 4-5: Development Phase:
                                    <div class="text-2xl font-light text-gray-800 mb-3">Transforming Ideas into
                                        Real-World Applications</div>
                                </h2>

                                <Fieldset legend="Example Scenario" class="border border-gray-300 rounded-lg p-2">
                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "You’ve identified a new regulation, technology, or standard that requires
                                        integration. How can it be developed, demonstrated, and validated within your
                                        unique context?"
                                    </p>
                                </Fieldset>
                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3 p-4">
                                    Here, we partner with companies, industry consortia, and research institutes to
                                    explore standardizations and applications in specific fields. We aim to create
                                    proof-of-concept validation prototypes in relevant environments. Our services
                                    include coordinating EU research funding applications and engaging in direct project
                                    work with our partners. We also develop comprehensive whitepapers and other
                                    publications as part of this process.
                                </p>
                            </section>
                        </div>

                        <!-- TRL 6-7 Section -->
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-4xl font-bold text-gray-900 line-height-2">TRL 6-7: Demonstration Phase:
                                    <div class="text-2xl font-light text-gray-800 mb-3">Optimizing Mature Technologies
                                        for
                                        Industrial Use</div>
                                </h2>
                                <Fieldset legend="Example Scenario" class="border border-gray-300 rounded-lg p-2">
                                    <p class="font-normal text-xl line-height-3 text-gray-800 italic mt-2">
                                        "You see an upcoming regulation/technological requirement that is essential for
                                        your
                                        sustainability or economic goals. Certain solutions are already available with a
                                        significant level of maturity. How can we make this work optimally for your
                                        context?"
                                    </p>
                                </Fieldset>
                                <p class="font-normal text-xl line-height-3 text-gray-800 mt-3 p-4">
                                    At this stage, we work with companies and industry consortia to adapt mature or
                                    emerging technologies for industrial applications. This involves customized
                                    prototype deployments, migration plans, whitepapers, and contracted work with
                                    internal teams. Our goal is to define and develop projects that meet specific
                                    objectives while objectively evaluating the benefits.
                                </p>

                            </section>
                        </div>

                        <!-- <Divider /> -->
                        <Divider class="border-t border-gray-300" />
                        <div class="col-12 p-6">
                            <section>
                                <h2 class="text-4xl font-bold text-gray-900 line-height-2">Additional Services and
                                    Offerings</h2>

                                <!-- Panel for Introductory Consultations -->
                                <Panel class="p-4">
                                    <div class="text-2xl font-light text-gray-800 mb-3">Introductory Consultations</div>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Are you unsure about a particular technology or regulatory requirement? We offer
                                        introductory consultations to help you navigate the complexities of emerging
                                        trends and technologies. During these sessions, we work with you to identify
                                        your specific needs, opportunities, and challenges, ensuring you have a clear
                                        path forward.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Whether it's planning for demo deliverables, publishing scientific papers, or
                                        strategizing for future growth, we provide guidance tailored to your
                                        unique context. This could also include exploring the impact of upcoming
                                        regulations, technological developments, or new market opportunities.
                                    </p>
                                </Panel>

                                <!-- Panel for Customized Technology Introduction Presentations -->
                                <Panel class="p-4">
                                    <div class="text-2xl font-light text-gray-800 mb-3">Customized Technology
                                        Introduction Presentations</div>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Our customized technology introduction presentations are designed to demystify
                                        new technologies and their relevance to your sector or organization. We provide
                                        a comprehensive overview, including:
                                    </p>
                                    <ul class="ml-4 list-disc">
                                        <li>Legal considerations related to the technology.</li>
                                        <li>EU-level initiatives and standardization efforts.</li>
                                        <li>Industry trends and adoption rates.</li>
                                        <li>Opportunities for innovation and competitive advantage.</li>
                                    </ul>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        These sessions include exploratory discussions specific to your sector, company,
                                        or region, enabling you to better understand the implications of adopting new
                                        technologies and how they can be leveraged for growth.
                                    </p>
                                </Panel>

                                <!-- Panel for Open Projects -->
                                <Panel class="p-4">
                                    <div class="text-2xl font-light text-gray-800 mb-3">Open Projects</div>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Do you have a project proposal that falls outside our core service tiers? Or are
                                        you looking for expertise to support an ongoing project? We are open to
                                        exploring collaborative opportunities that do not fit neatly into predefined
                                        categories.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Whether it's conducting research, developing prototypes, or creating custom
                                        technology solutions, we are flexible and adaptive in our approach. We will work
                                        with you to design a tailored project proposal that aligns with your specific
                                        goals and requirements.
                                    </p>
                                    <p class="font-normal text-xl line-height-3 text-gray-800">
                                        Our aim is to add value to your project by leveraging our expertise in emerging
                                        technologies, regulatory landscapes, and innovation strategies. Reach out to us
                                        with your unique needs, and we will work together to bring your vision to life.
                                    </p>
                                </Panel>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>



<style></style>