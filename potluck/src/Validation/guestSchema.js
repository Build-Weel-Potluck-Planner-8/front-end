import * as yup from 'yup';

const guestSchema = yup.object().shape({
    invitee: yup
        .string()
        .trim()
        .required('Name is required'),
    plusOne: yup.string(),
    items: yup
        .string()
        .required('Please type what items you will be bringing to the potluck'),
    other: yup.string()
})

export default guestSchema;