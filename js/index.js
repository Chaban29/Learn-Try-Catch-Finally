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

const user = '{"name": "Roman"}';

try {
  let obj = JSON.parse(user);
  if (!obj.age) {
    throw new Error('age is not defined');
  }
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log('ReferenceError');
  }
  console.log(error.message);
}

const readData = () => {
  let json = '{"age": 30}';
  try {
    ddssd();
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
  }
};

try {
  readData();
} catch (err) {
  alert('Зовнішнє перехоплення: ' + err); // перехоплено!
}

try {
  alert('Try start');
  fdsfsfssf;
  alert('Try end');
} catch (error) {
  window.alert(error.message);
// }

setTimeout(function () {
  try {
    fdfsfs;
  } catch (error) {
    console.log(error.message);
  }
}, 2000);

try {
  slasasla;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

let json = '{nameadaddaa}';

// let user = JSON.parse(json);

// try {
//   if (user?.age === undefined) {
//     throw new ReferenceError('Age is not defined, at user object');
//   }
// } catch (err) {
//   console.log(err.stack);
// }

try {
  let user = JSON.parse(json);
  console.log(user.age);
} catch (err) {
  console.log(`Sorry, Age is not defined at User`);
}

let json = '{"name": "Roman"}';

try {
  let user = JSON.parse(json);
  console.log(user.age);
} catch (err) {
  console.log('Age is not defined');
}

let error = new Error('Error');
let syntaxError = new SyntaxError('SyntaxError');
let referenceError = new ReferenceError('ReferenceError');
let typeError = new TypeError('TypeError');

console.log(error);
console.log(syntaxError);
console.log(referenceError);
console.log(typeError);

console.log(`Name: ${error.name}, Message: ${error.message}`);

let json = '{"name": "Roman"}';

try {
  JSON.parse('{ this is not json}');
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

try {
  const user = JSON.parse(json);
  if (!user.age) {
    throw new SyntaxError('Age is not defined');
  }
  alert(user.age);
} catch (err) {
  console.log(err.message);
}

let json = '{"age": 30}';

try {
  user = JSON.parse(json);
} catch (err) {
  alert('JSON Error: ' + err);
}

let json = '{ "age": 30 }';
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Неповні дані: відсутнє поле name');
  }

  blabla();

  alert(user.name);
} catch (err) {
  if (err instanceof SyntaxError) {
    alert('JSON Error: ' + err.message);
  } else {
    throw err;
  }
}

const readData = () => {
  let json = '{"age": 23}';

  try {
    bsdadada();
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
  }
};

try {
  readData();
} catch (err) {
  alert('Error ' + err);
}

try {
  console.log('try');
  if (confirm('Need error?')) back__cope();
} catch (err) {
  console.log(err.message);
} finally {
  console.log('Finally!');
}

function foo() {
  try {
    return 1;
  } catch {
  } finally {
    alert('finally');
  }
}

alert(foo());

try {
  console.log({ 1: 1 });
  const name = 'Roman';
  name = 'Donald';
  console.log(name);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('finally');
}

try {
  alert(1);
  alert(2);
} catch (err) {
  console.log('Error is not!');
}

try {
  alert(1);
  dsdsdsdd;
  alert(3);
} catch (err) {
  console.log('Error ' + err.message);
}

try {
  setTimeout(() => {
    dsdadadda;
  }, 2000);
} catch (err) {
  console.log(err.message);
}

setTimeout(() => {
  try {
    dadaddada;
  } catch (err) {
    console.log(err.stack);
  }
}, 1500);

try {
  daadadda;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

const person = '{"name": "Roman", "last name": "Chaban"}';

let parsedPersonToObject = JSON.parse(person);

const json = '{this is not valid json}';

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (err) {
  console.log(err.message);
}

const json = '{"age": 23}';

try {
  let user = JSON.parse(json);
  console.log(user.name);
  if (!user.name) {
    throw new SyntaxError('Error!!!');
  }
} catch (err) {
  console.log('this is error');
}

const error = new Error('Error');
const syntaxError = new SyntaxError('SyntaxError');
const referenceError = new ReferenceError('ReferenceError');
const typeError = new TypeError('TypeError');

console.log(error, syntaxError, referenceError, typeError);

console.log(error.name, error.message);

try {
  JSON.parse('{ddadadad}');
} catch (err) {
  alert(err.name);
  alert(err.message);
}

let json = '{"age": 23}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('This is not valid');
  }
} catch (err) {
  alert('JSON Error: ' + err.message);
}

let json = '{"age": 23}';

try {
  user = JSON.parse(json);
} catch (err) {
  alert('JSON Error' + err);
}

let json = '{"age": 23}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError('This is not valid');
  }
  vdfsdfs();
  alert(1);
} catch (err) {
  if (err instanceof SyntaxError) {
    alert('JSON Error: ' + err.message);
  } else {
    throw err;
  }
// }

try {
  alert('try');
  if (confirm('Do you want to err?')) bad_code();
} catch (err) {
  console.log(err);
} finally {
  console.log('finally');
}

let num = +prompt('Choose your number', 35);

let diff, result;

const fibonacci = (n) => {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error('Error number');
  }
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

let start = Date.now();

try {
  result = fibonacci(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || 'Error');
alert(`${diff}ms`);

function func() {
  try {
    return 1;
  } catch (err) {
    /* --- */
  } finally {
    alert('finally');
  }
}

alert(func());
