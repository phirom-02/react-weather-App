import './ErrorUi.css'

import errorImage from '/code-red.svg';

const ErrorUi = () => {
	return (
		<div className="error-ui__container">
			<img className="error-ui__image" src={errorImage} alt="" />
			<span className="error-ui__text font-color-primary1">Something Went Wrong. Please Try Again!</span>
		</div>
	);
};

export { ErrorUi };