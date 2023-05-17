function sumPositiveElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]; // Прибавляем положительный элемент к сумме
    }
  }
  return sum; // Возвращаем сумму положительных элементов
}

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Обновляем максимальное число
    }
  }
  return max; // Возвращаем наибольшее число
}

function calculateCircleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2); // Вычисляем площадь окружности
  return area; // Возвращаем площадь
}
