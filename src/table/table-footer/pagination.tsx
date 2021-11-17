/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent, ref } from '@vue/composition-api';
import { paginationPageIndex } from '../const';
import { PropsType } from '../types';

export default defineComponent({
    name: 'Pagination',
    props: {
        dataLen: { type: Number, default: 1 }
    },
    emits: ['changeOriginList'],
    setup(props: PropsType, { emit }) {
        const FIRSTPAGE = 0;
        const LASTPAGE = props.dataLen - 1;
        let currentPage = ref<number>(1);
        // 重新设置该组件中的currentPage
        const setCurrentPage = (index: number) => currentPage.value = index

        // 分页
        const handleSetPage = function (type: string) {
            console.log('info --> get type', type)
            if (currentPage.value <= LASTPAGE || currentPage.value >= FIRSTPAGE) {
                let index = currentPage.value
                switch (type) {
                    case paginationPageIndex.pre:
                        index--
                        break;
                    case paginationPageIndex.next:
                        index++
                        break;
                    case paginationPageIndex.first:
                        index = FIRSTPAGE
                        break;
                    case paginationPageIndex.last:
                        index = LASTPAGE
                        break;
                }
                setCurrentPage(index)
            }
            if (currentPage.value <= FIRSTPAGE) {
                setCurrentPage(FIRSTPAGE)
            }
            if (currentPage.value >= LASTPAGE) {
                setCurrentPage(LASTPAGE)
            }
            emit('changeOriginList', currentPage.value)

        }

        return {
            currentPage,
            setCurrentPage,
            handleSetPage
        }
    },
    render () {
        let {handleSetPage} = this;
        return (
            <div class="pagination">
                <span id="firstPage" onClick={() => { handleSetPage(paginationPageIndex.first) }}>首页</span>
                <span id="prePage" onClick={() => { handleSetPage(paginationPageIndex.pre) }}>上一页</span>
                <span id="nextPage" onClick={() => { handleSetPage(paginationPageIndex.next) }}>下一页</span>
                <span id="lastPage" onClick={() => { handleSetPage(paginationPageIndex.last) }}>尾页</span>
            </div>
        )
    }
})