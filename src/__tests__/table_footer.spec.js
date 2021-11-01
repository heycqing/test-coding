import { mount } from '@vue/test-utils'
import TestFooter from '../table/pagination.tsx'

const arr = [{
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


const getWrapperDm = () => {
  const wrapper = mount(TestFooter, {
    propsData: {
      size: 10, // 页码大小
      dataSource: arr,
    },
  })

  return wrapper
}

test('test-table-header', () => {
  const wrapper = getWrapperDm()
  expect(() => {
    wrapper.vm.handleGetPrepage(2)
  }).not.toThrow()

  expect(() => {
    wrapper.vm.handleGetNextpage(3)
  }).not.toThrow()
})
