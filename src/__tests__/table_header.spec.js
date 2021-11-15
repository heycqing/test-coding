/* eslint-disable comma-dangle */
/* eslint-disable indent */
import { mount } from '@vue/test-utils'
import { TestTable } from '../table/index'
import { TableHeader } from '../table/table-header'
import {
  className,
  defaultKey,
  defaultSort,
  pageSize,
  tableArr,
  tableColumns
} from '../test-mock/mockdata.test'

describe('TableHeader', () => {
  // 1. 构造单元测试元素
  const getWrapperDm = options =>
    mount(TableHeader, {
      propsData: {
        columns: tableColumns,
        dataSource: tableArr,
        ...options
      }
    })

  const TestTableWrapperDm = options =>
    mount(TestTable, {
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
        pageSize,
        className,
      },
      ...options,
    })

  // 2. 单侧UI界面
  // tip: 可以通过实例来获取内部的方法来触发
  // 2.1 单侧UI界面渲染 - exits data or not
  // 2.2 单侧UI界面功能函数
  test('Test tableHeader render', () => {
    expect(() => {
      // tableHeader组件渲染已经触发;
      getWrapperDm().vm.$mounted().toBeTruthy()
      // 找到该实例 tabel-header
      getWrapperDm()
        .findAllComponents('.tabel-header')
        .at(0)
        .exists()
        .toBeTruthy()
      // tableHeader组件强制更新已经触发;
      getWrapperDm().vm.$forceUpdate()
      // tableHeader组件渲染已经触发;
      getWrapperDm().vm.$destroy()
    })
  })

  // 3. 单侧tableHeader组件功能函数
  // 3.1 排序函数 - 排序 and 倒序
  test('Test tableHeader click asce age', async () => {
    const sortWarpper = getWrapperDm()
    // sortWarpper.vm.$emit('SortList')
    console.log('---------------------- ', sortWarpper.vm.clickSort)
    sortWarpper.vm.$emit('SortList', tableArr, defaultSort, defaultKey)

    console.log('TestTableWrapperDm ', TestTableWrapperDm().vm.activeKey)

    expect(TestTableWrapperDm().vm.activeKey).toBe(defaultKey)
    expect(TestTableWrapperDm().vm.sortKey).toBe(defaultSort)
  })

  test('Test tableHeader click desc age', () => {
    expect(async () => {
      const sortWarpper = getWrapperDm()
      sortWarpper.vm.$emit('SortList', tableArr, 'desc', 'age')
    })
  })

  test('Test tableHeader click desc name', () => {
    expect(async () => {
      const sortWarpper = getWrapperDm()
      sortWarpper.vm.$emit('SortList', tableArr, 'desc', 'name')
    })
  })

  test('Test tableHeader click asce sex', () => {
    expect(async () => {
      const sortWarpper = getWrapperDm()
      sortWarpper.vm.$emit('SortList', tableArr, 'asce', 'sex')
    })
  })

})
