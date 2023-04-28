function History(props) {
	const history = props.history;

	const renderHistory = () => history?.map(
		(elem, index) => <li key={index}>{elem}</li>
	)

	return (
		<ol>
			{renderHistory()}
		</ol>
	);
}

export default History;
