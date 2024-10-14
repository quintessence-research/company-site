<template>
  <div class="mt-6">
    <DataTable :value="filteredPosts" :rows="4" :paginator="true" dataKey="_path" stateStorage="session"
      stateKey="blog-list-state" class="border-none" v-model:filters="filters" filterDisplay="row"
      :globalFilterFields="['title', 'excerpt']">
      <template #header>
        <div class="flex flex-wrap gap-4 mb-4">
          <span class="p-input-icon-left flex-grow">
            <i class="pi pi-search" />
            <InputText v-model="filters.global.value" placeholder="Search posts..." class="w-full" />
          </span>
          <MultiSelect v-model="selectedTags" :options="availableTags" placeholder="Filter by tags"
            class="w-full md:w-64" :pt="{
              root: 'border border-gray-300 rounded-md',
              trigger: 'bg-gray-50',
              panel: 'bg-white border border-gray-200 shadow-lg mt-1'
            }" />
        </div>
      </template>

      <template #empty>
        <Message severity="info" :closable="false">
          <span class="text-lg">No posts found. Try adjusting your filters.</span>
        </Message>
      </template>

      <Column :exportable="false" style="min-width: 100%">
        <template #body="{ data: article }">
          <ContentRenderer :value="article" excerpt>
            <Card class="border-none shadow-none bg-transparent">
              <template #header>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-500">
                    {{ formatDate(article.date) }}
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <Chip v-for="tag in article.tags" :key="tag" :label="tag"
                      class="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full" />
                  </div>
                </div>
              </template>
              <template #title>
                <nuxt-link :to="article._path" class="text-2xl font-bold hover:text-primary-600">
                  {{ article.title }}
                </nuxt-link>
              </template>
              <template #content>
                <ContentRendererMarkdown :value="article" excerpt />
              </template>
              <template #footer>
                <div class="flex justify-end">
                  <Button :link="true" :to="article._path" label="Read More" icon="pi pi-arrow-right" iconPos="right" />
                </div>
              </template>
            </Card>
          </ContentRenderer>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  _path: string;
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
  body: object;
}

interface DataTableFilters {
  global: {
    value: string | null;
    matchMode: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'notIn';
  };
}

const selectedTags = ref<string[]>([])
const filters = ref<DataTableFilters>({
  global: { value: null, matchMode: 'contains' },
})

const { data: articles } = await useAsyncData('blog-list', () =>
  queryContent<BlogPost>('blog')
    .sort({ date: -1 })
    .find()
)

const availableTags = computed(() => {
  const tags = new Set<string>()
  articles.value?.forEach(article => {
    article.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredPosts = computed(() => {
  if (!articles.value) return []

  return articles.value.filter(article =>
    selectedTags.value.length === 0 ||
    selectedTags.value.every(tag => article.tags?.includes(tag))
  )
})

// Date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>