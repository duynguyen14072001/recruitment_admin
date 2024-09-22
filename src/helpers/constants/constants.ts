import { PaginateParams, ParamsList } from "@/interfaces/commonInterface"

export const PAGE_FIRST = 1
export const PER_PAGE = 10
export const MAX_STRING = 255
export const MIN_STRING = 8
export const MAX_SIZE_CSV = 10485760
export const START_YEAR = 1920
export const AGES = 18
export const MAX_SIZE_IMAGE = 10 //MB
export const MAX_SIZE_IMAGE_BYTE = 10485760 //KB
export const IMAGE_EXTENSIONS = ['jpeg', 'png', 'jpg']
export const HASH = Math.floor(Math.random() * 90000) + 10000

export const INITIAL_PAGINATE: PaginateParams = {
    page: PAGE_FIRST,
    lastPage: 0,
    perPage: PER_PAGE,
    data: [],
    total: 0,
}

export const INITIAL_QUERY: ParamsList = {
    page: PAGE_FIRST,
    search: '',
    per_page: PER_PAGE,
    orders: [{ key: 'id', dir: 'desc' }],
    filters: [],
}

export const PAYLOAD_ALL: ParamsList = {
    all: 1,
}

