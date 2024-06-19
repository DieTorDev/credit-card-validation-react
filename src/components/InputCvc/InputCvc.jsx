import { FORM_VALIDATION } from '../../constants/validation-data';
import { StyledError } from '../Form/form.styles';
import {
	StyledInputCvc,
	StyledInputCvcContainer,
	StyledLabelCvc
} from './input-cvc.styles';

const InputCvc = ({ cardData, setCardData, register, errors, isDirty }) => {
	return (
		<StyledInputCvcContainer>
			<StyledLabelCvc htmlFor='cvc'>CVC</StyledLabelCvc>
			<StyledInputCvc
				$isDirty={isDirty || errors?.name?.type === 'required'}
				onInput={({ target }) =>
					setCardData({ ...cardData, cvc: target.value })
				}
				maxLength={3}
				type='text'
				placeholder='e.g 123'
				{...register('cvc', FORM_VALIDATION.CVC)}
			/>
			<StyledError>{errors?.cvc?.message}</StyledError>
		</StyledInputCvcContainer>
	);
};

export default InputCvc;
