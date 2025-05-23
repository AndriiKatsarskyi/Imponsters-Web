import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Menu as MenuIcon } from '../../icons/menu';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
      boxShadow: theme.shadows[3]
    }
    : {
      backgroundColor: theme.palette.background.paper,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      boxShadow: 'none'
    })
}));

export const DashboardNavbar = (props) => {
  const { onOpenSidebar, ...other } = props;
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  return (
    <>
      <DashboardNavbarRoot
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {/* <LanguageButton />
          <ContentSearchButton />
          <ContactsButton />
          <NotificationsButton /> */}
          {/* <Button
            sx={{ ml: 4 }}
            type="submit"
            variant="contained"
            onClick={handleConnectWallet}
          >
            {!walletAddress? 'Connect Wallet' : 'Disconnect Wallet'}
          </Button> */}
          <WalletMultiButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
