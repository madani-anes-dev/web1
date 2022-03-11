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

document.getElementById("tbookss").innerHTML = tbookinner;

function addToCart(j) {
    var current = tbookss[j];
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
    <tr    id="tbookss${current.id}">
      <th>${j+1}</th>
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
    var current = tbookss[id];
    current.quantity = 0;
    document.getElementById("tbookss" + id).remove()
    document.getElementById("quantity").innerHTML = cart.length;
}

document.getElementById("tbookss").innerHTML = tbookinner;
document.getElementById("quantity").innerHTML = cart.length;

const form = document.getElementById('form-style-6');
form.addEventListener('submit', function(e) {
    e.preventDefault()
    var newproduct = {
        quantity: 1,
        id: tbookss.length,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
    }
    tbookss.push(newproduct)
    tbookinner += `
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
    document.getElementById("tbookss").innerHTML = tbookinner;
    console.log(tbookss);
});