import { mount } from '@vue/test-utils'
import { TableHeader } from '../table/table-header'
import {
    defaultKey,
    defaultSort,
    tableArr,
    tableColumns
} from '../test-mock/mockdata.test'

const testHandleSetSourceData = (
  testTableData,
  testDefaultSort,
  testDefaultKey,
) => {
  console.log(
    'testTableData, testDefaultSort, testDefaultKey ',
    testTableData,
    testDefaultSort,
    testDefaultKey,
  )
}

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

test('test table-header render', () => {
  expect(() => {
    getWrapperDm.vm.handleSetSourceData(defaultSort, defaultKey)
  })
})

test('test teble-header click asce', () => {
  expect(()=>{
    getWrapperDm.find('#asce').trigger('click')
  })
})

test('test teble-header click desc', () => {
  expect(()=>{
    getWrapperDm.find('#desc').trigger('click')
  })
})
