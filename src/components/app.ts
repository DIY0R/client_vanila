export class App {
  constructor(private classElement: string, private componets: Array<any>) {}

  render() {
    const div = document.querySelector(this.classElement)
    this.componets.forEach((renderComponent) => {
      div.appendChild(renderComponent.toHTML())
    })
  }
}
