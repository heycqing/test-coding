<template>
  <div class="table-warp">
    <TestTable :columns="columns" :dataSource="MockData">
      <span>xxxxxx</span>
    </TestTable>
  </div>
</template>

<script lang="ts">
import { TestTable } from '../src/table'
import { defineComponent, ref } from '@vue/composition-api'
import MockData from './mock_data.json'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    desc: true,
  },
]
export default defineComponent({
  name: 'App',
  components: {
    TestTable,
  },
  setup() {
    const test = ref(true)

    return { test }
  },
  data(){
    return{
      MockData,
      columns,
    }
  },
})
</script>

<style scoped>
.table-warp {
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
