/* eslint-disable @typescript-eslint/no-explicit-any */

import type { PropOptions, PropType } from 'vue-types/dist/types'
type Prop<T, D = T> = PropOptions<T, D> | PropType<T>
type PublicRequiredKeys<T> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never
}[keyof T]

type PublicOptionalKeys<T> = Exclude<keyof T, PublicRequiredKeys<T>>
type InferPropType<T> = T extends null
  ? any // null & true would fail to infer
  : T extends { type: null | true }
  ? any // As TS issue https://github.com/Microsoft/TypeScript/issues/14829 // somehow `ObjectConstructor` when inferred from { (): T } becomes `any` // `BooleanConstructor` when inferred from PropConstructor(with PropMethod) becomes `Boolean`
  : T extends ObjectConstructor | { type: ObjectConstructor }
  ? Record<string, any>
  : T extends BooleanConstructor | { type: BooleanConstructor }
  ? boolean
  : T extends Prop<infer V, infer D>
  ? unknown extends V
  ? D
  : V
  : T

// eslint-disable-next-line @typescript-eslint/ban-types
export type IxPublicPropTypes<O> = O extends object
  ? { [K in PublicRequiredKeys<O>]: InferPropType<O[K]> } & { [K in PublicOptionalKeys<O>]?: InferPropType<O[K]> }
  : { [K in string]: any }

export const functionType = { type: Function, default: ((): void => { }) }

const columnsDefault = {
  title: '',
  dataIndex: '',
  key: '',
  order: false,
}

// Props 定义在这里
export const tableProps = {
  dataSource: { type: Array, default: [], required: true },
  columns: { type: Array, default: [columnsDefault], required: true },
  className: { type: String, default: '' },
  pageSize: { type: Number, default: 2 },

  // event
  onSuccessRequireData: functionType,
  onClickRowEvent: functionType,
  onDoubleClickRowEvent: functionType,
  onMouseEnterRowEvent: functionType,
  onMouseLeaveEvent: functionType,
  onContextmenuClickRowEvent: functionType,

  onGetPrepage: functionType,
  onGetNextpage: functionType,
}

export interface tablePropsType {
  dataSource: any[]
  columns: TableHeaderDataType[]
  className: string
  pageSize: number
}

// 表格body ts类型
export interface TableHeaderDataType {
  name: string
  age: number
  sex: string
}

export interface TableBodyPropsType {
  data: any[]
  columns: TableHeaderDataType[]
}

// 分页器
export interface PropsType {
  dataLen: number
}

// 表格头部ts类型
export interface TableHeaderPropsType {
  columns: TableHeaderDataType[]
  data: any[]
  handleSetSourceData: Function
}

export interface TableHeaderDataType {
  title: string
  dataIndex: string
  key: string | number
  order: boolean | any
}
export type TablePublicProps = IxPublicPropTypes<typeof tableProps>



