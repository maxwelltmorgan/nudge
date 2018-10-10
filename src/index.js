// import your function
import { myName } from './myName';

function component() {
  var content = document.getElementById('content');
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Max');
  return element;
}

  content.appendChild(component());
