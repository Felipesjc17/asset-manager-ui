import type DataCompoundInterest from '@/models/compound-interest/DataCompoundInterest'
import apiService from '../../shared/api/ApiService'

class CompoundInterestService {
  static async getDataService(filters: Object): Promise<DataCompoundInterest> {
    const resource = '/simulateCompoundInterest'
    return await apiService.post<DataCompoundInterest>(resource, filters)
  }
}
export default CompoundInterestService
