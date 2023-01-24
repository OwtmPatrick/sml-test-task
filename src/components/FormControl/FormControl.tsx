import React from 'react';
import RadioButton from '../RadioButton';
import Hint from '../Hint';
import InfoAmount from '../InfoAmount';

import { SalaryType } from '../../types';

const FormControl: React.FC<{ salaryTypeValue?: SalaryType }> = ({ salaryTypeValue }) => (
    <div className="d-flex flex-column align-items-start gap-2">
        <RadioButton name="salary" label="Оклад в месяц" radioButtonValue={SalaryType.MONTHY} />
        <RadioButton
            name="salary"
            label="МРОТ"
            radioButtonValue={SalaryType.MIN}
            suffix={
                <Hint text="МРОТ - минимальный размер оплаты труда. Разный для разных регионов." />
            }
        />
        <RadioButton name="salary" label="Оплата за день" radioButtonValue={SalaryType.DAILY} />
        <RadioButton name="salary" label="Оплата за час" radioButtonValue={SalaryType.HOURLY} />

        <InfoAmount salaryTypeValue={salaryTypeValue} />
    </div>
);

export default FormControl;
