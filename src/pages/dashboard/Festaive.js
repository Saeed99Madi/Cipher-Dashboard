import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// sections
import FestiveView from 'src/sections/festive/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Festive</title>
      </Helmet> 
      <Box sx={{
        width: '102.5%',
        height: '1px',
        backgroundColor: '#D6D8E1',
        m: '-.5em 0em 1.7em -.9em',
      }} />
      <FestiveView />
    </>
  );
}
