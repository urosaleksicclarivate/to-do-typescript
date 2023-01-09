interface CustomType {}
class Task {
  // id?: number;
  title: string;
  isCompleted: boolean = false;
  userId: number;
  constructor(title: string, userId: number, id?: number) {
    this.title = title;
    this.userId = userId;
    // this.id = id;
  }
  // constructor(obj:)
}
export default Task;
