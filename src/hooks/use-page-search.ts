import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const hanleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const hanleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, hanleResetClick, hanleQueryClick]
}
