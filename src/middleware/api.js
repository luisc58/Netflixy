// custom middleware responsible for handling api calls
const api = ({ getState, api }) => (next) => (action) => {
	next(action);
};

export default api;
