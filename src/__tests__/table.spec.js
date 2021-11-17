/* eslint-disable comma-dangle */
/* eslint-disable indent */
import { mount } from '@vue/test-utils'
import { TestTable } from '../table'
import {
  className,
  defaultKey,
  defaultSort,
  pageSize, tableArr, tableColumns
} from '../test-mock/mockdata.js'

describe('Table', () => {
  // 1. 构造单元测试元素
  const getWrapperDm = options =>
    mount(TestTable, {
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
        pageSize,
        className,
      },
      ...options,
    })

  test('Test Table render', () => {
    expect(() => {
      // tableHeader组件渲染已经触发;
      getWrapperDm().vm.$mounted().toBeTruthy()
      // 找到该实例 tabel-header
      getWrapperDm().findAllComponents('.fy-table').at(0).exists().toBeTruthy()
      // tableHeader组件强制更新已经触发;
      getWrapperDm().vm.$forceUpdate()
      // tableHeader组件渲染已经触发;
      getWrapperDm().vm.$destroy()
    })
  })

  test('Test setSortSourceData方法', () => {
    const wapper = getWrapperDm()
    wapper.vm.setSortSourceData(defaultSort, defaultKey)
    expect(wapper.vm.sortActiveKey).toBe(defaultKey)
    expect(wapper.vm.sortActiveOrder).toBe(defaultSort)
  })

  test('Test changeOriginList方法', () => {
    const wapper = getWrapperDm()
    wapper.vm.changeOriginList(2)
    expect(wapper.vm.pageinationIndex).toBe(2)
  })

  test('Test sortActiveOrder value 变成 asce', async () => {
    const wapper = getWrapperDm()
    // wapper.vm.changeOriginList(2)
    await wapper.setData({ sortActiveOrder: 'desc' })
    expect(wapper.vm.sortActiveOrder).toBe('desc')
  })

  test('Test sortActiveOrder value 变成 空', async () => {
    const wapper = getWrapperDm()
    // wapper.vm.changeOriginList(2)
    await wapper.setData({ sortActiveOrder: '' })
    expect(wapper.vm.sortActiveOrder).toBe('')
  })

})
