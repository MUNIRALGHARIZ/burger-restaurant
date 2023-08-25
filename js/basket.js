let basket_icon = document.querySelector('.fa-sharp');
let basket_section = document.querySelector('.basket');

  // when user click on basket icon
  basket_icon.addEventListener("click",_=>{
    basket_section.style = "animation:transformmm 1s forwards;";
  })
  document.querySelector('.go-home').addEventListener("click",_=>{
    basket_section.style = "animation:transformmm2 1s forwards;";
  })

  
  function addToCart(productName, imgSrc, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, imgSrc, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart);
    alert('the product added');
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productName !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart);
}


function displayCart(cart) {
    const cartContainer = document.getElementById('cart-items');
    let total = 0;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center" style="display:flex;justify-content:space-between;align-items: center;overflow-x: scroll; gap:3rem;">
            <img style="width:80px;height: 80px;border-radius: 50%;object-fit: cover;" src="${item.imgSrc}" alt="${item.productName}">
                <span style="font-size:2rem;color:#000000;">${item.productName}</span>
                <span style="font-size:2rem;color:#000000;">$${item.price}</span>
                <i style="color:red;cursor:pointer;" class="delete-btn fa-solid fa-xmark" onclick="removeFromCart('${item.productName}')"></i>
            </div>
        `;

        cartContainer.appendChild(cartItem);
        total += parseFloat(item.price);
    });

    document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
}

// Call displayCart to initialize the cart display
displayCart(JSON.parse(localStorage.getItem('cart')) || []);
