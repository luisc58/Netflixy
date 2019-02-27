import React, { Fragment } from 'react';
import Movie from './Movie';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import StyledFooter, { StyledLargeBtn } from '../styled/StyledFooter';

class Movies extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.getMovies();
	}
	render() {
		return (
			<Fragment>
				<StyledHeader>
					<StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
					<FontAwesomeIcon icon="search" />
				</StyledHeader>
				{/* the list of movies */}
				<StyledHorizontalScroll>
					{this.props.movies.map((movie) => (
						<Movie
							key={movie.id}
							name={movie.name}
							poster={movie.poster}
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
	}
}
export default Movies;
