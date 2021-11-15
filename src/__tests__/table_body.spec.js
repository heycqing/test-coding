import { mount } from '@vue/test-utils'
import { TableBody } from '../table/table-body'
import { tableArr, tableColumns } from '../test-mock/mockdata.test'

describe('TableHeader', () => {

  // 1. 构造单元测试元素
  const getWrapperDm = options =>
    mount(TableBody, {
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
      },
      ...options,
    })

  test('Test tableBody render', () => {
    expect(() => {
    // tableBody组件渲染已经触发;
      getWrapperDm().vm.$mounted().toBeTruthy()
      // 找到该实例 tabel-header
      getWrapperDm().findAllComponents('.table-body').at(0).exists().toBeTruthy()
      // tableBody组件强制更新已经触发;
      getWrapperDm().vm.$forceUpdate()
      // tableBody组件渲染已经触发;
      getWrapperDm().vm.$destroy()
    })
  })

  test('Test 异常情况', () => {
    const getWrapperDm01 = options =>
      mount(TableBody, {
        propsData: {
          dataSource: [],
          columns: [],
        },
        ...options,
      })
    expect(getWrapperDm01().vm.$mounted())
  })

})
