import React from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

import './EventCreation.css';
import { EventValidation } from '../../../yupSchemas/YupEventCreation';
import { eventCreation } from '../../../services/AdminApi'

const EventCreation = () => {
    const formik = useFormik({
        initialValues: {
            eventName: '',
            eventDateTime: '',
            eventDescription: '',
            eventUrl: '',
        },
        validationSchema: EventValidation,
        onSubmit: (values) => {
            eventCreation(values).then((data) => {
                console.log(data);
                toast.success('Event Created Successfully')
                formik.resetForm();
            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message)
            })
            console.log('Event created:', values);
        },
    });

    return (
        <div className="admin-top">
            <h2 style={{ color: 'white', marginTop: '40px' }}>Create Event</h2>
            <div className="create-event-form">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formik.values.eventName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.eventName && formik.errors.eventName && (
                        <div className="error">{formik.errors.eventName}</div>
                    )}

                    <label htmlFor="eventDateTime">Event Date and Time:</label>
                    <input
                        type="datetime-local"
                        id="eventDateTime"
                        name="eventDateTime"
                        value={formik.values.eventDateTime}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.eventDateTime && formik.errors.eventDateTime && (
                        <div className="error">{formik.errors.eventDateTime}</div>
                    )}

                    <label htmlFor="eventDescription">Event Description:</label>
                    <textarea
                        id="eventDescription"
                        name="eventDescription"
                        value={formik.values.eventDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.eventDescription && formik.errors.eventDescription && (
                        <div className="error">{formik.errors.eventDescription}</div>
                    )}

                    <label htmlFor="eventUrl">Event URL:</label>
                    <input
                        type="text"
                        id="eventUrl"
                        name="eventUrl"
                        value={formik.values.eventUrl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.eventUrl && formik.errors.eventUrl && (
                        <div className="error">{formik.errors.eventUrl}</div>
                    )}

                    <button type="submit">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default EventCreation;
