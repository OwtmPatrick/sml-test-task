import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { RadioButtonContainerProps } from '.';

import './RadioButton.scss';

const RadioButton: React.FC<WrappedFieldProps & RadioButtonContainerProps> = ({
    radioButtonValue,
    label,
    ...field
}) => (
    <label className="radio-btn d-flex align-items-center">
        <input
            {...field.input}
            type="radio"
            value={radioButtonValue}
            className="radio-btn__input"
        />
        <div className="radio-btn__checkmark" />
        <span className="radio-btn__label">{label}</span>
    </label>
);

export default RadioButton;
