import isEqual from 'lodash/isEqual';
import { useState, useCallback } from 'react';
// @mui
// import { alpha } from '@mui/material/styles';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// _mock
// import { _userList, _roles, USER_STATUS_OPTIONS } from 'src/_mock';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
// import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
//
import UserTableRow from '../user-table-row';
import UserTableToolbar from '../user-table-toolbar';
import UserTableFiltersResult from '../user-table-filters-result';

// ----------------------------------------------------------------------
const users = [
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"Data Analyst",email:"ashlynn_ohara62@gmail.com",address:"908 Jack Locks",name:"Lucian Obrien",isVerified:true,company:"Gleichner, Mueller and Tromp",country:"United Arab Emirates",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",phoneNumber:"904-966-2836",status:"pending"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c7-1daf80c2d7b1",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
  {id:"e99f09a7-dd88-49d5-b1c6-1daf80c2d7b1",zipCode:"85807",state:"Virginia",city:"Rancho Cordova",role:"HR Manager",email:"nannie_abernathy70@yahoo.com",address:"908 Jack Locks",name:"Jayvion Simon",isVerified:true,company:"Lueilwitz and Sons",country:"Andorra",avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",phoneNumber:"365-374-4961",status:"active"},
]
// const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...USER_STATUS_OPTIONS];


const roles = ["HR Manager","Data Analyst","Legal Counsel","UX/UI Designer","Project Manager","Account Manager","Registered Nurse","Business Analyst","Creative Director","Financial Planner","Event Coordinator","Marketing Director","Software Developer","Research Scientist","Content Strategist","Operations Manager","Sales Representative","Supply Chain Analyst","Operations Coordinator","Customer Service Associate","Quality Assurance Specialist","CEO","CFO","CTO"]





const TABLE_HEAD = [
  { id: 'name', label: 'Name' ,width: 100 },
  { id: 'role', label: 'Role', width: 100 },
  { id: 'company', label: 'Department', width: 220 },
  { id: 'phoneNumber', label: 'Employee ID', width: 180 },
  // { id: 'status', label: 'Status', width: 100 },
  { id: '', width: 88 },
];

const defaultFilters = {
  name: '',
  role: [],
  status: 'all',
};

// ----------------------------------------------------------------------

export default function UserListView() {
  const table = useTable();

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(users);

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 52 : 72;

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      // router.push(paths.dashboard.user.edit(id));
      router.push(paths.dashboard.root);
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Yellow Page"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            // { name: 'User', href: paths.dashboard.user.root },
            {
              name: 'Services',
              href: paths.dashboard.root,
            },
            { name: 'Yellow Page' },
          ]}
          // action={
          //   <Button
          //     component={RouterLink}
          //     // href={paths.dashboard.user.new}
          //     href={paths.dashboard.root}
          //     variant="contained"
          //     startIcon={<Iconify icon="mingcute:add-line" />}
          //   >
          //     New User
          //   </Button>
          // }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          {/* <Tabs
            value={filters.status}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all' || tab.value === filters.status) && 'filled') || 'soft'
                    }
                    color={
                      (tab.value === 'active' && 'success') ||
                      (tab.value === 'pending' && 'warning') ||
                      (tab.value === 'banned' && 'error') ||
                      'default'
                    }
                  >
                    {tab.value === 'all' && _userList.length}
                    {tab.value === 'active' &&
                      _userList.filter((user) => user.status === 'active').length}

                    {tab.value === 'pending' &&
                      _userList.filter((user) => user.status === 'pending').length}
                    {tab.value === 'banned' &&
                      _userList.filter((user) => user.status === 'banned').length}
                    {tab.value === 'rejected' &&
                      _userList.filter((user) => user.status === 'rejected').length}
                  </Label>
                }
              />
            ))}
          </Tabs> */}

          <UserTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            roleOptions={roles}
          />

          {canReset && (
            <UserTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters }) {
  const { name, status, role } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((user) => user.status === status);
  }

  if (role.length) {
    inputData = inputData.filter((user) => role.includes(user.role));
  }

  return inputData;
}
