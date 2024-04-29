import { createTheme } from '@mui/material';

export const FLIGHT_INFO_FIELDS = [{ label: '航班編號', name: 'flight' }] as const;

export const PASSENGER_INFO_FIELDS = [
  { label: '姓名', name: 'name' },
  { label: '電話', name: 'phone' },
  { label: '身分證字號/護照編號', name: 'id' },
  { label: '乘車備註', name: 'note' },
] as const;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4A5C6A',
    },
  },
});
