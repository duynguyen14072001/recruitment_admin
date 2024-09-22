export interface ParamsOrders {
    key: string
    dir: 'desc' | 'asc'
}

export interface ParamsFilters {
    key: string
    data: string | number
}

export interface ParamsList {
    search?: string
    per_page?: number | string | undefined
    page?: number | string | undefined
    orders?: ParamsOrders[]
    filters?: ParamsFilters[] | string
    [key: string]: any
}

export interface Result {
    data?: any
    per_page?: number
    page?: number
    total?: number
    current_page?: number
    [key: string]: any
}

export interface ResponseResult {
    path: string
    result: any
    status: boolean
    status_code: number
}

export interface ResponseList extends ResponseResult {
    result: Result
}

export interface PaginateParams {
    page: number | undefined
    lastPage?: number | undefined
    perPage: number | undefined
    data?: Array<any> | undefined
    total: number | undefined
}

export interface ImageResponse {
    thumb?: string
    type?: 'avatar'
    url?: string
}

export interface ColumnTable {
    key: string
    title: string
    width?: string | number
    align?: 'left' | 'right' | 'center'
    customCell?: (record: any, rowIndex: any, column: any) => void
    dataIndex?: string | string[]
    className?: string
    ellipsis?: boolean
    fixed?: string
    sorter?: boolean
    sortDirections?: string[]
    defaultSortOrder?: 'ascend' | 'descend' | null
    customRender?: ({ text, record, index }: any) => any
}

export interface SortProps {
    column?: any
    columnKey: string
    field: string
    order?: 'ascend' | 'descend'
}

export interface ImageList {
    name: string
    status: string
    uid: string
    url: string
    id?: number
}

export interface Option {
    label: string
    value: number
}
