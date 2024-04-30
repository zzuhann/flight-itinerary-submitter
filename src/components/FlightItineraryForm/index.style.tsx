import { Box, Typography, styled } from '@mui/material';

export const ContainerStyles = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
});

export const TitleStyles = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
});

export const FormContainerStyles = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const FormTitleStyles = styled(Typography)({
  fontSize: '16px',
});

export const FormFieldContainerStyles = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});
