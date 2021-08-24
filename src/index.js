import './style/style.css';

import _ from 'lodash';

function component() {
  const element = document.createElement('h4');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Webpack', ' boilerplate'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
