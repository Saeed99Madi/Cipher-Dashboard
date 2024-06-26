import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import DetailsView from 'src/sections/products/view/productDetails';

export default function DetailsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: details</title>
      </Helmet>
      <Box sx={{
        width: '100%',
        height: '1px',
        backgroundColor: '#D6D8E1',
        m: '-.5em 0em 1.7em -.9em',
      }} />
      <DetailsView />
    </>
  );
}
