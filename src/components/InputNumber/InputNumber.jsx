import { FORM_VALIDATION } from '../../constants/validation-data';
import { StyledError } from '../Form/form.styles';
import {
	StyledInputNumber,
	StyledInputNumberContainer,
	StyledLabelNumber
} from './input-number.styles';

const InputNumber = ({ cardData, setCardData, register, errors, isDirty }) => {
	return (
		<StyledInputNumberContainer>
			<StyledLabelNumber htmlFor='number'>CARD NUMBER</StyledLabelNumber>
			<StyledInputNumber
				$isDirty={isDirty || errors?.name?.type === 'pattern'}
				onInput={({ target }) =>
					setCardData({ ...cardData, number: target.value })
				}
				maxLength={16}
				type='text'
				placeholder='e.g. 1234 5678 9123 0000'
				{...register('number', FORM_VALIDATION.NUMBER)}
			/>
			<StyledError>{errors?.number?.message}</StyledError>
		</StyledInputNumberContainer>
	);
};

export default InputNumber;
