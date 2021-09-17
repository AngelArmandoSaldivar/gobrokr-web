import { FormikValues } from 'formik';

export interface InputsProps {
  values: FormikValues;
  setFieldValue: (key: string, value: any) => void;
}
