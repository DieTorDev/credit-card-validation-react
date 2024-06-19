import { useForm } from 'react-hook-form';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import InputCvc from '../InputCvc/InputCvc';
import InputDate from '../InputDate/InputDate';
import InputName from '../InputName/InputName';
import InputNumber from '../InputNumber/InputNumber';
import { StyledForm, StyledFormSection } from './form.styles';

const Form = ({ cardData, setCardData }) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isDirty }
	} = useForm({ mode: 'onChange' });

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<InputName
				cardData={cardData}
				setCardData={setCardData}
				register={register}
				errors={errors}
				isDirty={isDirty}
			/>
			<InputNumber
				cardData={cardData}
				setCardData={setCardData}
				register={register}
				errors={errors}
			/>
			<StyledFormSection>
				<InputDate
					cardData={cardData}
					setCardData={setCardData}
					register={register}
					errors={errors}
				/>
				<InputCvc
					cardData={cardData}
					setCardData={setCardData}
					register={register}
					errors={errors}
				/>
			</StyledFormSection>
			<ButtonSubmit />
		</StyledForm>
	);
};

const onSubmit = (data, e) => {};

export default Form;
