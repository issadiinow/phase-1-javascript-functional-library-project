// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i], i, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    // If no accumulator is passed, use the first element as the initial value
    let startIdx = 0;
    if (acc === undefined) {
      acc = Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
      startIdx = 1;
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const values = Object.values(collection);
      for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
      }
    }
  
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (shallow) {
          newArr.push(...array[i]);
        } else {
          myFlatten(array[i], shallow, newArr);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  