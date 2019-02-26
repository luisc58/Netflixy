import React from 'react';
import { Route } from 'react-router-dom';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import StyledMovieContainer from '../styled/StyledMovieContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    * {
        box-sizing: border-box;
    }
    html,body {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;  
    }

    #root {
        min-height: 100vh;
    }
`;

const App = () => {
	return (
		<StyledMovieContainer>
			<GlobalStyle />
			<Route exact path="/" component={Movies} />
			<Route exact path="/movies/:id" component={MovieDetails} />
		</StyledMovieContainer>
	);
};

export default App;
