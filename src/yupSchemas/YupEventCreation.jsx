import * as Yup from 'yup'

export const EventValidation = Yup.object({
    eventName: Yup.string().required('Event Name is required'),
    eventDateTime: Yup.date()
      .required('Event Date and Time is required')
      .min(new Date(), 'Select upcoming date and time'),
    eventDescription: Yup.string().required('Event Description is required'),
    eventUrl: Yup.string().url('Invalid URL format').required("'URL' is required"),
  })