import './InputForm.css';

const InputForm = () => {
	return (
		<div className="location-form__input-container">
			<input
				className="location-form__input font-size-fixed font-color-primary"
				placeholder="Search location"
			/>
			<span className="location-form__input-cancel">
				<i class="ti ti-x"></i>
			</span>
		</div>
	);
};

export { InputForm };
