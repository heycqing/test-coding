/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'


export default defineComponent({
    name: 'TableHeader',
    props: {
        columns: { type: Array, required: true }
    },
    setup({columns}, { slots }) {
        // const classes = useClasses(props)
        return () => {
            return (
                <thead>
                    <tr>
                        {columns.map(item => {
                                return (
                                <th>
                                    {item.title}
                                    {/* 排序 */}
                                    {item.desc && 
                                        (<span class="columns-desc">
                                            <span>升序</span>
                                            <span>降序</span>
                                        </span>)}
                                </th>)
                        })}
                    </tr>
                </thead>
            )
        }
    },
})

