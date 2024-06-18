import styled from 'styled-components';

const StyledInputNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 9px;
	position: relative;
`;

const StyledLabel = styled.label`
	color: #21092f;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 2px;
`;

const StyledInput = styled.input`
	height: 45px;
	padding-left: 16px;
	font-size: 18px;
	font-weight: 500px;
	border: 2px solid #dfdee0;
	border-radius: 8px;
	font-family: 'Space Grotesk', sans-serif;
	color: #21092f;

	&::placeholder {
		color: lightgray;
		font-family: 'Space Grotesk', sans-serif;
	}
`;

export { StyledInputNameContainer, StyledLabel, StyledInput };
