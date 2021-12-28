import { axiosService } from 'axios-services'


export const getPerm = (): Promise<any> => {
    return axiosService.get('/api/perm/list')
}

export const createPerm = (params: any): Promise<any> => {
    return axiosService.postByJson('/api/perm/add', params)
}