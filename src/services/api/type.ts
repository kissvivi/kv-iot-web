export interface DataType {
    name: string
}
export interface ResType<T> {
    code: number
    data?: T
    msg: string
    err?: string
}
export interface ILoginApiParams {
    username: string
    password: string
}
export interface ILoginApi {
    login: (params: ILoginApiParams) => Promise<ResType<DataType>>
}