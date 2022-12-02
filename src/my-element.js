
import {LitElement, html} from 'lit-element'

export class MyElement extends LitElement {
  render() {
    return html`
    <p>- AGENDA LIT ELEMENT -</p>
    `;
  }
}

customElements.define('my-element', MyElement);
