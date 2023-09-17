import React, { useState } from "react";
import * as math from "mathjs"; // Import the math library
import "./App.css";

const App = () => {
	const [inputValue, setInputValue] = useState("");

	const display = (value) => {
		setInputValue((prevInputValue) => prevInputValue + value);
	};

	const calc = () => {
		try {
			const ans = math.evaluate(inputValue);
			setInputValue(ans.toString()); // Convert the result to a string before setting it in the input
		} catch (error) {
			setInputValue("Error"); // Handle any calculation errors
		}
	};

	const clr = () => {
		setInputValue("");
	};

	return (
		<>
			<h1>React Calci</h1>
			<table>
				<tbody>
					<tr>
						<td colSpan="3">
							<input value={inputValue} type="text" />
						</td>
						<td>
							<button onClick={clr}>C</button>
						</td>
					</tr>
					<tr>
						<td>
							<button onClick={() => display("1")}>1</button>
						</td>
						<td>
							<button onClick={() => display("2")}>2</button>
						</td>
						<td>
							<button onClick={() => display("3")}>3</button>
						</td>
						<td>
							<button onClick={() => display("/")}>/</button>
						</td>
					</tr>
					<tr>
						<td>
							<button onClick={() => display("4")}>4</button>
						</td>
						<td>
							<button onClick={() => display("5")}>5</button>
						</td>
						<td>
							<button onClick={() => display("6")}>6</button>
						</td>
						<td>
							<button onClick={() => display("-")}>-</button>
						</td>
					</tr>
					<tr>
						<td>
							<button onClick={() => display("7")}>7</button>
						</td>
						<td>
							<button onClick={() => display("8")}>8</button>
						</td>
						<td>
							<button onClick={() => display("9")}>9</button>
						</td>
						<td>
							<button onClick={() => display("+")}>+</button>
						</td>
					</tr>
					<tr>
						<td>
							<button onClick={() => display(".")}>.</button>
						</td>
						<td>
							<button onClick={() => display("0")}>0</button>
						</td>
						<td>
							<button onClick={calc}>=</button>
						</td>
						<td>
							<button onClick={() => display("*")}>*</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default App;
