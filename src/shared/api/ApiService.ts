import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import Error from '@/models/Error'

class ApiService {
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: 'https://asset-manager-29uu.onrender.com/api',
      timeout: 1000000,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  static handleError(error: Error) {
    throw new Error(`Erro na requisição: ${error.message}`, error.response, error.code)
  }

  public async post<T>(resource: string, params?: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.post(resource, params)
      return response.data as T
    } catch (error) {
      console.log(error)
      ApiService.handleError(error as Error)
      return {} as T
    }
  }
}

export default new ApiService()
