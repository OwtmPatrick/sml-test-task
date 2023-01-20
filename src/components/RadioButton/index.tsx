import React from 'react';
// @ts-ignore
import { Field } from 'redux-form/dist/redux-form';
import RadioButton from './RadioButton';

export type RadioButtonContainerProps = {
    name: string;
    label: string;
    radioButtonValue: any;
};

const Container: React.FC<RadioButtonContainerProps> = (props) => (
    <Field {...props} component={RadioButton} />
);

export default Container;
