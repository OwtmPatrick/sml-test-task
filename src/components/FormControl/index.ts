import { connect } from 'react-redux';
// @ts-ignore
import { formValueSelector } from 'redux-form/dist/redux-form';
import FormControl from './FormControl';

import FORMS from '../../constants/forms';

const selector = formValueSelector(FORMS.SALARY_FORM);

const Container = connect((state) => ({ salaryTypeValue: selector(state, 'salary') }))(FormControl);

export default Container;
