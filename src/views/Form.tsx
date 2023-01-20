import React from 'react';
import { InjectedFormProps } from 'redux-form';
// @ts-ignore
import { Field, reduxForm } from 'redux-form/dist/redux-form';
import FormControl from '../components/FormControl';

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
            <div>
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

const onSubmit = (values: Partial<FormProps>) => {
    console.log(values);
};

export default reduxForm({
    form: 'simple form',
    onSubmit,
})(Form);
