const rowel = document.getElementById('table')
const ballEl = document.getElementsByClassName('cartball')[0]
const asideEl = document.getElementsByClassName('sidebar')[0]
const arrowEl = document.getElementsByClassName('icon-left')[0]
const bigDiv = document.getElementById('bigDiv')

ballEl.addEventListener('click', function () {
  asideEl.style.display = 'flex'
})
arrowEl.addEventListener('click', function () {
  asideEl.style.display = 'none'
})


let dishTypes = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Salads', 'Desserts']


let dishes = [
  new Dish('Spicy seasoned seafood noodles', '$ 2.29', 'img/image 0.png', 0, 'Add to cart',0),
  new Dish('Salted Pasta with mushroom sauce', '$ 2.69', 'img/image 1.png', 0, 'Add to cart',1),
  new Dish('Beef dumpling in hot and sour soup', '$ 2.99', 'img/image 2.png', 0, 'Add to cart',2),
  new Dish('Healthy noodle with spinach leaf', '$ 3.29', 'img/image 3.png', 0, 'Add to cart',3),
  new Dish('Spicy instant noodle with special omelette', '$ 3.59', 'img/image 4.png', 0, 'Add to cart',4),
  new Dish('Spicy seasoned seafood noodles', '$ 2.29', 'img/image 0.png', 0, 'Add to cart',5),
  new Dish('Salted Pasta with mushroom sauce', '$ 2.69', 'img/image 1.png', 0, 'Add to cart',6),
  new Dish('Beef dumpling in hot and sour soup', '$ 2.99', 'img/image 2.png', 0, 'Add to cart',7),
  new Dish('Healthy noodle with spinach leaf', '$ 3.29', 'img/image 3.png', 0, 'Add to cart',8),
  new Dish('Spicy instant noodle with special omelette', '$ 3.59', 'img/image 4.png', 0, 'Add to cart',9),

  new Dish('AGLIO OLIO ZOODLES WITH SUMMER VEGETABLES AND SHRIMP', '$ 3.29', 'img/cold1.jpg', 1, 'Add to cart',10),
  new Dish('Cold sesame cucumber noodles', '$ 2', 'img/cold2.jpg', 1, 'Add to cart',11),
  new Dish('CLEAN BROCCOLI SALAD WITH CREAMY ALMOND DRESSING', '$ 3.99', 'img/cold3.jpg', 1, 'Add to cart',12),
  new Dish('QUINOA AND SHAVED CARROT SALAD WITH CHICKPEAS, CURRANTS AND CASHEWS', '$ 3.29', 'img/cold4.jpg', 1, 'Add to cart',13),
  new Dish('SPIRALIZED SUSHI BOWL WITH SALMON SASHIMI AND GINGER MISO DRESSING', '$ 3.59', 'img/cold5.jpg', 1, 'Add to cart',14),

  new Dish('Broccoli Chowder', '$ 3.29', 'img/soup1.jpg', 2, 'Add to cart',15),
  new Dish('Country Fish Chowder', '$ 2', 'img/soup2.jpg', 2, 'Add to cart',16),
  new Dish('Cream of Chicken Soup', '$ 3.99', 'img/soup3.jpg', 2, 'Add to cart',17),
  new Dish('Grandmas Chicken n Dumpling Soup', '$ 3.29', 'img/soup4.jpg', 2, 'Add to cart',18),
  new Dish('Weeknight Turkey Tortilla Soup', '$ 3.59', 'img/soup5.jpg', 2, 'Add to cart',19),

  new Dish('Grilled Potatoes', '$ 3.29', 'img/gril1.jpg', 3, 'Add to cart',20),
  new Dish('Grilled Cabbage Steaks', '$ 2', 'img/gril2.jpg', 3, 'Add to cart',21),
  new Dish('Kentucky Grilled Chicken', '$ 3.99', 'img/gril3.jpg', 3, 'Add to cart',22),
  new Dish('Sticky Grilled Chicken', '$ 3.29', 'img/gril4.jpg', 3, 'Add to cart',23),
  new Dish('The Best Grilled Sirloin Tip Roast', '$ 3.59', 'img/gril5.jpg', 3, 'Add to cart',24),

  new Dish('Asian Slaw', '$ 3.29', 'img/sal1.jpg', 4, 'Add to cart',25),
  new Dish('Kale Salad with Carrot Ginger Dressing', '$ 2', 'img/sal2.jpg', 4, 'Add to cart',26),
  new Dish('Shaved Brussels Sprout Salad', '$ 3.99', 'img/sal3.jpg', 4, 'Add to cart',27),
  new Dish('Best Broccoli Salad', '$ 3.29', 'img/sal4.jpg', 4, 'Add to cart',28),
  new Dish('Orzo salad', '$ 3.59', 'img/sal5.jpg', 4, 'Add to cart',29),

  new Dish('Strawberry-mochi', '$ 3.29', 'img/des1.jpg', 5, 'Add to cart',30),
  new Dish('New York Cheesecake', '$ 2', 'img/des2.jpg', 5, 'Add to cart',31),
  new Dish('Strawberry tarte tatin', '$ 3.99', 'img/des3.jpg', 5, 'Add to cart',32),
  new Dish('Apple-pie', '$ 3.29', 'img/des4.jpg', 5, 'Add to cart',33),
  new Dish('Turkey Pahlava', '$ 3.59', 'img/des5.jpg', 5, 'Add to cart',34),

]



function Dish(name, price, photo, dishTypes, addcart, foodId) {
  this.name = name;
  this.price = price;
  // this.remnant = remnant;
  this.photo = photo;
  this.dishTypes = dishTypes;
  this.addcart = addcart;
  this.foodId = foodId
}

function createDishDiv(el, index) {
  let dish = document.createElement('div');
  dish.className = 'card';

  let name = document.createElement('p');
  name.className = 'food-name';
  name.innerText = el.name;

  let span = document.createElement('span');
  span.className = 'price';
  span.innerText = el.price;



  let image = document.createElement('img');
  image.className = 'photo';
  image.src = el.photo;

  let button = document.createElement('button')
  button.className = 'but ' + index;
  button.innerText = el.addcart

  dish.appendChild(image);
  dish.appendChild(name);
  dish.appendChild(span);
  dish.appendChild(button)

  rowel.appendChild(dish);


}

const countSpan = document.querySelector('.cart-count');

function showCartCount() {
  let meningKorzinamArr = JSON.parse(localStorage.getItem('key'));
  countSpan.innerText = meningKorzinamArr.length;
}




let bascet = []
rowel.addEventListener('click', function (event) {

  if (event.target.className.includes('but')) {
    let narsa = event.target.className.split(' ').pop();

    if (!bascet.includes(narsa)) {
      bascet.push(narsa)
    }
    localStorage.setItem('key', JSON.stringify(bascet))
    filDiv()
    showCartCount()
  }

})



function filDiv() {
  const olinganmassiv = JSON.parse(localStorage.getItem('key'));
  bigDiv.innerHTML = '';
  for (let i = 0; i < olinganmassiv.length; i++) {

    let Dishindex = olinganmassiv[i]
    createcart(dishes[Dishindex])
  }
}



function createcart(el) {
  let divel = document.createElement('div')
  divel.className = 'foodcard';
  divel.innerHTML = `
  <img class="photo" src="${el.photo}"
  <div class="foodname">
                    <p class="food-name">${el.name}</p>
                    <span class="price">${el.price}</span>
                </div>
  <button type="button" data-id="${el.foodId}" class="delete"><i class="icon-delate"></i></button>
  `

  bigDiv.appendChild(divel)

}

 

bigDiv.addEventListener('click', function (event) {
  if(event.target.className == 'delete') {
    let elId = event.target.getAttribute('data-id');
    let meningKorzinamArr = JSON.parse(localStorage.getItem('key')); 

    console.log(meningKorzinamArr.indexOf(elId));

    meningKorzinamArr.splice(meningKorzinamArr.indexOf(elId), 1);
    console.log(meningKorzinamArr);

    localStorage.setItem('key', JSON.stringify(meningKorzinamArr));

    filDiv()
    showCartCount()
  }
})



function funksiya(arr) {
  rowel.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    createDishDiv(arr[i], i)
  }
}
const nav = document.getElementsByClassName('main-nav')[0]

nav.addEventListener('click', function (e) {
  let type = e.target.getAttribute('data-type');
  if (type) {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active')
    }

    e.target.classList.add('active')

    if (type == -1) {
      funksiya(dishes)
    } else {
      let filteredDishes = dishes.filter(function (el) {
        return el.dishTypes == type
      })
      funksiya(filteredDishes)
    }
  }

})

funksiya(dishes)




const inel = document.getElementById('input')
const cardel = document.getElementsByClassName('card')


document.addEventListener('keyup', findCard);


function findCard() {


  let searchedArr = dishes.filter(function (el) {
    return el.name.includes(inel.value)
  });

  funksiya(searchedArr);

}