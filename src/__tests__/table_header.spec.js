/* eslint-disable comma-dangle */
/* eslint-disable indent */
import { mount } from '@vue/test-utils'
import { TableHeader } from '../table/table-header'
import {
  defaultKey,
  defaultSort,
  tableArr,
  tableColumns
} from '../test-mock/mockdata.test'

// 构造中间变量函数
const testHandleSetSourceData = (
  testTableData,
  testDefaultSort,
  testDefaultKey
) => {
  console.log(
    'testTableData, testDefaultSort, testDefaultKey ',
    testTableData,
    testDefaultSort,
    testDefaultKey
  )
}

// 1. 构造单元测试元素
const getWrapperDm = options =>
  mount(TableHeader, {
    propsData: {
      sort: true, // 是否排序
      defaultSort, // 默认的排序 升序降序
      key: defaultKey,
      columns: tableColumns,
      dataSource: tableArr,
      handleSetSourceData: testHandleSetSourceData,
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
    getWrapperDm.vm.$mounted().toBeTruthy()
    // 找到该实例 tabel-header
    getWrapperDm.findAllComponents('.tabel-header').at(0).exists().toBeTruthy()
    // tableHeader组件强制更新已经触发;
    getWrapperDm.vm.$forceUpdate()
    // tableHeader组件渲染已经触发;
    getWrapperDm.vm.$destroy()
  })
})

// 3. 单侧tableHeader组件功能函数
// 3.1 排序函数 - 排序 and 倒序
test('Test tableHeader click asce', async () => {
  expect(async() => {
    getWrapperDm.vm.$mounted().toBeTruthy()
    await getWrapperDm.find('#asce').trigger('click')
  })
})

test('Test tableHeader click desc', () => {
  expect(async() => {
    await getWrapperDm.find('#desc').trigger('click')
  })
})
