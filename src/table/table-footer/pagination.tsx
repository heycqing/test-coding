/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api';
import _ from 'lodash';
import { functionType } from '../types';

export default defineComponent({
    name: 'Pagination',
    props: {
        size: { type: Number, required: true, default: 10 },
        dataSource: { type: Array, default: [], required: true },
        handleGetPrepage: functionType,
        handleGetNextpage: functionType
    },
    setup(props, { slots }) {
        // temp
        let tempDataSourceChunkMap = _.chunk(_.clone(props.dataSource), props.size);
        const FIRSTPAGE = 1;
        const LASTPAGE = (tempDataSourceChunkMap.lenght + 1) || 1
        let currentPage = 1;

        // 分页
        const handleSetPage = function (currentPage: number) {
            if (currentPage == tempDataSourceChunkMap.length + 1) {
                return;
            }
            if (currentPage && currentPage < (tempDataSourceChunkMap.length + 1)) {
                props.dataSource = tempDataSourceChunkMap[currentPage];
            }
        }

        return () => {
            return (
                <div class="pagination">
                    <span onClick={() => {handleSetPage(FIRSTPAGE)}}>首页</span>
                    <span onClick={() => {handleSetPage(currentPage--)}}>上一页</span>
                    <span onClick={() => {handleSetPage(currentPage++)}}>下一页</span>
                    <span onClick={() => {handleSetPage(LASTPAGE)}}>尾页</span>
                </div>
            )
        }
    }
})