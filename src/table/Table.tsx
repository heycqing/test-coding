/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
import './index.css'
// 组件
import TableBody from './table-body'
import TableHeader from './table-header'
import { tableProps } from './types'





export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props, { slots }) {
    return () => {
      return (
        <div class={['fy-table', props.className]}>
            <div class="fy-table-header"></div>
            <table class="fy-table-body" border="solid">
                <colgroup span="4" class="columns"></colgroup>
                <TableHeader columns={props.columns}/>
                <TableBody dataSource={props.dataSource} columns={props.columns}/>
            </table>
        </div>
      )
    }
  },
})