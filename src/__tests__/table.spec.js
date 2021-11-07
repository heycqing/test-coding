import { mount } from '@vue/test-utils'
import { TestTable } from '../table'
import {
    className,
    pageSize,
    tableArr,
    tableColumns
} from '../test-mock/mockdata.test'

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
    getWrapperDm.vm.$mounted().toBeTruthy()
    // 找到该实例 tabel-header
    getWrapperDm.findAllComponents('.fy-table').at(0).exists().toBeTruthy()
    // tableHeader组件强制更新已经触发;
    getWrapperDm.vm.$forceUpdate()
    // tableHeader组件渲染已经触发;
    getWrapperDm.vm.$destroy()
  })
})
