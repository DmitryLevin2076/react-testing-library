// const sum = require('./sum');
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

/** Стандартные сопоставления **/

// test('присваивание объекту', () => {
//     const data = {один: 1};
//     data['два'] = 2;
//     expect(data).toEqual({один: 1, два: 2});
// });
//
// test('сложение положительных чисел не равно нулю', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0);
//         }
//     }
// });

/** Правдивость **/

// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// });
//
// test('ноль', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });
//
// test('строка 123', () => {
//     const z = '123';
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).toBeTruthy();
//     expect(z).not.toBeFalsy();
// });

//######

/** Числа **/

// test('два плюс два', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
//
//     // toBe и toEqual эквивалентны по отношению к числам
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });
//
// test('сложение чисел с плавающей запятой', () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);         Это не будет работать из-за ошибки округления
//     expect(value).toBeCloseTo(0.3); // А это сработает.
// });

/** Строки **/

// test('в команде нет места Я', () => {
//     expect('команда').not.toMatch(/Я/);
// });
//
// test('но есть "ася" в Васе', () => {
//     expect('Вася').toMatch(/ася/);
// });

/** Массивы и перебираемые объекты **/

// const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk',
// ];
//
// test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(new Set(shoppingList)).toContain('milk');
// });

/** Исключения **/

// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
// }
//
// test('compiling android goes as expected', () => {
//     expect(() => compileAndroidCode()).toThrow();
//     expect(() => compileAndroidCode()).toThrow(Error);
//
//     // Вы также можете использовать точное сообщение об ошибке или регулярное выражение
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//     expect(() => compileAndroidCode()).toThrow(/JDK/);
// });

/** Тест byPriceRange **/

// const productFilter = require('./sum');
//
// const products = [
//     { name: 'onion', price: 12 },
//     { name: 'tomato', price: 26 },
//     { name: 'banana', price: 29 },
//     { name: 'orange', price: 38 }
// ];
//
// test('Test product filter by range', () => {
//     const FROM = 15;
//     const TO = 30;
//     const filteredProducts = productFilter.byPriceRange(products, FROM, TO);
//
//     expect(filteredProducts).toHaveLength(2);
//     expect(filteredProducts).toContainEqual({ name: 'tomato', price: 26 });
//     expect(filteredProducts).toEqual([{ name: 'tomato', price: 26 }, { name: 'banana', price: 29 }]);
//     expect(filteredProducts[0].price).toBeGreaterThanOrEqual(FROM);
//     expect(filteredProducts[1].price).toBeLessThanOrEqual(TO);
//     expect(filteredProducts).not.toContainEqual({ name: 'orange', price: 38 });
// });

// const fetchData = require('./sum');
//
// Не делайте так!
// test('the data is peanut butter', () => {
//     function callback(error, data) {
//         if (error) {
//             throw error;
//         }
//         expect(data).toBe('peanut butter');
//     }
//
//     fetchData(callback);
// });
//
// Надо так!
// test('the data is peanut butter', done => {
//     function callback(error, data) {
//         if (error) {
//             done(error);
//             return error;
//         }
//         try {
//             expect(data).toBe('peanut butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//
//     fetchData(callback);
// });

// test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toBe('peanut butter');
// });

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', function () {
    render(<App />)
    screen.debug() // отображает дерево


    // getBy... - возвращает соответствующий узел, либо ошибку если нет совпадающих элементов или если найдено более одного совпадения (используйте getAllBy)
    // getAllBy... - возвращает массив всех совпадающих узлов для запроса и выдает ошибку, если нет совпадающих элементов.
    expect(screen.getByText(/Search:/i)).toBeInTheDocument() // ищет текст
    expect(screen.getByRole('textbox')).toBeInTheDocument() // ищет по роли - checkbox, textbox и тд
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument() // ищет <label>
    expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument() // ищет элементы по плейсхолдеру
    expect(screen.getByAltText('search image')).toBeInTheDocument() // ищет элементы по альтернативному тексту
    expect(screen.getByDisplayValue('')).toBeInTheDocument() // поиск элемента по отображаемому значению или по атрибуту value

    // queryBy... - возвращает соответствующий узел, либо null если нет соответствующих элементов. Это полезно для утверждения элемента, которого нет. Выдает ошибку, если найдено более одного совпадения (используйте queryAllBy)
    // queryAllBy... - возвращает массив всех совпадающих узлов для запроса и возвращает пустой массив ( []), если нет совпадающих элементов.
    expect(screen.queryByText(/Searches for React/i)).toBeNull()
  });
})

describe('App', () => {
  it('renders App component async test', async function () {
    render(<App />)

    // findBy... - возвращает промис, который разрешается, когда найден элемент, соответствующий заданному запросу. Обещание отклоняется, если элемент не найден или если найдено более одного элемента после тайм-аута по умолчанию, равного 1000 мс. Если вам нужно найти более одного элемента используйте findAllBy.
    // findAllBy... - возвращает обещание, которое разрешается в массив элементов, когда найдены какие-либо элементы, соответствующие заданному запросу. Обещание отклоняется, если после тайм-аута по умолчанию, равного 1000мс, не найдено ни одного элемента.
    expect(screen.queryByText(/Logged in as/i)).toBeNull()
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument()
  });
})

// Assertive Functions:
// - toBeDisabled
// - toBeEmptyDOMElement
// - toBeRequired
// - toContainElement
// - toHaveClass
// - toHaveStyle
// - toHaveDisplayValue
// - toHaveDescription
// - toBeEnabled
// - toBeInTheDocument
// - toBeValid
// - toContainHTML
// - toHaveFocus
// - toHaveTextContent
// - toBeChecked
// - toBeEmpty
// - toBeInvalid
// - toBeVisible
// - toHaveAttribute
// - toHaveFormValues
// - toHaveValue
// - toBePartiallyChecked
