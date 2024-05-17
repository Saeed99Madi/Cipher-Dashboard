import orderBy from 'lodash/orderBy';
import { useCallback, useState } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useDebounce } from 'src/hooks/use-debounce';
// _mock
// import { sortOptions } from 'src/_mock';
// api
import { useGetPosts, useSearchPosts } from 'src/api/blog';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import PostListHorizontal from '../post-list-horizontal';

// ----------------------------------------------------------------------

const defaultFilters = {
  publish: 'all',
};

const posts = [
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d3b1",
  metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
  coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
  metaDescription:"The starting point for your next project with Minimal UI Kit",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
metaTitle:"Minimal UI Kit",createdAt:"2024-05-17T20:51:20.139Z",title:"10 Essential Tips for Healthy Living",
coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
metaDescription:"The starting point for your next project with Minimal UI Kit",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
},
]






// ----------------------------------------------------------------------
const sortOptions = [{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}]
export default function PostListView() {
  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState('latest');

  const [filters, setFilters] = useState(defaultFilters);

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  // const { posts, postsLoading } = useGetPosts();

  const { searchResults, searchLoading } = useSearchPosts(debouncedQuery);

  const dataFiltered = applyFilter({
    inputData: posts,
    filters,
    sortBy,
  });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSearch = useCallback((inputValue) => {
    setSearchQuery(inputValue);
  }, []);

  const handleFilterPublish = useCallback(
    (event, newValue) => {
      handleFilters('publish', newValue);
    },
    [handleFilters]
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="List"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Services',
            href: paths.dashboard.root,
          },
          {
            name: 'News Latter',
          },
        ]}
        // action={
        //   <Button
        //     component={RouterLink}
        //     href={paths.dashboard.root}
        //     // href={paths.dashboard.post.new}
        //     variant="contained"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //   >
        //     New Post
        //   </Button>
        // }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <PostSearch
          query={debouncedQuery}
          results={searchResults}
          onSearch={handleSearch}
          loading={searchLoading}
          hrefItem={(title) => paths.dashboard.root}
          // hrefItem={(title) => paths.dashboard.post.details(title)}
        />

        <PostSort sort={sortBy} onSort={handleSortBy} sortOptions={sortOptions} />
      </Stack>

      <PostListHorizontal posts={dataFiltered}  />
    </Container>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({ inputData, filters, sortBy }) => {
  const { publish } = filters;

  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  if (publish !== 'all') {
    inputData = inputData.filter((post) => post.publish === publish);
  }

  return inputData;
};
