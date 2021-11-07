/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'TableBody',
    props: {
        dataSource: { type: Array, required: true },
        columns: { type: Array, required: true }
    },
    setup(props, { slots }) {
        return () => {
            return (
                <tbody class="table-body">
                    {/* 生成数据 */}
                    {props.dataSource.map((item) => {
                            return (
                                <div>
                                    {slots.rowContent ? slots.rowContent : (
                                        <th>
                                        {props.columns.map(keyItem => keyItem.key).map(colItem => {
                                            return <td>{item[colItem]}</td>
                                        })}
                                        </th>
                                    )}
                                </div>
                            )
                        })}
                </tbody>
            )
        }
    },
})