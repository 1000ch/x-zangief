const combo: string = require('../img/combo.gif');
const fail: string = require('../img/fail.gif');
const rolling: string = require('../img/rolling.gif');
const piledriver: string = require('../img/piledriver.gif');
const win: string = require('../img/win.gif');

export default class XZangief extends HTMLElement {
  img: HTMLImageElement;

  static get observedAttributes(): string[] {
    return ['type'];
  }

  static get types(): string[] {
    return [
      'combo',
      'fail',
      'rolling',
      'piledriver',
      'win'
    ];
  }

  get type(): string | undefined {
    if (this.hasAttribute('type')) {
      return this.getAttribute('type') || undefined;
    }

    return undefined;
  }

  set type(value: string | undefined) {
    if (value && XZangief.types.includes(value)) {
      this.setAttribute('type', value);
    } else {
      this.removeAttribute('type');
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).appendChild(document.createElement('img'));

    this.img = this.shadowRoot?.querySelector('img') as HTMLImageElement;
  }

  connectedCallback(): void {
    this.setImage();
  }

  attributeChangedCallback(attributeName: string, oldValue: any, newValue: any): void {
    if (attributeName === 'type') {
      this.setImage();
    }
  }

  setImage(): void {
    switch (this.type) {
      case 'combo':
        this.img.src = combo;
        break;
      case 'fail':
        this.img.src = fail;
        break;
      case 'rolling':
        this.img.src = rolling;
        break;
      case 'piledriver':
        this.img.src = piledriver;
        break;
      case 'win':
        this.img.src = win;
        break;
      default:
        this.img.src = combo;
        break;
    }
  }
}
