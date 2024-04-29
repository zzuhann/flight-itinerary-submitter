export const FLIGHT_INFO_FIELDS = [
  { label: '下車機場', name: 'IATA', disabled: true },
  { label: '航班編號', name: 'flight', disabled: false },
] as const;

export const PASSENGER_INFO_FIELDS = [
  { label: '姓名', name: 'name', disabled: false },
  { label: '電話', name: 'phone', disabled: false },
  { label: '身分證字號/護照編號', name: 'id', disabled: false },
  { label: '乘車備註', name: 'note', disabled: false },
] as const;
