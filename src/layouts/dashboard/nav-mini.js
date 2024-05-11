// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from 'src/theme/css';
// hooks
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
// eslint-disable-next-line import/no-named-as-default
import Logo from 'src/components/logo/minilogo';
import { NavSectionMini } from 'src/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavToggleButton } from '../_common';

// ----------------------------------------------------------------------

export default function NavMini() {
  // const { user } = useMockedUser();

  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        // height:"100vh",
        borderRadius:"0px 40px 40px 0px",
        background:"#584495",
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          
          pb: 2,
          height: "90%",
          position: 'fixed',
          width: NAV.W_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScroll.x,
        }}
      >
        <Logo sx={{ mx: 'auto', my: 2 }} />

        <NavSectionMini
          data={navData}
          config={{
            currentRole: 'admin',
          }}
        />
      </Stack>
    </Box>
  );
}
