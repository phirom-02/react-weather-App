import { Buttons } from './Buttons/Buttons';
import { InputForm } from './InputForm/InputForm';
import { DropdownResult } from './DropdownResult/DropdownResult';
import './LocationForm.css';

const LocationForm = () => {
	return (
		<div className="location-form">
			<InputForm />
			<Buttons />
			<DropdownResult />
		</div>
	);
};

export { LocationForm };
