import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 1rem;
	height: 70px;
	display: flex;
	color: #8b9095;
	font-size: 0.8rem;
	align-items: center;
	> * {
		z-index: 10;
	}
`;

export default StyledHeader;
