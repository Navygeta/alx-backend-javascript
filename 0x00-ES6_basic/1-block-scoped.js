export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let newTask = false;
    let newTask2 = true;
    task = newTask;
    task2 = newTask2;
  }

  return [task, task2];
}
