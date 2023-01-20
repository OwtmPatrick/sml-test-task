import React from 'react';
import RadioButton from '../RadioButton';

const FormControl = () => (
    <div>
        <RadioButton name="salary" label="Оклад в месяц" radioButtonValue="month" />
        <RadioButton name="salary" label="МРОТ" radioButtonValue="min" />
    </div>
);

export default FormControl;
