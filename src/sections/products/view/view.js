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


// import TourSearch from '../four/tour-search';
//
import SvgColor from 'src/components/svg-color';
import TourList from '../../four/tour-list';
import TourSort from '../../four/tour-sort';
import TourSearch from '../../four/tour-search';
import TourFilters from '../../four/tour-filters';
import TourFiltersResult from '../../four/tour-filters-result';

// ----------------------------------------------------------------------

const defaultFilters = {
  destination: [],
  tourGuides: [],
  services: [],
  startDate: null,
  endDate: null,
};

const icon = (name) => (
  
  <SvgColor src={`/assets/icons/cipherProducts/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
const ICONS = {
  advisory: icon('ic_advisory'),
  cipherInnovation: icon('ic_cipherInnovation'),
  cyberThreatIntelligence: icon('ic_cyberThreatIntelligence'),
  smartSOC: icon('ic_smartSOC'),
 
 
}
const SercicesList = [
  {id:1, idPath:0 , title: "Advisory", ServiceIcon : ICONS.advisory, desc:"Card Full Details"},
  {id:2, idPath:1 , title: "Cipher Innovation", ServiceIcon : ICONS.cipherInnovation, desc:"Card Full Details"},
  {id:3, idPath:2 , title: "Cyber Threat Intelligence", ServiceIcon : ICONS.cyberThreatIntelligence, desc:"Card Full Details"},
  {id:4, idPath:3 , title: "Smart SOC", ServiceIcon : ICONS.smartSOC, desc:"Card Full Details"}
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
  console.log(_tours, "_tours")

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
        heading="Company Products"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Services',
            href: paths.dashboard.root,
          },
          { name: 'Company Products' },
        ]}
       
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
