import * as yup from 'yup'

const pizzaScheme = yup.object().shape({
    clientname: yup
    .string()
    .required("Name Required")
    .min(2, "name must be at least 2 characters"),
    specialtext: yup
    .string()
    .notRequired()
})

export default pizzaScheme;