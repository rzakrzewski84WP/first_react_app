/** @format */

// 2. Form.js

// Element form
// w form input type text i button type submit

import React from 'react';

function Form() {
	return (
		<form>
			<label>
				Text Form:
				<input type='text' name='text' />
			</label>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default Form;
