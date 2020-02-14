// const Worker = class {
//   run() {
//     console.log("working")
//   }

//   print() {
//     this.run()
//   }
// }

// const HardWorker = class extends Worker {
//   run() {
//     console.log("hardWorking")
//   }
// }

// const worker = new HardWorker()
// console.log(worker instanceof Worker)

// worker.print()

// const EssentialObject = class {
//   #name = ""
//   #screen = null
//   constructor(name) {
//     this.#name = name
//   }
//   camouflage() {
//     this.#screen = (Math.random() * 10).toString(16).replace(".", "")
//   }
//   get name() {
//     return this.#screen || this.#name
//   }
// }

///

/* const Worker = class {
  run() {
    console.log("working")
  }
  print() {
    this.run()
  }
}
const HardWorker = class extends Worker {
  run() {
    console.log("hardWorking")
  }
}

const Manager = class {
  #workers
  constructor(...workers) {
    // Worker 패밀리면 다 받아주겟다. 추상인터페이스에 의존 => DIP
    if (workers.every(w => w instanceof Worker)) this.#workers = workers
    else throw "invalid workers"
  }
  doWork() {
    this.#workers.forEach(w => w.run())
  }
}

const manager = new Manager(new Worker(), new HardWorker())
manager.doWork() */

// 개별 뷰에는 제어가 다 없어짐
const View = class {
  getElement(data) {
    throw "override"
  }
  initAni() {
    throw "override"
  }
  startAni() {
    throw "override"
  }
}

// 뷰를 받아서 그려주는 함수
const Renderer = class {
  #view = null
  #base = null
  constructor(baseElem) {
    this.#base = baseElem
  }

  set view(v) {
    // 의존성역전 (추상클래스 받음)
    if (v instanceof View) this.#view = v
    else throw `invalid view: ${v}`
  }

  render(data) {
    const base = this.#base,
      view = this.#view
    if (!base || !view) return "no base or view"
    let target = base.firstElementChild
    do base.removeChild(target)
    while ((target = target.nextElementSibling))
    base.appendChild(view.getElement(data))
    view.initAni()
    view.startAni()
  }
}
