import instance from './instance';
import { Airport } from './type';

const apis = {
  getAirports: (IATA: string): Promise<Airport[]> => {
    return instance.get(`/${IATA}`, { params: { $format: 'JSON', $orderby: 'ScheduleDepartureTime' } });
  },
};

export default apis;
