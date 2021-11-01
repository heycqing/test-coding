import { mount } from '@vue/test-utils'
import TestHeader from '../table/table-header.tsx'

const getWrapperDm = () => {
  const wrapper = mount(TestHeader, {
    propsData: {
      sort: true, // 是否排序
      defaultSort: 'asce', // 默认的排序 升序降序
      key: 'age',
    },
  })

  return wrapper
}

test('test-table-header', () => {
  const wrapper = getWrapperDm()
  expect(() => {
    wrapper.vm.handleSetSourceData('asce', 'age')
  }).not.toThrow()
})
