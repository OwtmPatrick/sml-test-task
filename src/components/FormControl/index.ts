import { connect } from 'react-redux';
// @ts-ignore
import { formValueSelector } from 'redux-form/dist/redux-form';
import FormControl from './FormControl';

const selector = formValueSelector('simpleForm');

const Container = connect((state) => ({ salaryTypeValue: selector(state, 'salary') }))(FormControl);

export default Container;
