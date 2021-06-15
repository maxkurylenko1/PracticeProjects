/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

function sendReqApi(url) {
  return fetch(url).then((res) => res.json());
}

export { sendReqApi };
