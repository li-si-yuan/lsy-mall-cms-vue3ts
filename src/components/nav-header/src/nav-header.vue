<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <div class="user-info">
        <i class="el-icon-chat-dot-round"></i>
        <i class="el-icon-collection-tag"></i>
        <i class="el-icon-bell"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="30">user</el-avatar>
            <span>{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                icon="el-icon-circle-close"
                @click="handleExitClick"
              >
                退出登录
              </el-dropdown-item>
              <el-dropdown-item divided icon="el-icon-sunny">
                用户信息
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-coin">系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

import localCache from '@/utils/cache'
import router from '@/router'

export default defineComponent({
  components: {
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const store = useStore()

    const name = computed(() => store.state.login.userInfo.name)

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      isFold,
      name,
      breadcrumbs,
      handleFoldClick,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
  .user-info {
    display: flex;
    align-items: center;
    i {
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
