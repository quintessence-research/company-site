<template>
  <div class="mt-6">
    <!-- Search and Filter Bar -->
    <div class="flex flex-wrap gap-4 mb-6">
      <span class="p-input-icon-left flex-grow">
        <span class="relative block">
          <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <InputText v-model="searchQuery" placeholder="Search posts..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
        </span>
        <!-- <i class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Search posts..." class="w-full" /> -->
      </span>
      <!-- <MultiSelect v-model="selectedTags" :options="availableTags" placeholder="Filter by tags" class="md:w-64" /> -->
      <MultiSelect v-model="selectedTags" :options="availableTags" placeholder="Filter by tags" class="w-full md:w-64"
        :pt="{
          root: 'border border-gray-300 rounded-md',
          input: 'p-2',
          trigger: 'p-2',
          token: 'bg-primary-100 text-primary-700 rounded-full px-2 py-1 mr-1',
          panel: 'bg-black border border-gray-200 rounded-md shadow-lg mt-1',
          item: ({ context }) => ({
            class: `p-2 cursor-pointer ${context.focused ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`
          })
        }" />
    </div>

    <!-- Blog Posts Grid -->
    <div v-if="filteredPosts.length" class="grid grid-cols-1 gap-6">
      <Card v-for="article in paginatedPosts" :key="article._path"
        class="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200" :pt="{
          root: 'bg-white',
          title: 'text-2xl font-bold mb-2',
          content: 'prose max-w-none',
          footer: 'border-t border-gray-100 pt-4 mt-4'
        }">
        <template #header>
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-500">
              {{ new Date(article.date).toLocaleDateString() }}
            </span>
            <div class="flex flex-wrap gap-2">
              <Chip v-for="tag in article.tags" :key="tag" :label="tag"
                class="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full" />
            </div>
          </div>
        </template>
        <template #title>
          <nuxt-link :to="article._path" class="text-2xl font-bold hover:text-primary">
            {{ article.title }}
          </nuxt-link>
        </template>
        <template #content>
          <p class="text-gray-600">{{ article.excerpt }}</p>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <!-- <Button :link="true" label="Read More" icon="pi pi-arrow-right" iconPos="right"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold" :pt="{
                root: 'px-4 py-2',
                icon: 'ml-2'
              }" /> -->
            <Button :link="true" :to="article._path" label="Read More" icon="pi pi-arrow-right" iconPos="right" />
          </div>
        </template>
      </Card>
      <!-- <Card v-for="article in filteredPosts" :key="article._path">
        <template #header>
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-500">
              {{ new Date(article.date).toLocaleDateString() }}
            </span>
            <div class="flex gap-2">
              <Chip v-for="tag in article.tags" :key="tag" :label="tag" class="text-xs" />
            </div>
          </div>
        </template>
        <template #title>
          <nuxt-link :to="article._path" class="text-2xl font-bold hover:text-primary">
            {{ article.title }}
          </nuxt-link>
        </template>
        <template #content>
          <p class="text-gray-600">{{ article.excerpt }}</p>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <Button :link="true" :to="article._path" label="Read More" icon="pi pi-arrow-right" iconPos="right" />
          </div>
        </template>
      </Card> -->
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-8">
      <Message severity="info" :closable="false">
        <span class="text-lg">No posts found. Try adjusting your filters.</span>
      </Message>
    </div>

    <!-- Pagination -->
    <div v-if="filteredPosts.length" class="flex justify-center mt-6">
      <Paginator v-model:first="first" :rows="pageSize" :total-records="filteredPosts.length" @page="onPageChange"
        class="flex justify-center mt-6" :pt="{
          root: 'flex gap-2',
          pageButton: ({ context }) => ({
            class: `px-3 py-2 rounded-md ${context.active
              ? 'bg-primary-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
              }`
          }),
          firstPageButton: 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100',
          lastPageButton: 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100',
          prevPageButton: 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100',
          nextPageButton: 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100'
        }" />
      <!-- <Paginator v-model:first="first" :rows="pageSize" :total-records="filteredPosts.length" @page="onPageChange" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  _path: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
}

// State
const searchQuery = ref('')
const selectedTags = ref<string[]>([])
const first = ref(0)
const pageSize = ref(5)

// Fetch blog posts
const { data: articles } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

// Computed properties
const availableTags = computed(() => {
  const tags = new Set<string>()
  articles.value?.forEach(article => {
    article.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredPosts = computed(() => {
  if (!articles.value) return []

  return articles.value.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesTags = selectedTags.value.length === 0 ||
      selectedTags.value.every(tag => article.tags?.includes(tag))

    return matchesSearch && matchesTags
  })
})

const paginatedPosts = computed(() => {
  const start = first.value
  const end = start + pageSize.value
  return filteredPosts.value.slice(start, end)
})

// Methods
const onPageChange = (event: { first: number, rows: number }) => {
  first.value = event.first
}
</script>


<!-- <template>
  <div class="mt-6">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <nuxt-link :to="article._path" class="block mb-8">
          <h2 class="text-3xl font-bold mb-2">{{ article.title }}</h2>
          <p class="text-gray-600 mb-2">{{ article.excerpt }}</p>
          <div class="text-gray-600 mb-2 prose">
            <ContentRenderer :value="article" :excerpt="true" />
          </div>
          <p class="text-sm text-gray-500">
            {{ new Date(article.date).toLocaleDateString() }}
          </p>
        </nuxt-link>
      </div>
    </ContentList>
  </div>
</template>
<script lang="ts" setup>

</script>

<style></style> -->
