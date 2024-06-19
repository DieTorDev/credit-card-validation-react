import { FORM_VALIDATION } from '../../constants/validation-data';
import { StyledError } from '../Form/form.styles';
import {
	StyledInputDate,
	StyledInputDateContainer,
	StyledLabelDate
} from './input-date.styles';

const InputDate = ({ cardData, setCardData, register, errors, isDirty }) => {
	return (
		<StyledInputDateContainer>
			<StyledLabelDate htmlFor='month'>EXP. DATE MM/YY</StyledLabelDate>
			<StyledInputDate
				$isDirty={isDirty || errors?.name?.type === 'required'}
				onInput={({ target }) =>
					setCardData({ ...cardData, month: target.value })
				}
				maxLength={2}
				type='text'
				placeholder='MM'
				{...register('month', FORM_VALIDATION.MONTH)}
			/>
			<StyledInputDate
				$isDirty={isDirty || errors?.name?.type === 'required'}
				onInput={({ target }) =>
					setCardData({ ...cardData, year: target.value })
				}
				maxLength={2}
				type='text'
				placeholder='YY'
				{...register('year', FORM_VALIDATION.YEAR)}
			/>
			<StyledError>
				{errors?.month?.message || errors?.year?.message}
			</StyledError>
		</StyledInputDateContainer>
	);
};

export default InputDate;
