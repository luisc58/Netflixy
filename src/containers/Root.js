import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import store from '../store';
import DevTools from './DevTools';
import App from '../components/App';
import StyledContainer from '../styled/StyledContainer';

const Root = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StyledContainer>
					<Router>
						<App />
					</Router>
					{/* <DevTools /> */}
				</StyledContainer>
			</ThemeProvider>
		</Provider>
	);
};

export default Root;
