<template>
  <div class="page-search">
    <hy-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick">
            重置
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    HyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],

  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  color: red;
  // text-align: left;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
