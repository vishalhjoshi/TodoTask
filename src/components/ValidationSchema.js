import * as Yup from 'yup';



// export const AddMemberSchema = Yup.object().shape({
//     type: Yup.string(),
//     legal_name: Yup.string().when('type', {
//       is: (value) => value !== '2' && value !== '5',
//       then: Yup.string().required('Legal Name is required'),
//       otherwise: Yup.string().nullable()
//     }),
//     acn: Yup.string().when('type', {
//       is: (value) => value !== '3' && value !== '4' && value !== '5',
//       then: Yup.string()
//         // .typeError('String value is not required.')
//         .min(0, 'acn must be min 0')
//         .max(9, 'acn must be equal to 9.')
//         .matches(/^[0-9]*$/, 'Only numbers are allowed for acn. '),
//       otherwise: Yup.string().nullable()
//     }),
//     abn: Yup.string().when('type', {
//       is: (value) => Boolean(value !== '5'),
//       then: Yup.string()
//         .min(0, 'abn must be min 0.')
//         .max(11, 'abn must be less than or equal to 11.')
//         .matches(/^[0-9]*$/, 'Only numbers are allowed for abn. '),
//       // .typeError('String value is not required.')
  
//       otherwise: Yup.string().nullable()
//     }),
//     title_name: Yup.string().when('type', {
//       is: (value) => Boolean(value === '5'),
//       then: Yup.string().required('Title is required.'),
//       otherwise: Yup.string().nullable()
//     }),
//     trust_name: Yup.string().when('type', {
//       is: (value) => Boolean(value === '2'),
//       then: Yup.string().required('Trust name is required.'),
//       otherwise: Yup.string().nullable()
//     })
  
//     // -----------***-------------
//     // acn: Yup.string().required('max length 9 is required.'),
//     // .test('Must be exactly 9 characters', (val) => val.length === 9),
//     // .test('Must be exactly 11 characters', (val) => val.length === 11),
//     // trading_name: Yup.string().required('Trading Name is required.'),
//     // activity: Yup.string().required('Activity is required.'),
//     // website: Yup.string().required('Website is required.'),
//     // trustee_name: Yup.string().required('Trustee name is required.'),
//     // directors: Yup.string().required('director name is required.')
//   });
  

  export const ToDoUserSchema = Yup.object().shape({
name: Yup.string().required("Name is required")
.matches(/^[aA-zZ\s]+$/, "Only numbers are allowed for this field "),
email: Yup.string().required("Email is required").matches( /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Invalid Email"),
mobile:Yup.string().required("Mobile no is required").matches(/^[0-9]*$/, 'Only numbers are allowed for abn. '),
project:Yup.string().required("Project Name is required").matches(/^[A-Z\s]+$/, 'Project Name should be in Alphabate'),
task:Yup.string().required("Task is required").min(3, "minimum length must be 3").max(30, 'max length must be 30'),
start_time:Yup.date().required("start date is required").default(() => new Date()),
end_time: Yup.date().required("end date is required").when("start_time",
    (start_time, schema) => start_time && schema.min(start_time)),
// status: Yup.boolean().required("status is required"),
  })