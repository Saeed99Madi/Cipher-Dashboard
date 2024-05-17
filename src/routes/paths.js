// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    seven: `${ROOTS.DASHBOARD}/seven`,
    account: `${ROOTS.DASHBOARD}/account`,
    department: `${ROOTS.DASHBOARD}/department`,
    inbox: `${ROOTS.DASHBOARD}/inbox`,
    services: `${ROOTS.DASHBOARD}/services`,
    todolist: `${ROOTS.DASHBOARD}/todolist`,
    events: `${ROOTS.DASHBOARD}/events`,
    sso: `${ROOTS.DASHBOARD}/sso`,
    products: `${ROOTS.DASHBOARD}/products`,
    help_desk: `${ROOTS.DASHBOARD}/help-desk`,
    company_policies: `${ROOTS.DASHBOARD}/company-policies`,
    news_latters: `${ROOTS.DASHBOARD}/news-latters`,
    yellow_page: `${ROOTS.DASHBOARD}/yellow-page`,
    reqs_business: `${ROOTS.DASHBOARD}/reqs-business`,
    internal_hr_reqs: `${ROOTS.DASHBOARD}/internal-hr-reqs`,
    reqs_software_license: `${ROOTS.DASHBOARD}/reqs-software-license`,
    festive: `${ROOTS.DASHBOARD}/festive`,
    // HR Requests Pages Start 
    overtimerequest: `${ROOTS.DASHBOARD}/overtimerequest`,
    overtimepayrequest: `${ROOTS.DASHBOARD}/overtimepayrequest`,
    travelrequest: `${ROOTS.DASHBOARD}/travelrequest`,
    leavepermission: `${ROOTS.DASHBOARD}/leavepermission`,
    workoutsideofficepermission: `${ROOTS.DASHBOARD}/workoutsideofficepermission`,
    updatemyinformation: `${ROOTS.DASHBOARD}/updatemyinformation`,
    employmentletter: `${ROOTS.DASHBOARD}/employmentletter`,
    fixationofsalary: `${ROOTS.DASHBOARD}/fixationofsalary`,
    training: `${ROOTS.DASHBOARD}/training`,
    cancelleaveapplication: `${ROOTS.DASHBOARD}/cancelleaveapplication`,
    vacationrequest: `${ROOTS.DASHBOARD}/vacationrequest`,
    // HR Requests Pages End 
    details: (id) => `${ROOTS.DASHBOARD}/details/${id}`,
    // products: {
    //   root: `${ROOTS.DASHBOARD}/products`,
    //   details: (id) => `${ROOTS.DASHBOARD}/details/${id}`,
     
    // },
  },
};
