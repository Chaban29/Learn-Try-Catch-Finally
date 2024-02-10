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

const user = '{"age": "23"}';

try {
  const parsingUser = JSON.parse(user);
  if (!user.name) {
    throw new Error('User name is not defined, at user object!!!');
  }
  console.log(parsingUser.name);
} catch (error) {
  console.log(error.message);
}

let error = new SyntaxError('error');

console.log(error.name);
console.log(error.message);
console.log(error.stack);

try {
  const person = '{"age": "23"}';
  JSON.parse(person);
  if (!person.name) {
    throw new SyntaxError('This is not name, but this object is not json');
  }
  console.log(person.name);
} catch (err) {
  console.log(err.stack);
}

// let json = '{"age": "30"}';

try {
  let user = JSON.parse(json);
  console.log(+user.age + 1);
} catch (error) {
  console.log('JSON Error: ' + error.message);
}

try {
  alert(1);
  DomainAddda;
  alert(2);
} catch (error) {
  console.log(error.name, error.message);
  console.log(error.stack);
}

try {
  console.log(1);
  dfdfdfd;
} catch (error) {
  console.log(error.stack);
  console.log(3);
}

setTimeout(() => {
  try {
    dsdss;
  } catch (error) {
    console.log(error.stack);
  }
}, 2000);

try {
  fsfs;
} catch {
  console.log('Error!!!!');
}



try {
  user = {
    /*...*/
  };
} catch (err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError');
  }
}

try {
  console.log('Starts try');
  dsdadada;
  console.log('Ends try');
} catch (error) {
  console.log(error.stack);
}

setTimeout(function () {
  try {
    console.log(ddadada);
  } catch (error) {
    console.log(error.message, 'Error is work');
  }
}, 1500);

try {
  dsddada;
} catch (error) {
  console.log('Name: ', error.name);
  console.log('Message: ', error.message);
  console.log('Stack: ', error.stack);
}

const dog = '{this is not valid json strings}';

try {
  const parsedPet = JSON.parse(dog);
  console.log(parsedPet.legs);
} catch (error) {
  console.log(error.message);
}

const human = '{"name": "John"}';

try {
  JSON.parse(human);
  console.log(human.national);
  if (!human.national) {
    throw new Error('National is not defined at human');
  }
} catch (error) {
  console.log(error.stack);
}

// const error = new Error('Error');
const syntaxError = new SyntaxError('SyntaxError');
const referenceError = new ReferenceError('ReferenceError');
const typeError = new TypeError('TypeError');

console.log(error, error.name, error.message);
console.log(syntaxError);
console.log(referenceError);
console.log(typeError);

try {
  JSON.parse('{this is not json}');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// const json = '{"age": 30}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('this object is not valid json');
  }
} catch (err) {
  console.log('JSON Error: ' + err.message);
// }

try {
  console.log(1000);
  dadada;
} catch (error) {
  console.log(error.stack);
}

try {
  const name = 'Roman';
  name = 'Andriy';
} catch (error) {
  console.log(error.stack);
}

try {
  console.log('Start try');
  dfsfssffs;
  console.log('Ends Try');
} catch (error) {
  console.log(error.message);
}

try {
  setTimeout(() => {
    let count = 0;
    count++;
  }, 1000);
  console.log(count);
} catch (error) {
  console.log(error.stack);
}

setTimeout(() => {
  try {
    kjbhbj
    console.log('try');
  } catch (error) {
    console.log('catch');
  }
}, 1000);

// try {
//   lalalaal;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// // }

let json = '{"name": "Roman"}';

const parsedToObject = JSON.parse(json);

// let json = '{this is not valid json}';

try {
  let user = JSON.parse(json);
  console.log(user);
} catch (error) {
  console.log(error.message);
}

// let json = '{"age": "22"}';

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (error) {
  console.log(error.message);
}

let error = new Error('Error');
let syntaxError = new SyntaxError('SyntaxError');
let referenceError = new ReferenceError('ReferenceError');
let typeError = new TypeError('TypeError');

console.log(error, syntaxError, referenceError, typeError);

let secondaryError = new Error('ErrorMessage');

console.log(secondaryError.name, secondaryError.message);