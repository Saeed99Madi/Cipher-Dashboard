import PropTypes from 'prop-types';
import { useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
// routes
import { paths } from 'src/routes/paths';
// components
import { useRouter } from 'src/routes/hooks';
//
import SvgColor from 'src/components/svg-color';

// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import TourItem from './tour-item';
// ----------------------------------------------------------------------
const icon = (name) => (
  <SvgColor src={`/assets/icons/home/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
const ICONS = {
  events: icon('ic_events'),
  sso: icon('ic_sso'),
  company: icon('ic_companypolicies'),
  fastive: icon('ic_festive'),
  helpdesk: icon('ic_helpdesk'),
  internalhrrequest: icon('ic_internalhrrequest'),
  newslatter: icon('ic_newslatter'),
  products: icon('ic_products'),
  requestbusiness: icon('ic_requestbusiness'),
  requestlicense: icon('ic_requestlicense'),
  yellowpage: icon('ic_yellowpage'),
  companypolicies: icon('ic_companypolicies'),
}
const SercicesList = [
  {id:1, path:"sso", title: "SSO - integrate with Office 365", ServiceIcon : ICONS.sso, desc:"Card Full Details"},
  {id:6, path:"products", title: "Products and services", ServiceIcon : ICONS.products, desc:"Card Full Details"},
  {id:7, path:"festive", title: "Festive Greeting Cards", ServiceIcon : ICONS.fastive, desc:"Card Full Details"},
  {id:3, path:"events", title: "Events", ServiceIcon : ICONS.events, desc:"Card Full Details"},
  {id:2, path:"help_desk", title: "Help Desk", ServiceIcon : ICONS.helpdesk, desc:"Card Full Details"},
  {id:4, path:"company_policies", title: "Company's Policies", ServiceIcon : ICONS.companypolicies, desc:"Card Full Details"},
  {id:9, path:"news_latters", title: "Newsletter", ServiceIcon : ICONS.newslatter, desc:"Card Full Details"},
  {id:8, path:"yellow_page", title: "Yellow Page", ServiceIcon : ICONS.yellowpage, desc:"Card Full Details"},
  {id:10, path:"reqs_business", title: "Request business Card", ServiceIcon : ICONS.requestbusiness, desc:"Card Full Details"},
  {id:5, path:"internal_hr_reqs", title: "Internal HR Requests integration with ERP", ServiceIcon : ICONS.internalhrrequest, desc:"Card Full Details"},
  {id:11, path:"reqs_software_license", title: "Request Software license", ServiceIcon : ICONS.requestlicense, desc:"Card Full Details"},

]
export default function TourList({ tours }) {
  const router = useRouter();

  const handleView = useCallback(
    (id) => {
      router.push(paths.dashboard.tour.details(id));
    },
    [router]
  );

  const handleEdit = useCallback(
    (id) => {
      router.push(paths.dashboard.tour.edit(id));
    },
    [router]
  );

  const handleDelete = useCallback((id) => {
    console.info('DELETE', id);
  }, []);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {SercicesList.map((tour) => (
          <TourItem
            key={tour.id}
            tour={tour}
            onView={() => handleView(tour.id)}
            onEdit={() => handleEdit(tour.id)}
            onDelete={() => handleDelete(tour.id)}
          />
        ))}
      </Box>

      {tours.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

TourList.propTypes = {
  tours: PropTypes.array,
};
