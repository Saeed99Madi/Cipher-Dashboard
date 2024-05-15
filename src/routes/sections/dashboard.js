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
const AccountPage = lazy(() => import('src/pages/dashboard/Account'));
const DepartmentPage = lazy(() => import('src/pages/dashboard/Department'));
const InboxPage = lazy(() => import('src/pages/dashboard/Inbox'));
const ServicesPage = lazy(() => import('src/pages/dashboard/Services'));
const ToDoListPage = lazy(() => import('src/pages/dashboard/ToDoList'));
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

const Overtimerequest = lazy(() => import('src/pages/dashboard/OvertimeRequest'));
const Overtimepayrequest = lazy(() => import('src/pages/dashboard/OvertimePayRequest'));
const Travelrequest = lazy(() => import('src/pages/dashboard/TravilRequest'));
const Leavepermission = lazy(() => import('src/pages/dashboard/LeavePermission'));
const Workoutsideofficepermission = lazy(() => import('src/pages/dashboard/WorkoutsideofficePermission'));
const Updatemyinformation = lazy(() => import('src/pages/dashboard/UpdateMyInfo'));
const Employmentletter = lazy(() => import('src/pages/dashboard/EmploymentLatter'));
const Fixationofsalary = lazy(() => import('src/pages/dashboard/FixationOfSalary'));
const Training = lazy(() => import('src/pages/dashboard/Training'));
const Cancelleaveapplication = lazy(() => import('src/pages/dashboard/CanceleLeaveApplication'));
const Vacationrequest = lazy(() => import('src/pages/dashboard/VacationRequest'));

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
      { path: 'account', element: <AccountPage /> },
      { path: 'department', element: <DepartmentPage /> },
      { path: 'inbox', element: <InboxPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'todolist', element: <ToDoListPage /> },
      { path: 'events', element: <PageFive /> },

      // Services Pages Start
      { path: 'sso', element: <Sso /> },
      { path: 'products', element: <ProductsAndServices /> },
      { path: 'help-desk', element: <HelpDesk /> },
      { path: 'internal-hr-reqs', element: <InternalHrReqs /> },
      { path: 'reqs-software-license', element: <ReqsSoftwareLicense /> },
      { path: 'yellow-page', element: <YellowPage /> },
      { path: 'company-policies', element: <CompanyPolicies /> },
      { path: 'news-latters', element: <NewsLatters /> },
      { path: 'reqs-business', element: <ReqsBusiness /> },
      { path: 'festaive', element: <Festaive /> },
      // Services Pages End

      // HR Requests pages Start
      { path: 'Overtimerequest', element: <Overtimerequest /> },
      { path: 'Overtimepayrequest', element: <Overtimepayrequest /> },
      { path: 'Travelrequest', element: <Travelrequest /> },
      { path: 'Leavepermission', element: <Leavepermission /> },
      { path: 'Workoutsideofficepermission', element: <Workoutsideofficepermission /> },
      { path: 'Updatemyinformation', element: <Updatemyinformation /> },
      { path: 'Employmentletter', element: <Employmentletter /> },
      { path: 'Fixationofsalary', element: <Fixationofsalary /> },
      { path: 'Training', element: <Training /> },
      { path: 'Cancelleaveapplication', element: <Cancelleaveapplication /> },
      { path: 'Vacationrequest', element: <Vacationrequest /> },
      // HR Requests pages End
      
      // { path: 'three', element: <PageThree /> },
      // { path: 'seven', element: <PageSeven /> },
      // { path: 'details/:id', element: <DetailsPage /> },
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
