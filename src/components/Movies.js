import React, { Fragment } from 'react';
import Movie from './Movie';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import StyledFooter, { StyledLargeBtn } from '../styled/StyledFooter';
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
				<Movie
					key={movie.id}
					poster={movie.poster}
					name={movie.name}
					duration={movie.duration}
					year={movie.year}
				/>
			))}
		</StyledHorizontalScroll>
		<StyledFooter>
			<StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
		</StyledFooter>
	</Fragment>
);

export default Movies;
