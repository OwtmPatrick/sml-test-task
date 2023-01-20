import React from 'react';
// @ts-ignore
import { Field } from 'redux-form/dist/redux-form';
import RadioButton from './RadioButton';

export type RadioButtonProps = {
    name: string;
    label: string;
    radioButtonValue: string;
    suffix?: React.ReactNode;
};

const Container: React.FC<RadioButtonProps> = (props) => (
    <Field {...props} component={RadioButton} />
);

export default Container;
