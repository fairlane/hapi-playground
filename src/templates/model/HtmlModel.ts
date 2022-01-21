export class HtmlModel {
  title: string;
  vars : {};

  constructor(title: string, vars: {}) {
    this.title = title;
    this.vars = vars;
  }
}