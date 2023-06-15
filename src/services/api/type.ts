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

export interface IDeviceApiParams {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    name: string;
    device_no: string;
    product_id: number;
    desc: string;
    last_time: string;
    sub_device: number;
    sub_device_id: number;
    sub_device_no: string;
    product_key: string;
}
export interface IDeviceApi {
    login: (params: IDeviceApiParams) => Promise<ResType<DataType>>
}


