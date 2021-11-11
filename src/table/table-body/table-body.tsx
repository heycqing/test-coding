/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
import { TableBodyPropsType } from '../types'

export default defineComponent({
    name: 'TableBody',
    props: {
        dataSource: { type: Array, required: true },
        columns: { type: Array, required: true }
    },
    setup(props: TableBodyPropsType, { slots }) {
        return () => {
            if(slots.rowContent){
                return slots.rowContent
            }
            return (
                <tbody class="table-body">
                    {/* 生成数据 */}
                    {props.dataSource.map((item) => {
                            return (<tr>
                                {props.columns.map(keyItem => keyItem.key).map(colItem => {
                                        return <td>{item[colItem]}</td>
                                })}
                                </tr>)
                    })}
                </tbody>
            )
        }
    },
})