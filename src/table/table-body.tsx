/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
// import { tableProps } from './types'

interface DataSourceItem {
    name: string;
    age: string;
    sex: string;
}
export default defineComponent({
    name: 'TableBody',
    props: {
        dataSource: { type: Array, required: true },
        columns: { type: Array, required: true }
    },
    setup({dataSource, columns}, { slots }) {
        return () => {
            return (
                <tbody>
                    {/* 生成数据 */}
                    {dataSource.map((item) => {
                        console.log('item  ==> ', item)
                            return (
                                <tr>
                                    {/* 依据columns生成 */}
                                    {columns.map(keyItem => keyItem.key).map(colItem => {
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