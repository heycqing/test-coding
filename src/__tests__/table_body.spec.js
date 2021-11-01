import { mount } from '@vue/test-utils'
import { TableBody } from '../table/table-body'

const tableArr = [{
  'name': '小明',
  'age': 16,
  'sex': 'man',
},{
  'name': '小红',
  'age': 12,
  'sex': 'woman',
},{
  'name': '小明',
  'age': 13,
  'sex': 'woman',
},{
  'name': '小明',
  'age': 14,
  'sex': 'woman',
},{
  'name': '小明',
  'age': 25,
  'sex': 'man',
},{
  'name': '小刚',
  'age': 6,
  'sex': 'man',
},{
  'name': '小明',
  'age': 7,
  'sex': 'man',
}]

const tableColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    order: true,
  },
]

describe('TableBody', () => {
  const TableMount = options => mount(TableBody, options)

  test('render', () => {
    const wrapper = TableMount()
    expect(wrapper.html()).toMatchSnapshot()
    expect(() => {
      wrapper.vm.$forceUpdate()
      wrapper.vm.$destroy()
    }).not.toThrow()
  })

  test('props test', () => {
    const wrapper = TableMount({
      propsData: {
        dataSource: tableArr,
        columns: tableColumns,
      },
    })

    expect(wrapper.find('.test-class').exists()).toBeTruthy()
  })

})
