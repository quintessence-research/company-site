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
                  A collection of general and technical articles about topics related to digital innovation,
                  system design and circularity.
                </p>
                <p class="font-normal text-xl line-height-3 md:mt-3 text-gray-800 mb-6">
                  Our blog section is currently under construction.
                </p>
                <div class="flex justify-center">
                  <i class="pi pi-cog text-6xl text-gray-400 animate-spin"></i>
                </div>
                <p class="font-normal text-lg line-height-3 mt-6 text-gray-600">
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


<script lang="ts" setup>

</script>

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