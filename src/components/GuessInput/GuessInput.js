import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();

		if (tentativeGuess.length !== 5) {
			window.alert('Please enter exactly 5 characters');
			return;
		}

		handleSubmitGuess(tentativeGuess);
		setTentativeGuess('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				disabled={gameStatus !== 'running'}
				required
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				value={tentativeGuess}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
