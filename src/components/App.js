import React from 'react';
import { Route } from 'react-router-dom';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import StyledMovieContainer from '../styled/StyledMovieContainer';

const App = () => {
	return (
		<StyledMovieContainer>
			<Route exact path="/" component={Movies} />
			<Route exact path="/movies/:id" component={MovieDetails} />
		</StyledMovieContainer>
	);
};

export default App;
