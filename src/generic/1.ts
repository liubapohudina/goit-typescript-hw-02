/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T1, T2>(): Promise<[T1, T2]> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as [T1, T2]);
  });
}

getPromise<string, number>()
  .then((data) => {
    console.log(data); 
});

export {};


