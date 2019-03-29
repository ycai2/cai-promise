const CaiPromise = require('./promise');

const fetch = (shouldSucceed, onSuccess, onError) => {
  const fetchResult = 1;

  console.log('Loading...');
  setTimeout(() => {
    if (shouldSucceed) {
      console.log('Loaded');
      onSuccess(fetchResult);
    } else {
      console.log('Failed');
      onError(new Error('Fetch failed'));
    }
  }, 1000);
};

console.log('###', CaiPromise);

const pm = (shouldResolve) => new CaiPromise((resolve, reject) => {
  fetch(
      shouldResolve,
      (value) => {
        resolve(value);
      },
      (error) => {
        reject(error);
      },
  );
});

console.log('Test Start:');

pm(true)
    .then((value) => {
      console.log(`Passed. Promise resolved with value ${value}`);
      return 'hello';
    })
    .then((value) => {
      console.log(`Passed. Chained "then" resolved with value ${value}`);
    })
    .catch((error) => {
      console.log(`Failed. ${error}`);
    });

pm(false)
    .then((value) => {
      console.log(`Failed. It was resolved with ${value}`);
      return 'hello';
    })
    .then((value) => {
      console.log(`Failed.
        It was a chained "then" with ${value}`);
    })
    .catch((error) => {
      console.log(`Passed. ${error}`);
    });
