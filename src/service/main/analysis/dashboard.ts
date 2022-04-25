import hyRequest from '@/service'

enum DashboardAPI {
  categoryTopData = '/goods/amount/list',
  categoryGoodsCount = 'goods/category/count',
  categoryGoodsSale = 'goods/category/sale',
  addressGoodsSale = 'goods/address/sale',
  categoryGoodsFavor = 'goods/category/favor'
}

export function getCategoryTopData() {
  return hyRequest.get({
    url: DashboardAPI.categoryTopData
  })
}
export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategorySaleCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryFavorCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
