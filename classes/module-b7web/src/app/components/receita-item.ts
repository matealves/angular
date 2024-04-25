export class ReceitaItem {
  constructor(public id: number, public title: string, public qt: string) {}

  getLabel(): string {
    return `${this.qt} de ${this.title}`;
  }
}
