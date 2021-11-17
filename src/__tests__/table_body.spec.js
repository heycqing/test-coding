import { mount } from '@vue/test-utils'
import { TableBody } from '../table/table-body'
import { tableArr, tableColumns } from '../test-mock/mockdata.js'

describe('TableHeader', () => {

  // 1. 构造单元测试元素
  const getWrapperDm = options =>
    mount(TableBody, {
      propsData: {
        data: tableArr,
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

})
