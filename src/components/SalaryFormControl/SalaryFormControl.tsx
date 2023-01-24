import React from 'react';
import RadioButton from '../RadioButton';
import Hint from '../Hint';
import InfoAmount from '../InfoAmount';

import { SalaryType } from '../../types';

import './SalaryFormControl.scss';

const SalaryFormControl: React.FC<{ title: string; salaryTypeValue?: SalaryType }> = ({
    title,
    salaryTypeValue,
}) => (
    <div className="salary-form-control">
        <label className="salary-form-control__title">{title}</label>
        <div className="salary-form-control__radio-buttons-wrapper d-flex flex-column align-items-start gap-1 mt-2">
            <RadioButton
                name="salary"
                label="Оклад за месяц"
                radioButtonValue={SalaryType.MONTHY}
            />
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
        </div>

        <InfoAmount salaryTypeValue={salaryTypeValue} />
    </div>
);

export default SalaryFormControl;
