import { mount } from '@vue/test-utils'
import { TableBody } from '../table/table-body'
import { tableArr, tableColumns } from '../test-mock/mockdata.test'

describe('TableBody', () => {

  const TableMount = options => mount(TableBody, options)

  test('render', () => {
    const wrapper = TableMount({
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(() => {
      wrapper.vm.$forceUpdate()
      wrapper.vm.$destroy()
    })
  })
})
