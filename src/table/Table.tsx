/**
 * Created by uedc on 2021/10/11.
 */

import { defineComponent } from '@vue/composition-api';
import _ from 'lodash';
import { ORDER } from './const';
import './index.css';
// 组件
import TableBody from './table-body/table-body';
import Pagination from './table-footer/pagination';
import TableHeader from './table-header/table-header';
import { tableProps, tablePropsType } from './types';
const FRISTPAGE = 0;

export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props: tablePropsType, { slots }: any) {
    let tempDataSourceChunkMap = _.chunk(_.clone(props.dataSource), props.pageSize)
    props.dataSource = tempDataSourceChunkMap[FRISTPAGE]
    return () => {
      console.log('tempDataSourceChunkMap ', tempDataSourceChunkMap)
      // 排序
      const setSortSourceData = (data: [], order: string, key: string) =>{
            // asce 升序
            // desc 降序
            console.log('info Table -> setSortSourceData -> agv: {data,order,key)', data, order, key)
            props.dataSource = data.sort((pre, next) => {
                console.log('info Table -> setSortSourceData -> sort: {pre, next}', pre, next)
                if(order === ORDER.asce) {
                  return pre[key] - next[key]
                }
                if(order === ORDER.desc){
                  return next[key] - pre[key]
                }
                return 0;
            });
      }

      // 定义一个更新表格数据的方法
      const changeOriginList = (index: number): void => {
        console.log('info --> get after handle index', index)
        // props.dataSource = list;
        if((FRISTPAGE <= index || index <= tempDataSourceChunkMap.length) && tempDataSourceChunkMap[index]){
          props.dataSource = tempDataSourceChunkMap[index]
        } 
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
                              dataLen={tempDataSourceChunkMap.length}
                              size={props.pageSize}
                              dataSource={tempDataSourceChunkMap}
                              onChangeOriginList={changeOriginList}></Pagination>
                </tfoot>
            </table>
        </div>
      )
    }
  },
})