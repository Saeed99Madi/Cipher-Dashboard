import PropTypes from 'prop-types';
import { useEffect, useCallback, useState } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { useGetPost } from 'src/api/blog';
// components
// import Iconify from 'src/components/iconify';
// import EmptyContent from 'src/components/empty-content';
import { useParams } from 'react-router';
//
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import PostDetailsHero from '../post-details-hero';

// import { PostDetailsSkeleton } from '../post-skeleton';


// ----------------------------------------------------------------------
const posts = [
  {
    title:"Cyber Threat Intelligence",
    description:"Cipher provides a unique Cyber Threat Intelligence Fusion Center that combines the real-time feeds from multiple multi-national open-source and commercial services. We further tailor the combined threat intelligence to address the risks targeting each industry sector within The Kingdom. We leverage share incident information to further analyze and assess the threat/attack landscape, picking up information from the region that other feeds miss.",
    coverUrl:"https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"Smart SOC",
    description:"Cipher’s state-of-the-art Security Operations Center provides 24x7x365 monitoring, managed endpoint threat detection, and real-time incident response (MDR). The Services utilize artificial intelligence and machine learning automation to assist our team of experts in their always-on MDR monitoring. Cipher provides a quick onboarding process that reduces the need to buy any additional software applications or licenses — we provide everything you need to ensure your laptops, desktops, and servers stay protected at all times.",
    coverUrl:"https://images.unsplash.com/photo-1715586042479-256282ff3cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"Advisory",
    description:"Every organization has some level of exposure. At Cipher, we aim to help you find the risks you have and mitigate them to a level that is acceptable to your business. We offer a number of services tailored to your industry sector and business size, including penetration testing; vulnerability assessments; governance, risk and compliance evaluations; cybersecurity awareness training; and virtual CISO services.",
    coverUrl:"https://images.unsplash.com/photo-1715586042479-256282ff3cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title:"Cipher Innovation",
    description:"At Cipher, we pride ourselves on making smart technology research and development investments designed to solve the specific, hard problems that matter in the region. We are not chasing broad commercial problems with the goal of gaining a huge venture capital return; rather, we are focused on solving the cyber problems that need resolution.",
    coverUrl:"https://images.unsplash.com/photo-1715586042479-256282ff3cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
export default function PostDetailsView({ title }) {
  const {id} = useParams()
  const [ details, setDetails ] = useState(null)
  useEffect(() => {
    setDetails(posts[id])
  }, [id])

  // const [publish, setPublish] = useState('');

  // const { post, postLoading, postError } = useGetPost(title);

  // const handleChangePublish = useCallback((newValue) => {
  //   setPublish(newValue);
  // }, []);

  // useEffect(() => {
  //   if (post) {
  //     setPublish(post?.publish);
  //   }
  // }, [post]);

  // const renderSkeleton = <PostDetailsSkeleton />;

  // const renderError = (
  //   <EmptyContent
  //     filled
  //     title={`${postError?.message}`}
  //     action={
  //       <Button
  //         component={RouterLink}
  //         href={paths.dashboard.root}
  //         startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
  //         sx={{ mt: 3 }}
  //       >
  //         Back to List
  //       </Button>
  //     }
  //     sx={{
  //       py: 20,
  //     }}
  //   />
  // );

  const renderPost = details && (
    <>
    
    <CustomBreadcrumbs
        heading="Company Products"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Services',
            href: paths.dashboard.root,
          },
          {
            name: 'products & services',
            href: paths.dashboard.products,
          },
          { name: details.title },
        ]}
       
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <PostDetailsHero title={details.title} coverUrl={details.coverUrl} />

      <Stack
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          mt: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 5 }}>
          {details.description}
        </Typography>
      </Stack>
    </>
  );

  return (
    <Container maxWidth={false}>
     
      {/* {postLoading && renderSkeleton}

      {postError && renderError} */}

      {renderPost}
    </Container>
  );
}

PostDetailsView.propTypes = {
  title: PropTypes.string,
};
