import React, { Fragment } from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import { movies } from '../staticData';

const Movies = () => (
	<Fragment>
		<StyledHeader>
			<FontAwesomeIcon icon="bars" text="help" />
			<StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
			<FontAwesomeIcon icon="search" />
		</StyledHeader>
		{/* the list of movies */}
		<StyledHorizontalScroll>
			{movies.map((movie) => (
				<div
					style={{
						border: '1px solid red',
						margin: '1rem'
					}}
					key={movie.id}
				>
					{movie.name}
				</div>
			))}
		</StyledHorizontalScroll>
	</Fragment>
);

export default Movies;
