console.log('hello world!');

const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
console.log(dropdownList);

//addEventListener for dropdown
dropdown.addEventListener('click', () => {
  // console.log(dropdownList.classList);
  // dropdownList.style.display = 'block';
  dropdownList.classList.toggle('active');
  // if (dropdownList.classList.contains('active')) {
  //   dropdownList.classList.remove('active');
  // } else {
  //   dropdownList.classList.add('active');
  // }
});


const shopLinks = document.querySelectorAll('.shop__link');
const dropdownLinks = document.querySelectorAll('.dropdown__link');


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


//addEventListener for shopLinks & dropdownLinks
[...shopLinks, ...dropdownLinks]
  .forEach((link) => link.addEventListener('click', solution));

// console.log(link.dataset.type);

function solution() {
  let type = this.dataset.type;
  console.log(cards.filter((el) => el.type == type));
}
