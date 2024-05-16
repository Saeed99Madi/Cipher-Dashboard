/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {  useMemo, useEffect, useState, useCallback } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
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
  RHFUpload,
} from 'src/components/hook-form';
import { Button, Chip, Divider } from '@mui/material';
import Iconify from 'src/components/iconify';

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
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('coverUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', null);
  }, [setValue]);

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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const handleAdd = () => {
    append({
      title: '',
      description: '',
      service: '',
      
    });
  };
  const handleRemove = (index) => {
    remove(index);
  };
  useEffect(()=>{
    // eslint-disable-next-line eqeqeq
    fields.length > 0 ? console.log("saeed") : (()=>{
      console.log("saeed what the fuck")
      handleAdd()
    })() ;
  },[])

  

  const renderDetails = (
    
      <Grid xs={12} md={12}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}
         
          <Stack spacing={3} sx={{ p: 3 }}>
         
          <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Employee ID</Typography>
                  <RHFTextField name="name" type="number" />
                </Stack>
              

                <Stack spacing={1.5}>
              <Typography variant="subtitle2">Status</Typography>
              <RHFAutocomplete
                name="department"
                placeholder="Choose from the list"
                
                disableCloseOnSelect
                options={companyDepartments.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>


            </Box>
           
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Employee Name</Typography>
                  <RHFTextField name="name" placeholder="Employee Name" />
                </Stack>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Position</Typography>
                  <RHFTextField name="name" placeholder="Position" />
                </Stack>
         
            
            </Box>


            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
               <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Department</Typography>
                  <RHFTextField name="name" placeholder="Department" />
                </Stack>

                <Stack spacing={1.5}>
                <Typography variant="subtitle2">Date of joining employment</Typography>
                <Controller
                  name="dateOfJoiningEmployment"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      format="dd/MM/yyyy"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!error,
                          helperText: error?.message,
                        },
                      }}
                    />
                  )}
                />
              </Stack>
            </Box>


            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
             

             <Stack spacing={1.5}>
              <Typography variant="subtitle2">Passport</Typography>
              <RHFUpload
                name="coverUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                onDelete={handleRemoveFile}
              />
            </Stack>
            <Stack spacing={1.5}>
                <Typography variant="subtitle2">Passport Expiry Date</Typography>
                <Controller
                  name="passportexpirydate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      format="dd/MM/yyyy"
                      placeholder="Select Date"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!error,
                          helperText: error?.message,
                        },
                      }}
                    />
                  )}
                />
              </Stack>


            </Box>

            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
                Family Members:
              </Typography>

      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
              <RHFTextField
                size="small"
                name={`items[${index}].title`}
                label="Name"
                InputLabelProps={{ shrink: true }}
              />

              <RHFTextField
                size="small"
                name={`items[${index}].description`}
                label="Relationship"
                InputLabelProps={{ shrink: true }}
              />
               <RHFTextField
                size="small"
                name={`items[${index}].description`}
                label="ID"
                InputLabelProps={{ shrink: true }}
              />
               <RHFTextField
                size="small"
                name={`items[${index}].description`}
                label="Passport"
                InputLabelProps={{ shrink: true }}
              />
               <RHFTextField
                size="small"
                name={`items[${index}].description`}
                label="Birthday"
                InputLabelProps={{ shrink: true }}
              />


                          </Stack>

            <Button
              size="small"
              color="error"
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-end', md: 'center' }}
      >
        <Button
          size="small"
          color="primary"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Add Family Members
        </Button>

       
      </Stack>

     
    </Box>
         


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
