import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 35px;
	margin-top: 90px;
	padding-inline: 24px;
`;

const StyledFormSection = styled.div`
	display: flex;
	gap: 11px;
`;

const StyledError = styled.span`
	color: #ff5050;
	position: absolute;
	bottom: -25px;
	font-size: 12px;
`;

export { StyledForm, StyledFormSection, StyledError };
