import http from '../http'
import { IDeviceApiParams, ResType } from './type'

export interface IDeviceApi {
  createDevice(params: IDeviceApiParams): Promise<ResType<unknown>>;
  getAllDevice(): Promise<ResType<unknown>>;
  getDevice(params: IDeviceApiParams): Promise<ResType<unknown>>;
  delDevice(params: IDeviceApiParams): Promise<ResType<unknown>>;
}

const deviceApi: IDeviceApi = {
  createDevice(params) {
    return http.post('/device', params);
  },
  getAllDevice() {
    return http.get('/device');
  },
  getDevice(params) {
    return http.get('/device/by', params);
  },
  delDevice(params) {
    return http.delete('/device', params);
  },
};

export default deviceApi;
