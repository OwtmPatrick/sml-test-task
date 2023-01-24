import React from 'react';
import { InjectedFormProps } from 'redux-form';
// @ts-ignore
import { reduxForm } from 'redux-form/dist/redux-form';
import FormControl from '../components/SalaryFormControl';

import { SalaryType } from '../types';
import FORMS from '../constants/forms';

type FormProps = {
    salary: string;
};

const Form: React.FC<InjectedFormProps<FormProps>> = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <FormControl title="Сумма" />
    </form>
);

export default reduxForm({
    form: FORMS.SALARY_FORM,
    initialValues: {
        salary: SalaryType.MONTHY,
    },
    onSubmit: (values: Partial<FormProps>) => console.log(values),
})(Form);
