import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';

const Movies = () => (
	<StyledHeader>
		<FontAwesomeIcon icon="bars" text="help" />
		<FontAwesomeIcon icon="search" />
	</StyledHeader>
);

export default Movies;
