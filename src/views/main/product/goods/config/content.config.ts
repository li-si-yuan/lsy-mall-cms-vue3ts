export const contentTableConfig = {
  title: `商品列表`,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '60', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '60', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'inventoryCount', label: '库存数量', minWidth: '60' },
    { prop: 'saleCount', label: '销售数量', minWidth: '60' },
    { prop: 'favorCount', label: '喜欢人数', minWidth: '60' },
    { prop: 'address', label: '发货地址', minWidth: '60' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSeleteColumn: true
}
