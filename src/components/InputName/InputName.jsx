import { FORM_VALIDATION } from '../../constants/validation-data';
import { StyledError } from '../Form/form.styles';
import {
	StyledInput,
	StyledInputNameContainer,
	StyledLabel
} from './input-name.styles';

const InputName = ({ cardData, setCardData, register, errors, isDirty }) => {
	return (
		<StyledInputNameContainer>
			<StyledLabel htmlFor='name'>CARDHOLDER NAME</StyledLabel>
			<StyledInput
				$isDirty={isDirty || errors?.name?.type === 'pattern'}
				onInput={({ target }) =>
					setCardData({ ...cardData, name: target.value })
				}
				type='text'
				placeholder='e.g. Jane Appleseed'
				{...register('name', FORM_VALIDATION.NAME)}
			/>
			<StyledError>{errors?.name?.message}</StyledError>
		</StyledInputNameContainer>
	);
};

export default InputName;
