'use strict';

try {
  console.log(1);
  const person = {};
  if (!person.name) {
    throw new Error('Person name is not defined');
  }
} catch (error) {
  console.log(error);
} finally {
  console.log('code is work!');
}

try {
  const name = 'John';
  if (name === 'Roman') {
    throw new Error('User Roman is not defined');
  }
} catch (err) {
  console.log(err.message);
}

try {
  console.log('Try is working!');
} catch (error) {
  console.log(error);
}

try {
  DDD;
  setInterval(() => {
    console.log(1);
  }, 100);
} catch (err) {
  console.log(err);
}

try {
  flsfmsfs;
} catch (error) {
  console.log(error);
}

try {
  lalalaal;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

const object = '{"name":"Roman", "age":"23"}';

const parsedObject = JSON.parse(object);

parsedObject.age = 21;

const toJSONString = JSON.stringify(parsedObject);

console.log(parsedObject);

console.log(toJSONString);

let json = '{"name":"Roman" }';

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (error) {
  alert('Sorry , but your fetching is error!');
  console.log(error.stack);
}