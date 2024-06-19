import { CARD_DATA } from '../../constants/card-data';
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
				<StyledCardCvc>{cvc === '' ? CARD_DATA.cvc : cvc}</StyledCardCvc>
			</StyledBackCard>
			<StyledFrontCard>
				<img src='/images/card-logo.svg' alt='' />
				<StyledCardNumber>
					{number === '' ? CARD_DATA.number : number}
				</StyledCardNumber>
				<StyledCardData>
					<span>
						{name === '' ? CARD_DATA.name.toUpperCase() : name.toUpperCase()}
					</span>
					<span>
						{month === '' ? CARD_DATA.month : month}/
						{year === '' ? CARD_DATA.year : year}
					</span>
				</StyledCardData>
			</StyledFrontCard>
		</StyledCard>
	);
};

export default Card;
