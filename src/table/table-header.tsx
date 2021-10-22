/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'

const ORDER = {
    asce: 'asce',
    desc: 'desc'
}

export default defineComponent({
    name: 'TableHeader',
    props: {
        columns: { type: Array, required: true },
        dataSource: {type: Array, required: true},
        handleSetSourceData: {type: Function, required: true}
    },
    setup(props) {
        return () => {
            return (
                <thead>
                    <tr>
                        {props.columns.map(item => {
                                return (
                                <th>
                                    {item.title}
                                    {/* 排序 */}
                                    {item.order && 
                                        (<span class="columns-desc">
                                            <span onClick={() => props.handleSetSourceData(props.dataSource, ORDER.asce, item.key)}>升序</span>
                                            <span onClick={() => props.handleSetSourceData(props.dataSource, ORDER.desc, item.key)}>降序</span>
                                        </span>)}
                                </th>)
                        })}
                    </tr>
                </thead>
            )
        }
    },
})

