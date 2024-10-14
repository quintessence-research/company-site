<template>
  <div class="flex flex-col bg-white">
    <main class="max-w-screen-lg mx-auto p-4">

      <article v-if="post" class="prose max-w-none">
        <h1>{{ post.title }}</h1>
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

<!-- <template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template> -->

<!-- <script setup> -->
<!-- // This template handles individual blog post rendering
// const { path } = useRoute() -->
<!-- </script> -->