import styled from "styled-components";
const CartItem = ({ item, dispatch }) => {
	const { id, name, price, quantity } = item;
	const incrementQuantity = () => {
		dispatch({ type: "INCREMENT_QUANTITY", payload: item });
	};
	const decrementQuantity = () => {
		dispatch({ type: "DECREMENT_QUANTITY", payload: item });
	};
	const removeFromCart = () => {
		dispatch({ type: "REMOVE_FROM_CART", payload: item });
	};
	return (
		<div>
			<FlexOutput>
				<Text>{id}</Text>
				<Photo src={item.image} alt={name} />
				<Text>{name}</Text>
				<Text>{price} сом</Text>
				<Counters>
					<Counter onClick={incrementQuantity}>+</Counter>
					<Quantity>{quantity}</Quantity>
					<Counter onClick={decrementQuantity}>-</Counter>
				</Counters>
				<DeleteButton onClick={removeFromCart}>Удалить</DeleteButton>
			</FlexOutput>
		</div>
	);
};

export default CartItem;

const FlexOutput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	border: 2px solid blue;
	border-radius: 20px;
	width: 80%;
	margin: 10px;
	position: relative;
	left: 10%;
`;

const Photo = styled.img`
	width: 100px;
`;

const Text = styled.span`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 30px;
`;

const Counter = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	border-color: blue;
	cursor: pointer;
	font-size: 30px;
`;

const DeleteButton = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	font-size: 25px;
	background-color: red;
	border-radius: 20px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: #c10000;
	}
`;

const Counters = styled.div`
	display: flex;
	gap: 30px;
`;

const Quantity = styled.p`
	margin-top: 5px;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 35px;
`;
