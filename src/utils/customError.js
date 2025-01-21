export class CustomError extends Error {
  constructor(message, path) {
    super(message);
    this.name = "CustomError";
    this.path = path;
  }
}
