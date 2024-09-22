export const emptyObj = (object: Object) => {
    return !Object.keys(object).length
}

export const findData = (arr: any, id: any) => {
    if (arr.length) return arr.find((item: any) => item.id == id)
    return []
}

export const findIndex = (arr: any, index: number): number => {
    return arr.findIndex((item: any) => item.index === index)
}

export const getOptions = (array: any[] | undefined, name = 'name') => {
    return array?.map((item) => ({ label: item[name], value: item.id }))
}

export const getObjOptions = (obj: Record<number, string>, hasAll = true, end = true) => {
    const options = Object.entries(obj).map(([value, label]) => ({
        label,
        value: +value,
    }))

    if (hasAll && end) return [...options, ALL_OPTION]
    if (hasAll) return [ALL_OPTION, ...options]

    return options
}

export const mapKeyToData = (value: any) => {
    return Object.entries(value).map(([k, v]) => {
        return Object.fromEntries([
            ['key', k],
            ['data', Array.isArray(v) ? JSON.stringify((v as Array<string>).map((i) => +i)) : v],
        ])
    })
}

export const getFirstErrorMessage = (errors: Record<string, any>) => {
    return Object.values(errors).flat().shift() as string
}
