import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// sections
import HelpDeskView from 'src/sections/helpDesk/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: help desk</title>
      </Helmet>
      <Box sx={{
        width: '100%',
        height: '1px',
        backgroundColor: '#D6D8E1',
        m: '-.5em 0em 1.7em -.9em',
      }} />
      <HelpDeskView />
    </>
  );
}
