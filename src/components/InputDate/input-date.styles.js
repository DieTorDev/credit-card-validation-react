import styled from 'styled-components';
import { StyledInput, StyledLabel } from '../InputName/input-name.styles';

const StyledInputDateContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 9px;
	position: relative;
`;

const StyledLabelDate = styled(StyledLabel)`
	width: 100%;
`;

const StyledInputDate = styled(StyledInput)`
	width: 45%;
`;

export { StyledInputDateContainer, StyledLabelDate, StyledInputDate };
