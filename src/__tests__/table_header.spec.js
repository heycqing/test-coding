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
} from '../test-mock/mockdata.js'

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
    sortWarpper.vm.$emit('SortList', defaultSort, defaultKey)
    await sortWarpper.vm.$nextTick()
    expect(sortWarpper.emitted().SortList).toBeTruthy()
    expect(sortWarpper.emitted().SortList[0]).toEqual([defaultSort, defaultKey])
  })

  test('Test tableHeader click desc age', async () => {
    const sortWarpper = getWrapperDm()
    sortWarpper.vm.$emit('SortList', 'desc', defaultKey)
    await sortWarpper.vm.$nextTick()
    expect(sortWarpper.emitted().SortList).toBeTruthy()
    expect(sortWarpper.emitted().SortList[0]).toEqual(['desc', defaultKey])
  })

  test('Test tableHeader click emptyOrder age', async () => {
    const sortWarpper = getWrapperDm()
    sortWarpper.vm.$emit('SortList', '', defaultKey)
    await sortWarpper.vm.$nextTick()
    expect(sortWarpper.emitted().SortList).toBeTruthy()
    expect(sortWarpper.emitted().SortList[0]).toEqual(['', defaultKey])
  })

  // 找到id:asce dom 元素点击
  test('Test trigger asce click ', () => {
    const sortWarpper = getWrapperDm()
    const asceDom = sortWarpper.find('#asce')
    expect(asceDom.element.id).toBe('asce')
    asceDom.trigger('click')
  })

  // 找到id:desc dom 元素点击
  test('Test trigger desc click ', () => {
    const sortWarpper = getWrapperDm()
    const descDom = sortWarpper.find('#desc')
    expect(descDom.element.id).toBe('desc')
    descDom.trigger('click')
  })

})
