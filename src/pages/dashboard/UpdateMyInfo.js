import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// sections
import UpdateMyInfoView from 'src/sections/updateMyInfo/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Update My Information request</title>
      </Helmet>
      <Box sx={{
        width: '100%',
        height: '1px',
        backgroundColor: '#D6D8E1',
        m: '-.5em 0em 1.7em -.9em',
      }} />
      <UpdateMyInfoView />
    </>
  );
}
