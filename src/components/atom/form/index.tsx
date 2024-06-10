import { Formik, Form as FormBody } from "formik";
import { TextField } from "./text-field";

export type FormProps = {
  children: React.ReactNode;
  initialValues?: any;
  validationSchema?: any;
  onSubmit: (values: any) => void;
};

export function Form({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <FormBody onSubmit={handleSubmit}>
          {children}
        </FormBody>
      )}
    </Formik>
  );
}

Form.TextField = TextField;
