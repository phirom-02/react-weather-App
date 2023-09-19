import './ErrorUi.css';

const errorImage = './code-red.svg';

const ErrorUi = () => {
	return (
		<div className="error-ui__container">
			<img className="error-ui__image" src={errorImage} alt="" />
			<div className="error-ui__text ">
				<b className="font-color-primary">
					Something Went Wrong. Please Try Again!
				</b>
				<ul>
					<li className="font-color-primary">
						- Please check your internet connection.
					</li>
					<li className="font-color-primary">
						- Make sure to enable your location.
					</li>
				</ul>
			</div>
		</div>
	);
};

export { ErrorUi };
