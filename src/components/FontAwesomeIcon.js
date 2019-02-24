import React, { Fragment } from 'react';

const FontAwesomeIcon = ({ icon = 'llipsis-h', text = false }) => (
	<Fragment>
		<span className={`fas fa-${icon}`} />
		{Boolean(text) && <span> &nbsp; {text}</span>}
	</Fragment>
);

export default FontAwesomeIcon;
