```js
// 表格API DEMO

// Props 定义
let TableProps = {
    // 传入的数据
    dataSource: []
    // 传入的列数据
    columns: []
    // 额外的类名
    className: ''
}


 // 对外暴露的方法
 // data 表格请求成功后返回的表格数据
 <table-comp {...TableProps}
             onSuccessRequireData={}
             onClickRowEvent={}
             onDoubleClickRowEvent={}
             onMouseEnterRowEvent={}
             onMouseLeaveEvent={}
             onContextmenuClickRowEvent={} >
                // slots 插槽: 额外出入的组件内容
                // 表头自定义插槽
                <table-header-slot></table-header-slot>

                // 表格单元格插槽
                <table-row-cell-slot></table-row-cell-slot>
</table-comp>

```



