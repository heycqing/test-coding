/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
import { ORDER } from '../const'
import { TableHeaderDataType, TableHeaderPropsType } from '../types'

// TableHeader 模块，作为受控组件独立
export default defineComponent({
    name: 'TableHeader',
    props: {
        columns: { type: Array, required: true },
    },
    emits: ['sortList'],
    setup(props_: TableHeaderPropsType, { emit }) {
        const clickSort = (order: string, key: string) => {
            emit('sortList', order, key)
        }
        return {
            clickSort
        }
    },
    render() {
        let { columns, clickSort } = this;
        return (
            <thead class="tabel-header">
                <tr>
                    {columns.map((item: TableHeaderDataType) => {
                        return (
                            <th>
                                <div>
                                    {item.title}
                                    {/* 排序 */}
                                    {item.order &&
                                        (<span class="columns-desc">
                                            {/* 不能在header里面直接修改props的原数据 */}
                                            <span onClick={() => clickSort(ORDER.asce, item.key)} id="asce">升序</span>
                                            <span onClick={() => clickSort(ORDER.desc, item.key)} id="desc">降序</span>
                                        </span>)}
                                </div>
                            </th>)
                    })}
                </tr>
            </thead>
        )
    }
})

