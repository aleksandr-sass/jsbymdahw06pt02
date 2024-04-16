# Домашняя работа к шестому занятию
## Часть 2. Массив объектов с пакетами кофе
### Ход решения

1. Создадим массив **cards** (см. Приложение А);
2. Заглушим (присвоим '#') ссылки из сортов кофе, расположенных в выпадающем меню;
3. Зададим этим же (см. пункт №3) ссылкам атрибут **data-type** со значениями, аналогичными тем, что ранее (при работе в классе) были заданы у кнопок **"Показать"**, расположенных ниже
4. JS: 
```
// "соберем" воедино все ссылки из dropdown-меню
const  dropdownLinks = document.querySelectorAll('.dropdown__link');
//дадим addEventListener для shopLinks и dropdownLinks
[...shopLinks, ...dropdownLinks]
  .forEach((link) => link.addEventListener('click', solution));
```

5. JS: дадим определение функции solution()
```
function solution() {
  let type = this.dataset.type;
  console.log(cards.filter((el) => el.type == type));
}
```
***Ура! Задача выполнена!***
=


### Приложение А. Массив cards
```
const cards = [
  {
    id: '01',
    name : 'ETHIOPIA COFFEE 250гр',
    price : '18.99',
    type : 'ETHIOPIA'
  },
  {    
    id: '02',
    name : 'ETHIOPIA COFFEE 500гр',
    price : '39.99',
    type : 'ETHIOPIA'
  },
  {    
    id: '03',
    name : 'ETHIOPIA COFFEE 1000гр',
    price : '56.00',
    type : 'ETHIOPIA'
  },
  {    
    id: '04',
    name : 'KENYA COFFEE 250гр',
    price : '18.99',
    type : 'KENYA'
  },
  {    
    id: '05',
    name : 'KENYA COFFEE 500гр',
    price : '39.99',
    type : 'KENYA'
  },
  {    
    id: '06',
    name : 'KENYA COFFEE 1000гр',
    price : '56.00',
    type : 'KENYA'
  },
  {    
    id: '07',
    name : 'COLUMBIA COFFEE 250гр',
    price : '18.99',
    type : 'COLUMBIA'
  },
  {    
    id: '08',
    name : 'COLUMBIA COFFEE 500гр',
    price : '39.99',
    type : 'COLUMBIA'
  },
  {    
    id: '09',
    name : 'COLUMBIA COFFEE 1000гр',
    price : '56.00',
    type : 'COLUMBIA'
  },
  {    
    id: '10',
    name : 'QUATEMALA COFFEE 250гр',
    price : '18.99',
    type : 'QUATEMALA'
  },
  {    
    id: '11',
    name : 'QUATEMALA COFFEE 500гр',
    price : '39.99',
    type : 'QUATEMALA'
  },
  {    
    id: '12',
    name : 'QUATEMALA COFFEE 1000гр',
    price : '56.00',
    type : 'QUATEMALA'
  }  
];
```
