// Функция для поиска самого дорогого товара
function findMostExpensiveProduct(products) {
  let maxPrice = 0; // Максимальная цена товара
  let maxProduct = null; // Самый дорогой товар

  // Итерация по товарам
  for (let i = 0; i < products.length; i++) {
    const product = products[i]; // Текущий товар

    // Проверка, является ли цена текущего товара максимальной
    if (product.priceEUR > maxPrice) {
      maxPrice = product.priceEUR; //Обновление максимальной цены
      maxProduct = product; // Обновление самого дорогого товара
    }
  }

  // Формирование строки с информацией о самом дорогом товаре
  if (maxProduct) {
    return `Самый дорогой товар ${maxProduct.title} стоит ${maxProduct.priceEUR} EUR`;
  } else {
    return "Нет товаров";
  }
}

const products = [
  { title: "MacBook", priceEUR: 999.99 },
  { title: "Smartphone", priceEUR: 799.99 },
  { title: "TV", priceEUR: 1499.99 },
];

// Вызов функции для поиска самого дорогого товара
const result = findMostExpensiveProduct(products);

console.log(result); // Вывод: "Самый дорогой товар TV и стоит 1499.99 EUR"




// Функция для вычисления общей суммы товаров
function calculateTotalPrice(items) {
  let totalPrice = 0;

  // Проходим по каждому товару в массиве
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Добавляем цену товара к общей сумме
    totalPrice += item.price;
  }

  // Возвращаем общую сумму товаров
  return totalPrice;
}

// Массив товаров
const items = [
  { title: "MacBook", price: 999.99 },
  { title: "Smartphone", price: 799.99 },
  { title: "TV", price: 1499.99 },
];

// Вызываем функцию calculateTotalPrice и сохраняем результат в переменную total
const total = calculateTotalPrice(items);

// Выводим общую сумму товаров в консоль
console.log("Общая сумма товаров:", total);
