import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
// import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
// const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
const EventsPage = lazy(() => import('src/pages/dashboard/Events'));
const Sso = lazy(() => import('src/pages/dashboard/Sso'));
const ProductsAndServices = lazy(() => import('src/pages/dashboard/ProductsAndServices'));
const HelpDesk = lazy(() => import('src/pages/dashboard/HelpDesk'));
const InternalHrReqs = lazy(() => import('src/pages/dashboard/InternalHrReqs'));
const ReqsSoftwareLicense = lazy(() => import('src/pages/dashboard/ReqsSoftwareLicense'));
const YellowPage = lazy(() => import('src/pages/dashboard/YellowPage'));
const CompanyPolicies = lazy(() => import('src/pages/dashboard/CompanyPolicies'));
const Festaive = lazy(() => import('src/pages/dashboard/Festaive'));
const NewsLatters = lazy(() => import('src/pages/dashboard/NewsLatters'));
const ReqsBusiness = lazy(() => import('src/pages/dashboard/reqsBusiness'));
const DetailsPage = lazy(() => import('src/pages/dashboard/DetailsPage'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <PageFour />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'sso', element: <Sso /> },
      { path: 'products', element: <ProductsAndServices /> },
      { path: 'help-desk', element: <HelpDesk /> },
      { path: 'internal-hr-reqs', element: <InternalHrReqs /> },
      { path: 'reqs-software-license', element: <ReqsSoftwareLicense /> },
      { path: 'yellow-page', element: <YellowPage /> },
      { path: 'company-policies', element: <CompanyPolicies /> },
      { path: 'festaive', element: <Festaive /> },
      { path: 'news-latters', element: <NewsLatters /> },
      { path: 'reqs-business', element: <ReqsBusiness /> },
      // { path: 'three', element: <PageThree /> },
      // { path: 'seven', element: <PageSeven /> },
      { path: 'details/:id', element: <DetailsPage /> },
      {
        path: 'group',
        children: [
          // { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
