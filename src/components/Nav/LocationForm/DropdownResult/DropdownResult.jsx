import './DropdownResult.css';

const cities = [
	'Phnom Penh',
	'Seoul',
	'New York',
	'Beijing',
	'Siem Reap',
	'Gangnam',
	'Tokyo',
];

const DropdownResult = () => {
	return (
		<div className="dropdown-wrapper">
			<ul className="dropdown-list">
				{cities.map((city, index) => (
					<li className="dropdown-list__item font-color-primary" key={index}>
						{city}
					</li>
				))}
			</ul>
		</div>
	);
};

export { DropdownResult };
