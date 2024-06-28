import { useReducer } from "react";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Total from "./components/Total";
import styled from "styled-components";

const initialProducts = [
	{
		id: 1,
		name: "Пицца",
		price: 500,
		image:
			"https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_40sm/Barbekiu_40sm/Medium.png?hash=3b4522fe32379bc2ad5e9649e2faa199",
	},
	{
		id: 2,
		name: "Роллы",
		price: 800,
		image:
			"https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Rollyi/Goriachii_Roll_s_Lososem/Medium.png?hash=c6fe3b89b2c765d7d8b36ade6fa76d32",
	},
	{
		id: 3,
		name: "Салат",
		price: 300,
		image:
			"https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Salatyi/Grecheskii_salat/Medium.png?hash=3a42a135052a11d0f020484b66d2c982",
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const { id } = action.payload;
			const isItemInCart = state.cart.some((item) => item.id === id);
			if (!isItemInCart) {
				return {
					...state,
					cart: [...state.cart, { ...action.payload, quantity: 1 }],
				};
			}
			return state;
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case "INCREMENT_QUANTITY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		case "DECREMENT_QUANTITY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id && item.quantity > 0
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, { cart: [] });
	return (
		<div>
			<FlexCard>
				{initialProducts.map((product) => (
					<ProductCard key={product.id} product={product} dispatch={dispatch} />
				))}
			</FlexCard>
			<div>
				<Basket>Корзина</Basket>
				{state.cart.map((item) => (
					<CartItem key={item.id} item={item} dispatch={dispatch} />
				))}
				<Total cart={state.cart} />
			</div>
		</div>
	);
};

export default App;

const FlexCard = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
`;

const Basket = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
`;
