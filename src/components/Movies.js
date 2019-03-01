import React, { Fragment } from 'react';
import Movie from './Movie';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import StyledFooter, { StyledLargeBtn } from '../styled/StyledFooter';
import HelpMenuContainer from '../containers/HelpMenuContainer';
import StyledLoader from '../styled/StyledLoader';
import StyledMovieLink from '../styled/StyledMovieLink';

class Movies extends React.Component {
	componentDidMount() {
		this.props.getMovies();
	}
	render() {
		return (
			<Fragment>
				<StyledHeader>
					<HelpMenuContainer />
					<StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
					<FontAwesomeIcon icon="search" />
				</StyledHeader>
				{/* the list of movies */}
				<StyledHorizontalScroll>
					{this.props.loading ? (
						<StyledLoader />
					) : (
						this.props.movies.map((movie) => (
							<StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
								<Movie
									key={movie.id}
									name={movie.name}
									poster={movie.poster}
									duration={movie.duration}
									year={movie.year}
								/>
							</StyledMovieLink>
						))
					)}
				</StyledHorizontalScroll>
				<StyledFooter>
					<StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
				</StyledFooter>
			</Fragment>
		);
	}
}
export default Movies;
