export type Level = "debug" | "info" | "warn" | "error";

export class Logger {
  private level: string;

  constructor(level: Level) {
    this.level = level;
  }

  public debug(msg: any) {
    if (["info", "debug", "warn", "error"].includes(this.level)) {
      console.log(msg);
    }
  }
  public info(msg: any) {
    if (["info", "warn", "error"].includes(this.level)) {
      console.log(msg);
    }
  }
  public warn(msg: any) {
    if (["warn", "error"].includes(this.level)) {
      console.log(msg);
    }
  }
  public error(msg: any) {
    if (this.level === "error") {
      console.error(msg);
    }
  }
}
