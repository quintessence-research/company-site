<template>
  <div class="flex flex-col bg-white">
    <main class="max-w-screen-lg mx-auto p-4">

      <article v-if="post" class="prose max-w-none">
        <h1 class="text-5xl font-light text-gray-900 line-height-2 mb-4">{{ post.title }}</h1>
        <p class="text-gray-600">{{ new Date(post.date).toLocaleDateString() }}</p>
        <ContentRenderer :value="post" />
      </article>
    </main>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne()
)
</script>