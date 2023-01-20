import React from 'react';
import RadioButton from '../RadioButton';

import './FormControl.scss';

const FormControl: React.FC<{ salaryTypeValue?: string }> = ({ salaryTypeValue }) => {
    console.log(salaryTypeValue);
    return (
        <div className="d-flex flex-column salary-form-control">
            <RadioButton name="salary" label="Оклад в месяц" radioButtonValue="month" />
            <RadioButton name="salary" label="МРОТ" radioButtonValue="min" />
            <RadioButton name="salary" label="Оплата за день" radioButtonValue="day" />
            <RadioButton name="salary" label="Оплата за час" radioButtonValue="hour" />
        </div>
    );
};

export default FormControl;
