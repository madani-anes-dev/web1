var hbook = ["From babel to dragomans", "The decline of Eastern christianity", "In the Shadow of the Sword", "The Great Caliphs", "The Ornament of the World", "The myth of the andalusian paradise", "The myth of the andalusian paradise", "The myth of the andalusian paradise"]
var hprices = [1300, 1650, 2200, 1700, 1900, 1500, 1500, 1500]


var hbookss = []
var hbookinner = ""
var cart = []

for (let i = 0; i < hbook.length; i++) {
    const name = hbook[i]
    const price = hprices[i]

    var book = {
        quantity: 1,
        id: i,
        name: name,
        price: price,
        category: "History",
    }
    hbookss.push(book);
    hbookinner += `
        <div class="swiper-slide card" style="width: 18rem;margin:15px;">
            <img src="img/book.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="card-body2">  
                    <p id="price">${price} DA</p>
                    <a class="btn btn-primary" onclick="addToCart(${i})" >Add to card</a>
                </div>
            </div>
        </div>
   `
}
var tbook = ["The Truth About Your Future", "Digital Leadership", "The Dream Machine", "Rage Inside the Machine", "The Victorian Internet", "Hymn Of Modernity", "The Truth About Your Future", "The Truth About Your Future"]
var tprices = [3000, 2500, 2100, 1800, 5000, 3500, 5000, 3500]


var tbookss = []
var tbookinner = ""

for (let j = 0; j < tbook.length; j++) {
    const name = tbook[j]
    const price = tprices[j]

    var book2 = {
        quantity: 1,
        id: j,
        name: name,
        price: price,
        category: "Tech",
    }
    tbookss.push(book2);
    tbookinner += `
        <div class="swiper-slide card" style="width: 18rem;margin:15px;">
            <img src="img/book.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="card-body2">  
                    <p id="price">${price} DA</p>
                    <a class="btn btn-primary" onclick="addToCart(${j})" >Add to card</a>
                </div>
            </div>
        </div>
   `
}

document.getElementById("hbookss").innerHTML = hbookinner;
document.getElementById("tbookss").innerHTML = tbookinner;
document.getElementById("quantity").innerHTML = cart.length;

function addToCart(i) {
    var current = hbookss[i];
    var P = document.getElementById("cartItems").innerHTML;

    const found = cart.find(element => element.id == current.id);
    if (found) {
        cart.forEach(element => {
            if (element.id = found.id) {
                element.quantity++
                    document.getElementById("qu" + element.id).innerHTML = element.quantity;
            }
        });
    } else {
        cart.push(current);
        P += `
    <tr    id="hbookss${current.id}">
      <th>${i+1}</th>
      <td>${current.name}</td>
      <td id="qu${current.id}">${current.quantity}</td>
      <td>${current.price}DA</td>
      <td>${current.category}</td>
      <td><button   class="clos"
      onclick="suprimmer(${current.id})"> <img  src="img/remove.png" style="  width: 30px; height: 30px; background: none;">      </button></td>      
    </tr>
   `
        document.getElementById("cartItems").innerHTML = P;
        document.getElementById("quantity").innerHTML = cart.length;
    }

}

function suprimmer(id) {
    cart = cart.filter((element) => element.id != id);
    var current = hbookss[id];
    current.quantity = 0;
    document.getElementById("hbookss" + id).remove()
    document.getElementById("quantity").innerHTML = cart.length;
}

document.getElementById("hbookss").innerHTML = hbookinner;
document.getElementById("quantity").innerHTML = cart.length;

const form = document.getElementById('form-style-6');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    var newproduct = {
        quantity: 1,
        id: hbookss.length,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
    }
    hbookss.push(newproduct)
    hbookinner += `
        <div class="swiper-slide card" style="width: 18rem;margin:15px;">
            <img src="img/book.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="card-body2">  
                    <p id="price">${price} DA</p>
                    <a class="btn btn-primary" onclick="addToCart(${i})" >Add to card</a>
                </div>
            </div>
        </div>
   `
    document.getElementById("hbookss").innerHTML = hbookinner;
    console.log(hbookss);
});