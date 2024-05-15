import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// sections
import OvertimePayRequestView from 'src/sections/overtimePayRequest/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Overtime Pay Request</title>
      </Helmet>
      <Box sx={{
        width: '100%',
        height: '1px',
        backgroundColor: '#D6D8E1',
        m: '-.5em 0em 1.7em -.9em',
      }} />
      <OvertimePayRequestView />
    </>
  );
}
