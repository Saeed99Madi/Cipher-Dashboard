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
    festive: `${ROOTS.DASHBOARD}/festive`,
    help_desk: `${ROOTS.DASHBOARD}/help-desk`,
    company_policies: `${ROOTS.DASHBOARD}/company-policies`,
    news_latters: `${ROOTS.DASHBOARD}/news-latters`,
    yellow_page: `${ROOTS.DASHBOARD}/yellow-page`,
    reqs_business: `${ROOTS.DASHBOARD}/reqs-business`,
    internal_hr_reqs: `${ROOTS.DASHBOARD}/internal-hr-reqs`,
    reqs_software_license: `${ROOTS.DASHBOARD}/reqs-software-license`,
    details: (id) => `${ROOTS.DASHBOARD}/details/${id}`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
