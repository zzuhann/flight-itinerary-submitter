'use client';

import { Button, Drawer, Typography } from '@mui/material';
import { ButtonGroupContainerStyles, ContainerStyles } from './index.style';

type Props = {
  open: boolean;
  onClose: () => void;
  targetFlight: string;
  toggleSuccessStatus: () => void;
};

const FailNotificationDrawer = ({ open, onClose, targetFlight, toggleSuccessStatus }: Props) => {
  const handleClickSend = () => {
    onClose();
    toggleSuccessStatus();
  };

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <ContainerStyles>
        <Typography variant="h5">查不到「{targetFlight}」航班資訊</Typography>
        <Typography variant="subtitle2">請確認航班資訊、起飛時間等。你也可以直接填寫此航班作為機場接送資訊</Typography>
        <ButtonGroupContainerStyles>
          <Button variant="contained" fullWidth onClick={handleClickSend}>
            確認航班資訊，並送出
          </Button>
          <Button variant="outlined" fullWidth onClick={onClose}>
            重新填寫
          </Button>
        </ButtonGroupContainerStyles>
      </ContainerStyles>
    </Drawer>
  );
};

export default FailNotificationDrawer;
