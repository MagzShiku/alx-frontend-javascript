export default function taskBlock(trueOrFalse) {
	let task = false;
	let task2 = true;

	if (trueOrFalse) {
		//If the input parameter 'trueOrFalse' is true, the variables 'task' and 'task2' are redeclared and assigned with 'true' and 'false' respectively inside the conditional block.
		let task = true;
		let task2 = false;
	}
	return [task, task2];
}
