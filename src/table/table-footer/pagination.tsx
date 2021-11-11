/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api';
import { paginationPageIndex } from '../const';
import { PropsType } from '../types';

export default defineComponent({
    name: 'Pagination',
    props: {
        size: { type: Number, required: true, default: 10 },
        dataSource: { type: Array, default: [], required: true },
        dataLen: { type: Number, default: 1 }
    },
    emits: ['changeOriginList'],
    setup(props: PropsType, { emit }) {
        const FIRSTPAGE = 0;
        const LASTPAGE = props.dataLen - 1;
        let currentPage = 1;
        // 重新设置该组件中的currentPage
        const setCurrentPage = (index: number) => currentPage = index

        // 分页
        const handleSetPage = function (type: string) {
            console.log('info --> get type', type)
            if (currentPage <= LASTPAGE || currentPage >= FIRSTPAGE) {
                let index = currentPage
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
                emit('changeOriginList', currentPage)
            }
            if (currentPage <= FIRSTPAGE) {
                setCurrentPage(FIRSTPAGE)
            }
            if (currentPage >= LASTPAGE) {
                setCurrentPage(LASTPAGE)
            }
        }

        return () => {
            return (
                <div class="pagination">
                    <span onClick={() => { handleSetPage(paginationPageIndex.first) }}>首页</span>
                    <span onClick={() => { handleSetPage(paginationPageIndex.pre) }}>上一页</span>
                    <span onClick={() => { handleSetPage(paginationPageIndex.next) }}>下一页</span>
                    <span onClick={() => { handleSetPage(paginationPageIndex.last) }}>尾页</span>
                </div>
            )
        }
    }
})