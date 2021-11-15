import { mount } from '@vue/test-utils'
import { Pagination } from '../table/table-footer'
import { tableArr } from '../test-mock/mockdata.test'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

describe('TableHeader', () => {
  const getWrapperDm = options => mount(Pagination, options)

  //   const TestTableWrapperDm = options =>
  //     mount(TestTable, {
  //       propsData: {
  //         dataSource: tableArr,
  //         columns: tableColumns,
  //         pageSize,
  //       },
  //       ...options,
  //     })

  //   test('test render table footer', () => {
  //     const wrapper = getWrapperDm({
  //       propsData: {
  //         size: pageSize, // 页码大小
  //         dataSource: tableArr, // 表格数据
  //       },
  //     })


  //     //   expect(() => {
  //     //     wrapper().vm.handleGetPrepage(2)
  //     //   })

  //     //   expect(() => {
  //     //     wrapper().vm.handleGetNextpage(3)
  //     //   })
  //   })

  test('测试分页', () => {
    const wrapper = getWrapperDm({
      propData: {
        size: 10,
        dataSource: tableArr,
        dataLen: 100,
      },
    })

    expect(wrapper.vm.$emit('changeOriginList', 1))
    expect(wrapper.vm.$emit('changeOriginList', 3))

    expect(wrapper.vm.$emit('changeOriginList', 100))
    expect(wrapper.vm.$emit('changeOriginList', -1))

    //   expect(() => {
    //     wrapper().vm.moveFront()
    //     wrapper().vm.moveNext()
    //     wrapper().vm.moveToPage(1)
    //   })

    //   wrapper().vm.moveToPage(2)
    //   expect(wrapper().vm.curPage).toBe(2)

    //   wrapper().vm.moveToPage(2)
    //   wrapper().vm.moveFront()
    //   expect(wrapper().vm.curPage).toBe(1)
  })

  test('test ', () => {
    const wrapper = getWrapperDm({
      propData: {
        size: 3,
        dataSource: tableArr,
        dataLen: 4,
      },
    })
    expect(wrapper.vm.$emit('changeOriginList', 1))
    expect(wrapper.vm.$emit('changeOriginList', 3))

    expect(wrapper.vm.$emit('changeOriginList', 100))
    expect(wrapper.vm.$emit('changeOriginList', -1))
  })
})
