import * as yup from 'yup';

const organizerSchema = yup.object().shape({
    host: yup
        .string()
        .trim()
        .required('Name is required'),
    potluck: yup
        .string()
        .trim()
        .required('Potluck name is required'),
    date: yup
        .string()
        .required('Date is required'),
    time: yup
        .string()
        .required('Time is required'),
    location: yup
        .string()
        .required('Location is required'),
    items: yup
        .string()
        .required('Please type what items you would like at your potluck'),
    guests: yup
        .string()
        .required('Please include the names of your guests')
})

export default organizerSchema;