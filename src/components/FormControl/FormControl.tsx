import React, { useState } from 'react';
import RadioButton from '../RadioButton';
import Hint from '../Hint';
import Switch from '../Switch';
import Text from '../Text';

import './FormControl.scss';

const FormControl: React.FC<{ salaryTypeValue?: string }> = ({ salaryTypeValue }) => {
    const [withTax, setWithTax] = useState<boolean>(false);

    const toggleWithTax = () => setWithTax(!withTax);

    console.log(salaryTypeValue);
    return (
        <div className="d-flex flex-column gap-2">
            <RadioButton name="salary" label="Оклад в месяц" radioButtonValue="month" />
            <RadioButton
                name="salary"
                label="МРОТ"
                radioButtonValue="min"
                suffix={
                    <Hint text="МРОТ - минимальный размер оплаты труда. Разный для разных регионов." />
                }
            />
            <RadioButton name="salary" label="Оплата за день" radioButtonValue="day" />
            <RadioButton name="salary" label="Оплата за час" radioButtonValue="hour" />
            <div className="d-flex gap-2 salary-form-control__switch-wrapper">
                <Text text="Указать с НДФЛ" active={!withTax} />
                <Switch checked={!withTax} onChange={toggleWithTax} />
                <Text text="Без НДФЛ" active={withTax} />
            </div>
        </div>
    );
};

export default FormControl;
