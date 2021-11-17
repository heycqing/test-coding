/* eslint-disable comma-dangle */
/* eslint-disable sort-imports */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { mount } from '@vue/test-utils'
import { Pagination } from '../table/table-footer'
import { FIRSTPAGE } from '../test-mock/mockdata.js'

const LASTPAGE = 10

describe('TableHeader', () => {
  const getWrapperDm = options =>
    mount(Pagination, {
      propData: {
        dataLen: 20,
        ...options,
      },
    })

  test('Test setCurrentPage方法', () => {
    const wrapper = getWrapperDm({
      dataLen: 20,
    })
    wrapper.vm.setCurrentPage(3)
    expect(wrapper.vm.currentPage).toBe(3)
  })

  test('Test handleSetPage方法: currentPage.value <= FIRSTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: 100,
    })
    wrapper.vm.handleSetPage('first')
    expect(wrapper.vm.currentPage).toBe(FIRSTPAGE)
  })

  test('Test handleSetPage方法: currentPage.value >= LASTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })
    wrapper.vm.setCurrentPage(11)
    setTimeout(() => {
      wrapper.vm.handleSetPage('last')
      expect(wrapper.vm.currentPage).toBe(LASTPAGE)
    }, 0)
  })

  test('Test handleSetPage方法: currentPage.value <= LASTPAGE || currentPage.value >= FIRSTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })

    wrapper.vm.setCurrentPage(2)
    setTimeout(() => {
      wrapper.vm.handleSetPage('next')
      expect(wrapper.vm.currentPage).toBe(3)
    })
  })

  test('Test handleSetPage方法: currentPage.value <= LASTPAGE || currentPage.value >= FIRSTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })

    wrapper.vm.setCurrentPage(2)
    setTimeout(() => {
      wrapper.vm.handleSetPage('pre')
      expect(wrapper.vm.currentPage).toBe(1)
    })
  })

  test('Test handleSetPage方法: currentPage.value <= LASTPAGE || currentPage.value >= FIRSTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })

    wrapper.vm.setCurrentPage(2)
    setTimeout(() => {
      wrapper.vm.handleSetPage('last')
      expect(wrapper.vm.currentPage).toBe(LASTPAGE)
    })
  })

  test('Test handleSetPage方法: currentPage.value <= LASTPAGE || currentPage.value >= FIRSTPAGE', () => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })

    wrapper.vm.setCurrentPage(2)
    setTimeout(() => {
      wrapper.vm.handleSetPage('first')
      expect(wrapper.vm.currentPage).toBe(FIRSTPAGE)
    })
  })

  test('Test changeOriginList', async() => {
    const wrapper = getWrapperDm({
      dataLen: LASTPAGE,
    })
    wrapper.vm.$emit('changeOriginList', 2)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().changeOriginList).toBeTruthy()
    expect(wrapper.emitted().changeOriginList[0]).toEqual([2])
  })

  // 找到id:firstPage dom 元素点击
  test('Test trigger firstPage click ', () => {
    const sortWarpper = getWrapperDm()
    const asceDom = sortWarpper.find('#firstPage')
    expect(asceDom.element.id).toBe('firstPage')
    asceDom.trigger('click')
  })

  // 找到id:prePage dom 元素点击
  test('Test trigger prePage click ', () => {
    const sortWarpper = getWrapperDm()
    const descDom = sortWarpper.find('#prePage')
    expect(descDom.element.id).toBe('prePage')
    descDom.trigger('click')
  })

  // 找到id:nextPage dom 元素点击
  test('Test trigger nextPage click ', () => {
    const sortWarpper = getWrapperDm()
    const descDom = sortWarpper.find('#nextPage')
    expect(descDom.element.id).toBe('nextPage')
    descDom.trigger('click')
  })

  // 找到id:lastPage dom 元素点击
  test('Test trigger lastPage click ', () => {
    const sortWarpper = getWrapperDm()
    const descDom = sortWarpper.find('#lastPage')
    expect(descDom.element.id).toBe('lastPage')
    descDom.trigger('click')
  })
})
