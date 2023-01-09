class Task {
  title: string;
  isCompleted: boolean = false;
  userId: number;
  constructor(title: string, userId: number) {
    this.title = title;
    this.userId = userId;
  }
}
export default Task;
