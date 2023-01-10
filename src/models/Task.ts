class Task {
  id?: number;
  title: string;
  isCompleted: boolean;
  userId: number;

  constructor(
    title: string,
    userId: number,
    isCompleted: boolean,
    id?: number
  ) {
    this.title = title;
    this.isCompleted = isCompleted;
    this.userId = userId;
    this.id = id;
  }
}
export default Task;
