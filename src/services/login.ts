// import { axiosService } from '../utils/request';
import { axiosService } from 'axios-services'

export const login = (params: any): Promise<any> => {
    return axiosService.postByJson('/api/login', params)
}