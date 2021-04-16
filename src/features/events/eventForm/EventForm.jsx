import cuid from "cuid";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required("You must provide a title"),
    city: Yup.string().required("You must provide a title"),
    venue: Yup.string().required("You must provide a title"),
    date: Yup.string().required("You must provide a title"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                  hostedBy: "Bob",
                })
              );
          history.push("/events");
        }}
      >
        <Form className="ui form">
          <Header sub color="teal" content="Event details" />
          <MyTextInput name="title" placeholder="Event title" />
          <MyTextInput name="category" placeholder="Category" />
          <MyTextInput name="description" placeholder="Description" />
          <Header sub color="teal" content="Event location details" />
          <MyTextInput name="city" placeholder="City" />
          <MyTextInput name="venue" placeholder="Venue" />
          <MyTextInput name="date" placeholder="Date" type="date" />
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Formik>
    </Segment>
  );
}
