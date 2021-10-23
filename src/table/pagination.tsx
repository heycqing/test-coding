/**
 * Created by uedc on 2021/10/11.
 */

 import { defineComponent } from '@vue/composition-api'
 // import { tableProps } from './types'
 
 export default defineComponent({
     name: 'Pagination',
     props: {
         size: { type: String, required: true },
     },
     setup(props, { slots }) {
         return () => {
             return (
                 <div class="pagination">
                    <span>首页</span>
                    <span onClick={props.onGetPrepage}>上一页</span>
                    <span onClick={props.onGetNextpage}>下一页</span>
                    <span>尾页</span>
                 </div>
             )
         }
     },
 })