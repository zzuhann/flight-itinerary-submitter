export const FLIGHT_INFO_FIELDS = [
  { label: '下車機場', name: 'IATA', disabled: true, placeholder: '' },
  { label: '航班編號', name: 'flight', disabled: false, placeholder: 'e.g.BR003' },
] as const;

export const PASSENGER_INFO_FIELDS = [
  { label: '姓名', name: 'name', disabled: false, placeholder: 'e.g. Ming Hsiao' },
  { label: '電話', name: 'phone', disabled: false, placeholder: 'e.g. 0987654321' },
  { label: '身分證字號/護照編號', name: 'id', disabled: false, placeholder: 'e.g. A123456789' },
  { label: '乘車備註', name: 'note', disabled: false, placeholder: 'e.g. 地址備註、特殊行李' },
] as const;
