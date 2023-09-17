import './LoadingUi.css';

const loadImage = './rainbow-clear.svg';

const LoadingUi = () => {
	return (
		<div className="loading-ui__container">
			<img className="loading-ui__image" src={loadImage} alt="" />
			<span className="loading-ui__text font-color-primary1">Loading...</span>
		</div>
	);
};

export { LoadingUi };
