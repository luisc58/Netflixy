import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.primaryBg};
	min-height: 100vh;

	&:before {
		content: "NETFLIXY";
		position: fixed;
		top: 18vh;
		left: 10vw;
		font-size: 9vw;
		color: rgba(255, 255, 255, 0.03);
	}
`;

export default StyledContainer;
