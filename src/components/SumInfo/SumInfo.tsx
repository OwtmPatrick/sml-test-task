import React, { useState, useMemo } from 'react';
import Switch from '../Switch';
import Text from '../Text';
import TAX from '../../constants/tax';

import { SalaryType } from '../../types';

import './SumInfo.scss';

const SumInfo: React.FC<{ salaryTypeValue?: SalaryType }> = ({ salaryTypeValue }) => {
    const [withTax, setWithTax] = useState<boolean>(false);
    const [sum, setSum] = useState<string>('');

    const toggleWithTax = () => setWithTax(!withTax);
    const onSumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        const re = /^\d\d*.?\d*$/;

        if (value === '' || re.test(value)) {
            setSum(value);
        }
    };

    const onSumBlur = () => {
        if (sum !== '') {
            setSum(String(parseFloat(sum)));
        }
    };

    const val = useMemo(() => {
        if ((!sum as boolean) || salaryTypeValue !== SalaryType.MONTHY) {
            return null;
        }

        const value = parseFloat(sum);
        const tax = value * TAX;

        if (withTax) {
            return {
                salary: value - tax,
                tax,
                total: value,
            };
        }

        return {
            salary: value,
            tax: value / (1 - TAX) - value,
            total: value / (1 - TAX),
        };
    }, [salaryTypeValue, sum, withTax]);

    return (
        <div className="sum-info">
            <div className="sum-info__controls">
                <div className="d-flex gap-2 sum-info__switch-wrapper">
                    <Text text="Указать с НДФЛ" active={withTax} />
                    <Switch checked={!withTax} onChange={toggleWithTax} />
                    <Text text="Без НДФЛ" active={!withTax} />
                </div>

                <div className="sum-info__input-wrapper d-flex align-items-center gap-1">
                    <input
                        className="sum-info__input"
                        value={sum}
                        onChange={onSumChange}
                        onBlur={onSumBlur}
                    />
                    ₽
                </div>
            </div>

            {!!sum && salaryTypeValue === SalaryType.MONTHY && (
                <div role="status" className="sum-info__message">
                    <p className="sum-info__message-row">
                        <b>{val?.salary} ₽</b> сотрудник будет получать на руки
                    </p>
                    <p className="sum-info__message-row">
                        <b>{val?.tax} ₽</b> НДФЛ, 13% от оклада
                    </p>
                    <p className="sum-info__message-row">
                        <b>{val?.total} ₽</b> за сотрудника в месяц
                    </p>
                </div>
            )}
        </div>
    );
};

export default SumInfo;
