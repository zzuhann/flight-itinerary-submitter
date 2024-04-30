'use client';

import { Drawer, Typography } from '@mui/material';
import CheckedImg from '/public/checked.png';
import Image from 'next/image';
import { ContainerStyles } from './index.style';

type Props = {
  open: boolean;
  onClose: () => void;
};

const SuccessNotificationDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <ContainerStyles>
        <Image src={CheckedImg} alt="checked" width={60} height={60} />
        <Typography variant="h6">完成送機行程</Typography>
      </ContainerStyles>
    </Drawer>
  );
};

export default SuccessNotificationDrawer;
