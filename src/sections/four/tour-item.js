import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// utils
import { fDateTime } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { shortDateLabel } from 'src/components/custom-date-range-picker';
import { StyledIcon } from 'src/components/nav-section/vertical/styles';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------
const icon = (name) => (
  <SvgColor src={`/assets/icons/home/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
const ICONS = {
  events: icon('ic_events'),
  company: icon('ic_companypolicies'),
  fastive: icon('ic_festive'),
  helpdesk: icon('ic_helpdesk'),
  internalhrrequest: icon('ic_internalhrrequest'),
  newslatter: icon('ic_newslatter'),
  products: icon('ic_products'),
  requestbusiness: icon('ic_requestbusiness'),
  requestlicense: icon('ic_requestlicense'),
  yellowpage: icon('ic_yellowpage'),
}
export default function TourItem({ tour, onView, onEdit, onDelete }) {
  const popover = usePopover();

  const {
    id,
    title,
    ServiceIcon,
    path,
    desc,
    // images,
    // bookers,
    // createdAt,
   
   
    // destination,
   
  } = tour;

  // const shortLabel = shortDateLabel(available.startDate, available.endDate);

  const renderRating = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 8,
        right: 8,
        zIndex: 9,
        borderRadius: 1,
        position: 'absolute',
        p: '2px 6px 2px 4px',
        typography: 'subtitle2',
        bgcolor: 'warning.lighter',
      }}
    >
      {/* <Iconify icon="eva:star-fill" sx={{ color: 'warning.main', mr: 0.25 }} /> {ratingNumber} */}
    </Stack>
  );

  const renderPrice = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 8,
        left: 8,
        zIndex: 9,
        borderRadius: 1,
        bgcolor: 'grey.800',
        position: 'absolute',
        p: '2px 6px 2px 4px',
        color: 'common.white',
        typography: 'subtitle2',
      }}
    >
      {/* {!!priceSale && (
        <Box component="span" sx={{ color: 'grey.500', mr: 0.25, textDecoration: 'line-through' }}>
          {fCurrency(priceSale)}
        </Box>
      )} */}
      {/* {fCurrency(price)} */}
    </Stack>
  );

  const renderImages = (
    <Stack
      spacing={0.5}
      direction="row"
      sx={{
        justifyContent:"center",
        p: (theme) => theme.spacing(1, 1, 0, 1),
      }}
    >
      <Box sx={{width:"auto", height:"auto", paddingTop:"2rem", }}>
        <StyledIcon sx={{color:"#574394"}} size={80}>{ServiceIcon}</StyledIcon>
      </Box>
      
    </Stack>
  );

  const renderTexts = (
    <ListItemText
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",  
        p: (theme) => theme.spacing(2.5, 2.5, 2, 2.5),
      }}
      primary={
        <Link component={RouterLink} href={
          // paths.dashboard.tour.details(id)
          paths.dashboard[path]
        } color="inherit">
          {title}
        </Link>
      }
      
      secondary={desc}
      primaryTypographyProps={{
        mt: 1,
        noWrap: true,
        component: 'span',
        color: 'text.primary',
        typography: 'subtitle1',
      }}
      secondaryTypographyProps={{
        typography: 'caption',
        color: 'text.disabled',
        paddingBottom:"2rem",
       
      }}
    />
  );



  return (
    <>
      <Card>
        {renderImages}

        {renderTexts}

      </Card>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            onView();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onEdit();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onDelete();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}

TourItem.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
  tour: PropTypes.object,
};
