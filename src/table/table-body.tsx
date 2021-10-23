/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
// import { tableProps } from './types'

export default defineComponent({
    name: 'TableBody',
    props: {
        dataSource: { type: Array, required: true },
        columns: { type: Array, required: true }
    },
    setup(props, { slots }) {
        return () => {
            return (
                <tbody>
                    {/* 生成数据 */}
                    {props.dataSource.map((item) => {
                            return (
                                <tr>
                                    {/* 依据columns生成 */}
                                    {props.columns.map(keyItem => keyItem.key).map(colItem => {
                                        return <td>{item[colItem]}</td>
                                    })}
                                </tr>
                            )
                        })}
                </tbody>
            )
        }
    },
})