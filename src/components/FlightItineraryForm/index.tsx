'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { formSchema } from './zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import {
  ContainerStyles,
  FormContainerStyles,
  FormFieldContainerStyles,
  FormTitleStyles,
  TitleStyles,
} from './index.style';

type FormData = z.infer<typeof formSchema>;

const FLIGHT_INFO_FIELDS = [{ label: '航班編號', name: 'flight' }] as const;

const PASSENGER_INFO_FIELDS = [
  { label: '姓名', name: 'name' },
  { label: '電話', name: 'phone' },
  { label: '身分證字號/護照編號', name: 'id' },
  { label: '乘車備註', name: 'note' },
] as const;

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A5C6A',
    },
  },
});

const FlightItineraryForm = () => {
  const { register, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flight: '',
      name: '',
      phone: '',
      id: '',
      note: '',
    },
  });
  const { errors } = formState;

  //   const onSubmit = async (data: FormData) => {
  //     console.log(data);
  //     await new Promise<void>((resolve) => {
  //       setTimeout(() => {
  //         resolve();
  //       }, 1000);
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <ContainerStyles>
        <TitleStyles variant="h1">送機行程</TitleStyles>
        <form>
          <FormContainerStyles>
            <FormTitleStyles variant="h2">送機計畫</FormTitleStyles>
            {FLIGHT_INFO_FIELDS.map((field) => (
              <FormFieldContainerStyles key={field.name}>
                <Typography variant="subtitle2">{field.label}</Typography>
                <TextField {...register(field.name)} error={!!errors[field.name]} size="small" fullWidth />
              </FormFieldContainerStyles>
            ))}

            <FormTitleStyles variant="h2">旅客資訊</FormTitleStyles>
            {PASSENGER_INFO_FIELDS.map((field) => (
              <FormFieldContainerStyles key={field.name}>
                <Typography variant="subtitle2">{field.label}</Typography>
                <TextField {...register(field.name)} error={!!errors[field.name]} size="small" fullWidth />
              </FormFieldContainerStyles>
            ))}
          </FormContainerStyles>
        </form>
        <Button variant="contained" fullWidth>
          下一步
        </Button>
      </ContainerStyles>
    </ThemeProvider>
  );
};

export default FlightItineraryForm;
