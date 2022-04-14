export class App {
  private componets: Array<any>
  constructor(private classElement: string, componets: Array<any>) {
    this.componets = componets
  }

  render() {
    const div = document.querySelector(this.classElement)
    this.componets.forEach((renderComponent) => {
      div.appendChild(renderComponent.toHTML())
    })
  }
}
