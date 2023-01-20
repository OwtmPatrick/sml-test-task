import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { RadioButtonContainerProps } from '.';

const RadioButton: React.FC<WrappedFieldProps & RadioButtonContainerProps> = (props) => {
    const { radioButtonValue, label, ...field } = props;
    return (
        <label>
            <input {...field.input} type="radio" value={radioButtonValue} />
            <span>{label}</span>
        </label>
    );
};

export default RadioButton;
