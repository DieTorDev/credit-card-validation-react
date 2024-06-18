import styled from 'styled-components';

const StyledCard = styled.section`
	position: relative;
	height: 240px;
	background-image: url('/images/bg-main-desktop.png');
`;

const StyledBackCard = styled.div`
	background-image: url('/images/bg-card-back.png');
	background-size: cover;
	width: 286px;
	height: 157px;
	position: absolute;
	right: 16px;
	top: 32px;
	padding-top: 67px;
	padding-left: 220px;
`;

const StyledCardCvc = styled.span`
	color: white;
	font-weight: bold;
	letter-spacing: 2px;
`;

const StyledFrontCard = styled.div`
	background-image: url('/images/bg-card-front.png');
	background-size: cover;
	width: 286px;
	height: 157px;
	position: absolute;
	left: 16px;
	top: 126px;
	padding: 16px;
`;

const StyledCardNumber = styled.p`
	color: white;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 2.2px;
`;

const StyledCardData = styled.div`
	display: flex;
	justify-content: space-between;
	color: white;
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 2.2px;
`;

export {
	StyledCard,
	StyledFrontCard,
	StyledBackCard,
	StyledCardCvc,
	StyledCardNumber,
	StyledCardData
};
