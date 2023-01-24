import React, { useState, useMemo } from 'react';
import Switch from '../Switch';
import Text from '../Text';
import TAX from '../../constants/tax';

import { SalaryType } from '../../types';

import './InfoAmount.scss';

const InfoAmount: React.FC<{ salaryTypeValue?: SalaryType }> = ({ salaryTypeValue }) => {
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
        const floatNumber = value <= 1 ? 2 : 0;

        if (withTax) {
            return {
                salary: (value - tax).toFixed(floatNumber),
                tax: tax.toFixed(floatNumber),
                total: value.toFixed(floatNumber),
            };
        }

        return {
            salary: value.toFixed(floatNumber),
            tax: (value / (1 - TAX) - value).toFixed(floatNumber),
            total: (value / (1 - TAX)).toFixed(floatNumber),
        };
    }, [salaryTypeValue, sum, withTax]);

    return (
        <div className="info-amount mt-3">
            <div className="info-amount__controls">
                <div className="d-flex gap-2 align-items-end">
                    <Text text="Указать с НДФЛ" active={withTax} />
                    <Switch checked={!withTax} onChange={toggleWithTax} />
                    <Text text="Без НДФЛ" active={!withTax} />
                </div>

                <div className="info-amount__input-wrapper d-flex align-items-center gap-1 mt-4">
                    <input
                        className="info-amount__input"
                        value={sum}
                        onChange={onSumChange}
                        onBlur={onSumBlur}
                    />
                    ₽
                </div>
            </div>

            {!!sum && salaryTypeValue === SalaryType.MONTHY && (
                <div role="status" className="info-amount__message">
                    <p className="info-amount__message-row">
                        <b>{val?.salary} ₽</b> сотрудник будет получать на руки
                    </p>
                    <p className="info-amount__message-row">
                        <b>{val?.tax} ₽</b> НДФЛ, 13% от оклада
                    </p>
                    <p className="info-amount__message-row">
                        <b>{val?.total} ₽</b> за сотрудника в месяц
                    </p>
                </div>
            )}
        </div>
    );
};

export default InfoAmount;
