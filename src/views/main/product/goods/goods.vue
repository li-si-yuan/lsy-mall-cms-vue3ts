<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="hanleResetClick"
      @queryBtnClick="hanleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </page-content>
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
  name: 'goods',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    const [pageContentRef, hanleResetClick, hanleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      hanleResetClick,
      hanleQueryClick
    }
  }
})
</script>

<style scoped></style>
