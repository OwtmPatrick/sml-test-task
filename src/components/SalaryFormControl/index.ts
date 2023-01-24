import { connect } from 'react-redux';
// @ts-ignore
import { formValueSelector } from 'redux-form/dist/redux-form';
import SalaryFormControl from './SalaryFormControl';

import FORMS from '../../constants/forms';

const selector = formValueSelector(FORMS.SALARY_FORM);

const Container = connect((state) => ({ salaryTypeValue: selector(state, 'salary') }))(SalaryFormControl);

export default Container;
