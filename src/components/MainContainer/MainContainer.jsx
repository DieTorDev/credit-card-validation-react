import { useState } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';
import { CARD_DATA } from '../../constants/card-data';

const MainContainer = () => {
	const [cardData, setCardData] = useState(CARD_DATA);

	return (
		<main>
			<Card cardData={cardData} />
			<Form cardData={cardData} setCardData={setCardData} />
		</main>
	);
};

export default MainContainer;
