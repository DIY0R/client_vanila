import { componentTask } from '../../types/componentTask'

export class Footer implements componentTask {
  constructor() {}
  toHTML() {
    const el = document.createElement('div')
    el.classList.add('bg-dark', 'text-secondary', 'px-1', 'py-4', 'text-center')
    el.innerHTML = `<div class="py">
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> 
      </div>
    </div>`

    return el
  }
}
