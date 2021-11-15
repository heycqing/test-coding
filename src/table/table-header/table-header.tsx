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
        dataSource: {type: Array, required: true},
    },
    emits: ['sortList'],
    setup(props: TableHeaderPropsType, {slots, emit}) {
        const clickSort = (data: object[], order: string, key: string) => {
            emit('sortList', data, order, key)
        }
        return () => {
            clickSort
            return (
                <thead class="tabel-header">
                    <tr>
                        {props.columns.map((item:TableHeaderDataType) => {
                                return (
                                <th>
                                    {slots.header ? 
                                        slots.header :
                                        (<div>
                                            {item.title}
                                            {/* 排序 */}
                                            {item.order && 
                                                (<span class="columns-desc">
                                                    <span onClick={() => clickSort(props.dataSource, ORDER.asce, item.key)} id="asce">升序</span>
                                                    <span onClick={() => clickSort(props.dataSource, ORDER.desc, item.key)} id="desc">降序</span>
                                                </span>)}
                                        </div>)
                                    }
                                </th>)
                        })}
                    </tr>
                </thead>
            )
        }
    },
})

