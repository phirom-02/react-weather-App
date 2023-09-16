import './DropdownResult.css';

const DropdownResult = ({ collection = [], message = '' }) => {
	return (
		<div className="dropdown-wrapper">
			<ul className="dropdown-list">
				{!message || collection.length > 0 ? (
					collection.map((item) => (
						<li
							className="dropdown-list__item font-color-primary"
							key={item.id}
						>
							{item.label}
						</li>
					))
				) : (
					<p className="message font-color-primary">{message}</p>
				)}
			</ul>
		</div>
	);
};

export { DropdownResult };
