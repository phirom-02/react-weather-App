import { LocationForm } from './LocationForm/LocationForm';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="nav">
			<p className="logo">Real Time Weather 🌤️</p>
			<LocationForm />
		</nav>
	);
};

export { Nav };
