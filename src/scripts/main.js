'use strict';

function waitFor(element, eventName) {
// write your code here
  const promise = new Promise((resolve, reject) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const printMessage = (message) => {
// write your code here
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.textContent = `${message}`;

  document.body.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};
