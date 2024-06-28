import styled from "styled-components";
const ProductCard = ({ product, dispatch }) => {
	const { id, name, price, image } = product;
	const addToCart = () => {
		dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
	};
	return (
		<div>
			<FlexCard>
				<Photo src={image} alt={name} />
				<Text>{name}</Text>
				<Price>{price} сом</Price>
				<AddButton onClick={addToCart}>В корзину</AddButton>
			</FlexCard>
		</div>
	);
};

export default ProductCard;

const FlexCard = styled.div`
	width: 300px;
	height: 300px;
	border: 2px solid grey;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	&:hover {
		border-color: red;
		transition: 0.4s;
	}
`;

const Photo = styled.img`
	width: 150px;
`;

const Text = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
`;

const Price = styled.p`
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
`;

const AddButton = styled.button`
	width: 150px;
	height: 35px;
	color: white;
	font-size: 20px;
	background-color: blue;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	text-transform: uppercase;
	&:hover {
		background-color: #0000a3;
	}
`;
