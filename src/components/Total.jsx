import styled from "styled-components";
const Total = ({ cart }) => {
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	return (
		<div>
			<Totals>Итог: {total} сом</Totals>
		</div>
	);
};

export default Total;

const Totals = styled.h1`
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
`;
