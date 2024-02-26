import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();

		if (guess.length !== 5) {
			window.alert('Please enter exactly 5 characters');
			return;
		}

		console.log({ guess });
		setGuess('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				value={guess}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
