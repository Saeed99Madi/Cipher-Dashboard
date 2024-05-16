import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {  useMemo, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Switch from '@mui/material/Switch';
// import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControlLabel from '@mui/material/FormControlLabel';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';

import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hooks';
import FormProvider, {
  RHFAutocomplete,
  // RHFEditor,
  // RHFUpload,
  RHFTextField,
} from 'src/components/hook-form';
import { Chip } from '@mui/material';

// ----------------------------------------------------------------------
const companyDepartments = [
  "Human Resources",
  "Finance",
  "Marketing",
  "Sales",
  "Customer Service",
  "Information Technology",
  "Research and Development",
  "Operations",
  "Legal",
  "Public Relations",
  "Supply Chain Management",
  "Quality Assurance",
  "Administration",
  "Product Management",
  "Business Development",
  "Accounting",
  "Engineering",
  "Design",
  "Training and Development",
  "Security",
  "Purchasing",
  "Logistics",
  "Compliance",
  "Risk Management"
];
const companyProjects = [
  "New Product Development",
  "Market Research",
  "Brand Identity Redesign",
  "Sales Expansion into New Markets",
  "Customer Satisfaction Improvement Initiative",
  "Website Redesign",
  "Software Development",
  "Supply Chain Optimization",
  "Cost Reduction Program",
  "Employee Training and Development",
  "Corporate Social Responsibility Campaign",
  "Quality Control Enhancement",
  "Merger or Acquisition Integration",
  "Strategic Partnership Development",
  "Process Automation",
  "Digital Marketing Campaign",
  "Infrastructure Upgradation",
  "Sustainability Initiative",
  "Product Launch Event Planning",
  "Customer Relationship Management (CRM) Implementation",
  "Data Analytics and Business Intelligence Project",
  "Employee Wellness Program",
  "Facilities Expansion or Renovation",
  "Regulatory Compliance Project"
];

export default function ProductNewEditForm({ currentProduct }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const [includeTaxes, setIncludeTaxes] = useState(false);

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    images: Yup.array().min(1, 'Images is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().moreThan(0, 'Price should not be $0.00'),
    description: Yup.string().required('Description is required'),
    // not required
    taxes: Yup.number(),
    newLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
    saleLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      subDescription: currentProduct?.subDescription || '',
      images: currentProduct?.images || [],
      //
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      quantity: currentProduct?.quantity || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [],
      taxes: currentProduct?.taxes || 0,
      gender: currentProduct?.gender || '',
      category: currentProduct?.category || '',
      colors: currentProduct?.colors || [],
      sizes: currentProduct?.sizes || [],
      newLabel: currentProduct?.newLabel || { enabled: false, content: '' },
      saleLabel: currentProduct?.saleLabel || { enabled: false, content: '' },
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    // watch,
    setValue,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  // const values = watch();

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  useEffect(() => {
    if (includeTaxes) {
      setValue('taxes', 0);
    } else {
      setValue('taxes', currentProduct?.taxes || 0);
    }
  }, [currentProduct?.taxes, includeTaxes, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.product.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });


  

  const renderDetails = (
    
      <Grid xs={12} md={12}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}
         
          <Stack spacing={3} sx={{ p: 3 }}>
          <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Department</Typography>
                  <RHFTextField name="name" placeholder="Department" />
                </Stack>
          <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2 , 1fr)',
              }}
            >
              
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Employee ID</Typography>
                  <RHFTextField name="name" type="number" />
                </Stack>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Employee Name</Typography>
                  <RHFTextField name="name" placeholder="Mohamed Abduallah" />
                </Stack>
            </Box>
            <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Leave Information</Typography>
                  <RHFTextField name="name" placeholder="Leave Information" />
                </Stack>
         
             <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Reason</Typography>
                 
            <RHFTextField name="reason" placeholder="Reason" multiline rows={4} />
                </Stack>

          </Stack>
        </Card>
      </Grid>
  
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={12} sx={{ display: 'flex', flexDirection:"row-reverse", alignItems: 'center' }}>
        {/* <FormControlLabel
          control={<Switch defaultChecked />}
          label="Publish"
          sx={{ flexGrow: 1, pl: 3 }}
        /> */}

        <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
          Submit
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}

ProductNewEditForm.propTypes = {
  currentProduct: PropTypes.object,
};
