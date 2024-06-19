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
				$isWrong={isDirty || Object.keys(errors).length !== 0}
				onInput={({ target }) =>
					handleInputNumber(target, cardData, setCardData)
				}
				type='text'
				placeholder='e.g. 1234 5678 9123 0000'
				{...register('number', FORM_VALIDATION.NUMBER)}
			/>
			<StyledError>{errors?.number?.message}</StyledError>
		</StyledInputNumberContainer>
	);
};

const handleInputNumber = (input, cardData, setCardData) => {
	if (input.value.length > 15) {
		input.value.substring(0, input.value.length - 2);
	} else setCardData({ ...cardData, number: input.value });
};

export default InputNumber;
