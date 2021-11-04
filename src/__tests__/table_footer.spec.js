import { mount } from '@vue/test-utils'
import { Pagination } from '../table/table-footer'
import { pageSize, tableArr } from '../test-mock/mockdata.test'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWrapperDm = options => mount(Pagination, options)

test('test render table footer', () => {
  const wrapper = getWrapperDm({
    propsData: {
      size: pageSize, // 页码大小
      dataSource: tableArr, // 表格数据
    },
  })

  expect(() => {
    wrapper.vm.handleGetPrepage(2)
  })

  expect(() => {
    wrapper.vm.handleGetNextpage(3)
  })
})
