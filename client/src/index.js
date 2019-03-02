import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal <3 <3 <3 hello React Webpack Babel Setup';

ReactDOM.render(
		<div>{title}</div>,
		document.getElementById('app')
		);

module.hot.accept();