import './Buttons.css';

const Buttons = () => {
	return (
		<div className="location-form__btns">
			<Button modifierClass="btn-history">
				<i className="ti ti-history-toggle icon-size-primary"></i>
			</Button>

			<Button modifierClass="btn-current-location">
				<i className="ti ti-current-location icon-size-primary"></i>
			</Button>
		</div>
	);
};

const Button = ({ modifierClass, children }) => {
	return (
		<button className={`location-form__btn ${modifierClass}`}>
			{children}
		</button>
	);
};

export { Buttons };
