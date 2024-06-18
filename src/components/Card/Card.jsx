import {
	StyledBackCard,
	StyledCard,
	StyledCardCvc,
	StyledCardData,
	StyledCardNumber,
	StyledFrontCard
} from './card.styles';

const Card = ({ cardData }) => {
	const { name, number, month, year, cvc } = cardData;

	return (
		<StyledCard>
			<StyledBackCard>
				<StyledCardCvc>{cvc}</StyledCardCvc>
			</StyledBackCard>
			<StyledFrontCard>
				<img src='/images/card-logo.svg' alt='' />
				<StyledCardNumber>{number}</StyledCardNumber>
				<StyledCardData>
					<span>{name.toUpperCase()}</span>
					<span>
						{month}/{year}
					</span>
				</StyledCardData>
			</StyledFrontCard>
		</StyledCard>
	);
};

export default Card;
