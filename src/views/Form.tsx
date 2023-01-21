import React from 'react';
import { InjectedFormProps } from 'redux-form';
// @ts-ignore
import { Field, reduxForm } from 'redux-form/dist/redux-form';
import FormControl from '../components/FormControl';

import FORMS from '../constants/forms';

type FormProps = {
    firstName: string;
    salary: string;
};

const Form: React.FC<InjectedFormProps<FormProps>> = ({
    handleSubmit,
    pristine,
    reset,
    submitting,
}) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <div className="d-flex">
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
        </div>

        <FormControl />
        <button type="submit" disabled={pristine || submitting}>
            Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </button>
    </form>
);

export default reduxForm({
    form: FORMS.SALARY_FORM,
    onSubmit: (values: Partial<FormProps>) => console.log(values),
})(Form);
