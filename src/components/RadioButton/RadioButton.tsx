import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { RadioButtonProps } from '.';

import './RadioButton.scss';

const RadioButton: React.FC<WrappedFieldProps & RadioButtonProps> = ({
    radioButtonValue,
    label,
    suffix,
    ...field
}) => (
    <div className="radio-btn d-flex align-items-center">
        <label className="radio-btn__label d-flex align-items-center">
            <input
                {...field.input}
                type="radio"
                value={radioButtonValue}
                className="radio-btn__input"
                checked={field.input.value === radioButtonValue}
            />
            <div className="radio-btn__checkmark" />

            {label}
        </label>

        <div className="radio-btn__suffix">{suffix}</div>
    </div>
);

export default RadioButton;
