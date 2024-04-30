'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { formSchema } from './zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  ContainerStyles,
  FormContainerStyles,
  FormFieldContainerStyles,
  FormTitleStyles,
  TitleStyles,
} from './index.style';
import { FLIGHT_INFO_FIELDS, PASSENGER_INFO_FIELDS } from './constants';
import apis from '@/apis';
import { useState } from 'react';
import SuccessNotificationDrawer from './components/SuccessNotificationDrawer';
import FailNotificationDrawer from './components/FailNotificationDrawer';

type FormData = z.infer<typeof formSchema>;

function checkIfHasFlight({ targetFlight, list }: { targetFlight: string; list: string[] }) {
  return list.includes(targetFlight);
}

const FlightItineraryForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, formState, handleSubmit, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      IATA: '桃園國際機場 第一航廈',
      flight: '',
      name: '',
      phone: '',
      id: '',
      note: '',
    },
  });
  const { errors } = formState;
  const targetFlight = watch('flight');

  const onSubmit = async (data: FormData) => {
    setIsFetching(true);
    const response = await apis.getAirports('TPE');
    setIsFetching(false);

    if (response) {
      const list = response?.map((item) => {
        return `${item.AirlineID}${item.FlightNumber}`;
      });
      if (checkIfHasFlight({ targetFlight: data.flight, list })) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } else {
      setIsError(true);
    }
  };

  const toggleSuccessStatus = () => {
    setIsSuccess((prev) => !prev);
  };

  const toggleErrorStatus = () => {
    setIsError((prev) => !prev);
  };

  return (
    <>
      <ContainerStyles>
        <TitleStyles variant="h1">送機行程</TitleStyles>
        <form>
          <FormContainerStyles>
            <FormTitleStyles variant="h2">送機計畫</FormTitleStyles>
            {FLIGHT_INFO_FIELDS.map((field) => (
              <FormFieldContainerStyles key={field.name}>
                <Typography variant="subtitle2">{field.label}</Typography>
                <TextField
                  {...register(field.name)}
                  error={!!errors[field.name]}
                  size="small"
                  fullWidth
                  disabled={field.disabled}
                />
              </FormFieldContainerStyles>
            ))}

            <FormTitleStyles variant="h2">旅客資訊</FormTitleStyles>
            {PASSENGER_INFO_FIELDS.map((field) => (
              <FormFieldContainerStyles key={field.name}>
                <Typography variant="subtitle2">{field.label}</Typography>
                <TextField
                  {...register(field.name)}
                  error={!!errors[field.name]}
                  size="small"
                  fullWidth
                  disabled={field.disabled}
                />
              </FormFieldContainerStyles>
            ))}
          </FormContainerStyles>
        </form>
        <LoadingButton variant="contained" fullWidth onClick={handleSubmit(onSubmit)} loading={isFetching}>
          下一步
        </LoadingButton>
      </ContainerStyles>

      <SuccessNotificationDrawer open={isSuccess} onClose={toggleSuccessStatus} />
      <FailNotificationDrawer
        open={isError}
        onClose={toggleErrorStatus}
        targetFlight={targetFlight}
        toggleSuccessStatus={toggleSuccessStatus}
      />
    </>
  );
};

export default FlightItineraryForm;
