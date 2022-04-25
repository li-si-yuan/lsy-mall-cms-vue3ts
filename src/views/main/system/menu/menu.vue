<template>
  <div class="menu">
    <page-search></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search/src/page-search.vue'
import pageContent from '@/components/page-content/src/page-content.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'hy-menu',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      usePageSearch,
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
