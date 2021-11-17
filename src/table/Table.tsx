/**
 * Created by uedc on 2021/10/11.
 */

import { computed, defineComponent, ref } from '@vue/composition-api';
import _ from 'lodash';
import { ORDER } from './const';
// import './index.css';
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
    // props.dataSource = tempDataSourceChunkMap[FRISTPAGE]
    // 定义当前关键值
    let sortActiveKey = ref<String>(''),
      sortActiveOrder = ref<String>(''),
      pageinationIndex = ref<number>(FRISTPAGE);
    const sortTableList = (list: [], key: string) => {
      return list.sort((pre: any, next: any) => {
        console.log('info Table -> setSortSourceData -> sort: {pre, next}', pre, next)
        if (sortActiveOrder.value === ORDER.asce) {
          return pre[key] - next[key]
        }
        if (sortActiveOrder.value === ORDER.desc) {
          return next[key] - pre[key]
        }
      });
    }
    // 更新当前表格数据
    let dataList = computed(() => {
      console.log(' info => sortActiveOrder, sortActiveKey, pageinationIndex ', sortActiveOrder, sortActiveKey, tempDataSourceChunkMap, pageinationIndex)
      let resultList = [];
      if (sortActiveOrder.value || sortActiveKey.value) {
        let key = String(sortActiveKey.value)
        // 1. 依据排序sort key 更新
        resultList = sortTableList(tempDataSourceChunkMap[pageinationIndex.value], key)
      } else {
        resultList = tempDataSourceChunkMap[pageinationIndex.value]
      }
      return resultList;
    })
    // 排序
    // 设置当前排序的值
    const setSortSourceData = (order: string, key: string) => {
      // asce 升序, desc 降序
      console.log('info Table -> setSortSourceData -> agv: {order,key)', order, key)
      // 设置当前升降序的值
      sortActiveOrder.value = order;
      sortActiveKey.value = key;
    }
    // 定义一个更新表格数据的方法
    const changeOriginList = (index: number): void => {
      console.log('info --> get after handle index', index)
      pageinationIndex.value = index;
    }
    return {
      dataList,
      tempDataSourceChunkMap,
      sortActiveOrder,
      sortActiveKey,
      pageinationIndex,

      setSortSourceData,

      changeOriginList,
    }
  },
  render() {
    let { className,
      columns,
      tempDataSourceChunkMap,
      dataList,
      setSortSourceData,
      changeOriginList
    } = this;
    let data = _.clone(dataList) || []
    return (
      <div class={['fy-table', className]}>
        <div class="fy-table-header"></div>
        <table class="fy-table-body" border="solid">
          <colgroup span="4" class="columns"></colgroup>
          <TableHeader ref="tableHeaderRef" columns={columns} onSortList={setSortSourceData} />
          <TableBody data={data} columns={columns} />
          <tfoot>
            <Pagination ref="tablePaginationRef"
              dataLen={tempDataSourceChunkMap.length}
              onChangeOriginList={changeOriginList}></Pagination>
          </tfoot>
        </table>
      </div>
    )
  }
})