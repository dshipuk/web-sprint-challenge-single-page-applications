import * as yup from 'yup'

const pizzaScheme = yup.object().shape({
    name: yup
    .string()
    .required("Name Required")
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .required("Please Select a Size"),
    special: yup
    .string()
    .notRequired()
})

export default pizzaScheme;