import orderBy from 'lodash/orderBy';
import { useState, useCallback } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fTimestamp } from 'src/utils/format-time';
// _mock
import { _tours, _tourGuides, TOUR_SERVICE_OPTIONS, TOUR_SORT_OPTIONS } from 'src/_mock/_tour';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import SvgColor from 'src/components/svg-color';
import TourList from '../tour-list';
import TourSort from '../tour-sort';
import TourSearch from '../tour-search';
import TourFilters from '../tour-filters';
import TourFiltersResult from '../tour-filters-result';

// ----------------------------------------------------------------------

const defaultFilters = {
  destination: [],
  tourGuides: [],
  services: [],
  startDate: null,
  endDate: null,
};
const icon = (name) => (
  <SvgColor src={`/assets/icons/home/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
const ICONS = {
  events: icon('ic_events'),
  sso: icon('ic_sso'),
  company: icon('ic_companypolicies'),
  fastive: icon('ic_festive'),
  helpdesk: icon('ic_helpdesk'),
  internalJobOpening: icon('ic_internaljoboppeining'),
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
  {id:2, path:"help_desk", title: "internal Job Opening", ServiceIcon : ICONS.internalJobOpening, desc:"Card Full Details"},
  {id:4, path:"company_policies", title: "Company's Policies", ServiceIcon : ICONS.companypolicies, desc:"Card Full Details"},
  {id:9, path:"news_latters", title: "Newsletter", ServiceIcon : ICONS.newslatter, desc:"Card Full Details"},
  {id:8, path:"yellow_page", title: "Yellow Page", ServiceIcon : ICONS.yellowpage, desc:"Card Full Details"},
  {id:10, path:"reqs_business", title: "Request business Card", ServiceIcon : ICONS.requestbusiness, desc:"Card Full Details"},
  {id:5, path:"internal_hr_reqs", title: "Internal HR Requests integration with ERP", ServiceIcon : ICONS.internalhrrequest, desc:"Card Full Details"},
  {id:11, path:"reqs_software_license", title: "Request Software license", ServiceIcon : ICONS.requestlicense, desc:"Card Full Details"},
]

// ----------------------------------------------------------------------

export default function TourListView() {
  const settings = useSettingsContext();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('latest');

  const [search, setSearch] = useState({
    query: '',
    results: [],
  });

  const [filters, setFilters] = useState(defaultFilters);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const dataFiltered = applyFilter({
    inputData: SercicesList,
    filters,
    sortBy,
    dateError,
  });
  // console.log(_tours, "_tours")

  const canReset =
    (!!filters.startDate && !!filters.endDate);

  const notFound = !dataFiltered.length && canReset;

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback(
    (inputValue) => {
      setSearch((prevState) => ({
        ...prevState,
        query: inputValue,
      }));

      if (inputValue) {
        const results = _tours.filter(
          (tour) => tour.name.toLowerCase().indexOf(search.query.toLowerCase()) !== -1
        );

        setSearch((prevState) => ({
          ...prevState,
          results,
        }));
      }
    },
    [search.query]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <TourSearch
        query={search.query}
        results={search.results}
        onSearch={handleSearch}
        hrefItem={(id) => paths.dashboard.two}
        // hrefItem={(id) => paths.dashboard.tour.details(id)}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <TourFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          serviceOptions={TOUR_SERVICE_OPTIONS.map((option) => option.label)}
          tourGuideOptions={_tourGuides}
          destinationOptions={countries}
          //
          dateError={dateError}
        />

        <TourSort sort={sortBy} onSort={handleSortBy} sortOptions={TOUR_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <TourFiltersResult
      filters={filters}
      onResetFilters={handleResetFilters}
      //
      canReset={canReset}
      onFilters={handleFilters}
      //
      results={dataFiltered.length}
    />
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="List"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Tour',
            href: paths.dashboard.root,
          },
          { name: 'List' },
        ]}
        // action={
        //   <Button
        //     component={RouterLink}
        //     href={paths.dashboard.two}
        //     variant="contained"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //   >
        //     New Tour
        //   </Button>
        // }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {notFound && <EmptyContent title="No Data" filled sx={{ py: 10 }} />}

      <TourList tours={dataFiltered} />
    </Container>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({ inputData, filters, sortBy, dateError }) => {
  const { services, destination, startDate, endDate, tourGuides } = filters;

  const tourGuideIds = tourGuides.map((tourGuide) => tourGuide.id);

  // SORT BY
  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  // FILTERS
  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (tour) =>
          fTimestamp(tour.available.startDate) >= fTimestamp(startDate) &&
          fTimestamp(tour.available.endDate) <= fTimestamp(endDate)
      );
    }
  }

  if (destination.length) {
    inputData = inputData.filter((tour) => destination.includes(tour.destination));
  }

  if (tourGuideIds.length) {
    inputData = inputData.filter((tour) =>
      tour.tourGuides.some((filterItem) => tourGuideIds.includes(filterItem.id))
    );
  }

  if (services.length) {
    inputData = inputData.filter((tour) => tour.services.some((item) => services.includes(item)));
  }

  return inputData;
};
