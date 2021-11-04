/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api'
import './index.css'
// 组件
import TableBody from './table-body/table-body'
import Pagination from './table-footer/pagination'
import TableHeader from './table-header/table-header'
import { tableProps } from './types'

const ORDER = {
  asce: 'asce',
  desc: 'desc'
}

export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props, { slots }: any) {
    return () => {

      // let tablePaginationRef = ref('tablePaginationRef');
      // 排序
      const setSortSourceData = (data: [], order: string, key: string) =>{
            // asce 升序
            // desc 降序
            props.dataSource = data.sort((a, b) => {
                if (a[key] < b[key]) {
                    return order === ORDER.asce ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return order === ORDER.desc ? 1 : -1;
                }
                return 0;
            });
      }


      return (
        <div class={['fy-table', props.className]}>
            <div class="fy-table-header"></div>
            <table class="fy-table-body" border="solid">
                <colgroup span="4" class="columns"></colgroup>
                <TableHeader columns={props.columns}
                             dataSource={props.dataSource} 
                             handleSetSourceData={setSortSourceData}/>
                <TableBody dataSource={props.dataSource} columns={props.columns} />
                <tfoot>
                  <Pagination ref="tablePaginationRef"
                              size={props.pageSize}
                              dataSource={props.dataSource}></Pagination>
                </tfoot>
            </table>
        </div>
      )
    }
  },
})