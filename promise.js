/*
* Usage:
*
* const pm = new Promise((resolve, reject) => {
*   fetch(
*     (data) => {
*       resolve(data);
*     },
*     (err) => {
*       reject(err);
*     }
*   )
* });
*
*
*/

const states = {
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
};

class CaiPromise {
  constructor(callback) {
    this.state = states.PENDING;
    this.result = null;
    this.handlers = [];
  }

  resolve(result) {
    this.state = states.RESOLVED;
    this.result = result;
  }

  reject(error) {
    this.state = states.REJECTED;
    this.result = error;
  }
}

module.exports = CaiPromise;
