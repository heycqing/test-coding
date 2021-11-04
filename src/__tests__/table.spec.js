import { mount } from '@vue/test-utils'
import { TestTable } from '../table'
import { className, pageSize, tableArr, tableColumns } from '../test-mock/mockdata.test'

describe('Table', () => {
  const TableMount = options => mount(TestTable, options)

  test('Table render', () => {
    const wrapper = TableMount({
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
        pageSize,
        className,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(() => {
      wrapper.vm.$forceUpdate()
      wrapper.vm.$destroy()
    })
  })

})
