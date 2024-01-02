document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1 , name: "Classic Burger" , img: "burger11.jpg" , price: 15000 , desc: "Fillet ayam lembut yang bisa digoreng atau dipanggang, memberikan pengalaman burger yang ringan namun memuaskan."},
            {id: 2 , name: "Italian Pizza" , img: "pizza2.jpg" , price: 25000 , desc: "Kesederhanaan Italia dalam satu suapan! Pizza dengan saus tomat, mozzarella segar, daun basil, dan sedikit minyak zaitun untuk cita rasa yang autentik."},
            {id: 3 , name: "Ice coffe" , img: "drink2.jpg" , price: 13000 , desc: "Kopi yang disajikan dingin dengan es batu. Biasanya terbuat dari kopi hitam yang diseduh kemudian didinginkan dan bisa ditambahkan dengan susu atau sirup."},
        ],

        openModal : null
    }))

    Alpine.data('burger' , () => ({
        menu: [
            {id: 11 , name: "Cheese Burger" , img: "burger11.jpg" , price: 15000 , desc: "Perpaduan sempurna antara daging panggang berkualitas tinggi dan keju meleleh yang menciptakan sensasi gurih tak terlupakan."},
            {id: 12 , name: "Burger Ayam" , img: "burger2.jpg" , price: 25000 , desc: "Fillet ayam lembut yang bisa digoreng atau dipanggang, memberikan pengalaman burger yang ringan namun memuaskan."},
            {id: 13 , name: "Burger Vegan" , img: "burger3.jpg" , price: 35000 , desc: "Burger tanpa produk hewani, menghadirkan sensasi unik dari sayuran segar, kacang-kacangan, atau tempe."},
            {id: 14 , name: "Burger BBQ" , img: "burger4.jpg" , price: 45000 ,desc: "Daging panggang lezat dengan saus BBQ, bawang, dan saus tomat yang menggoda selera dengan perpaduan manis, asam, dan gurih."},
            {id: 15 , name: "Burger Mushroom" , img: "burger5.jpg" , price: 15000 , desc:"Kelezatan daging panggang dengan keju Swiss meleleh dan irisan jamur yang menciptakan harmoni rasa yang luar biasa."},
            {id: 16 , name: "Burger Jalapeno" , img: "burger6.jpg" , price: 25000 , desc: " Rasa pedas yang menyegarkan dari irisan cabai jalapeno yang menambahkan dimensi baru pada daging panggang."},
            {id: 17 , name: "Burger Patty" , img: "burger7.jpg" , price: 35000 , desc: "Pengalaman cita rasa kuat dengan keju blue cheese yang unik, memberikan karakter khas pada setiap gigitan."},
            {id: 18 , name: "Burger Teriyaki" , img: "burger8.jpg" , price: 45000 ,desc: "Daging panggang dengan saus teriyaki yang manis-gurih, disempurnakan dengan irisan sayuran segar, menciptakan perpaduan rasa Asia yang menggoda."},
        ],
        openModalBurger : null
    }))
    
    Alpine.data('pizza' , () => ({
        menu: [
            {id: 21 , name: "Pizza Pepperoni" , img: "pizza11.jpg" , price: 15000 , desc: "Klasik yang tak pernah gagal! Pizza dengan lapisan saus tomat, keju mozzarella melimpah, dan irisan pepperoni yang gurih dan renyah."},
            {id: 22 , name: "Pizza Margherita" , img: "pizza2.jpg" , price: 25000 , desc: "Kesederhanaan Italia dalam satu suapan! Pizza dengan saus tomat, mozzarella segar, daun basil, dan sedikit minyak zaitun untuk cita rasa yang autentik."},
            {id: 23 , name: "Pizza Hawaiian" , img: "pizza3.jpg" , price: 35000 , desc: "Gabungan manis dan asin yang memikat! Pizza dengan saus tomat, keju mozzarella, potongan ham, dan irisan nanas yang memberikan sentuhan manis unik."},
            {id: 24 , name: "Pizza Vegetarian" , img: "pizza4.jpg" , price: 45000 , desc: "Pesona sayuran dalam bentuk pizza! Pizza dengan beragam sayuran segar seperti paprika, jamur, bawang, dan topping lainnya untuk pengalaman rasa yang sehat dan lezat."},
            {id: 25 , name: "Pizza Chicken" , img: "pizza5.jpg" , price: 15000 , desc: "Perpaduan yang tak biasa! Pizza dengan saus BBQ sebagai dasar, potongan ayam panggang, bawang, keju mozzarella, dan taburan daun ketumbar untuk cita rasa yang kaya dan berbeda."},
            {id: 26 , name: "Pizza Seafood" , img: "pizza6.webp" , price: 25000 , desc: "Kelezatan laut dalam setiap gigitan! Pizza dengan campuran seafood seperti udang, cumi, atau daging kepiting dengan saus tomat dan keju mozzarella."},
            {id: 27 , name: "Pizza Quattro" , img: "pizza7.jpg" , price: 35000 , desc: "Keempat musim dalam satu pizza! Pizza yang terbagi menjadi empat bagian dengan topping yang berbeda: jamur, artichoke hearts, olive, dan prosciutto untuk menciptakan pengalaman rasa yang beragam."},
            {id: 28 , name: "Pizza Beef" , img: "pizza8.jpg" , price: 45000 , desc: "Kenikmatan daging panggang dalam setiap irisannya! Pizza dengan potongan daging sapi panggang, saus BBQ, keju mozzarella, dan tambahan bawang untuk cita rasa yang menggoda selera."},
        ],
        openModalPizza : null
    }))

    Alpine.data('drinks' , () => ({
        menu: [
            {id: 31 , name: "Ice tea" , img: "drink1.jpg" , price: 15000 , desc: "Minuman segar dengan rasa teh yang disajikan dingin dengan es batu. Biasanya memiliki rasa yang ringan dan menyegarkan."},
            {id: 32 , name: "Ice coffe" , img: "drink2.jpg" , price: 13000 , desc: "Kopi yang disajikan dingin dengan es batu. Biasanya terbuat dari kopi hitam yang diseduh kemudian didinginkan dan bisa ditambahkan dengan susu atau sirup."},
            {id: 33 , name: "Orange juice" , img: "drink3.jpg" , price: 20000 , desc: "Minuman jeruk segar yang dihasilkan dari perasan buah jeruk. Kaya akan vitamin C dan memiliki rasa manis asam yang segar."},
            {id: 34 , name: "Strawbery juice" , img: "drink4.jpg" , price: 20000 , desc: "Minuman dari perasan buah stroberi yang manis dengan aroma yang khas. Biasanya menyegarkan dan manis."},
            {id: 35 , name: "Ice cola" , img: "drink5.jpg" , price: 13000 , desc: "Minuman berkarbonasi dengan rasa manis yang dihasilkan dari campuran sirup cola dengan air berkarbonasi, biasanya disajikan dengan es batu."},
            {id: 36 , name: "Water" , img: "drink6.jpeg" , price: 5000 , desc: "Air mineral atau air putih, penting untuk menjaga hidrasi tubuh."},
            {id: 37 , name: "brown sugar" , img: "drink7.jpeg" , price: 25000 , desc: " Minuman yang terbuat dari air gula merah atau gula aren yang dimasak hingga kental dan biasanya disajikan dengan es."},
            {id: 38 , name: "ice fruit" , img: "drink8.jpeg" , price: 20000 , desc: "Minuman segar yang terbuat dari perasan buah-buahan yang beragam, seperti jambu, apel, melon, atau kombinasi buah lainnya. Kaya akan nutrisi dan seringkali menyegarkan."},
        ],
        openModalDrinks: null
    }))



    Alpine.store('cart' , {
        items:[],
        total:0,
        quantity:0,
        add(newItem){
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id)

            //jika cart kosong
            if(!cartItem){
                this.items.push({...newItem , quantity: 1 , total: newItem.price})
                this.quantity++
                this.total += newItem.price
            } else {
                // jika tidak kosong maka tambahkan quantity nya
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id){
                    return item
                    }else{
                        item.quantity ++;
                        item.total = item.price * item.quantity ;
                        this.quantity++
                        this.total += item.price
                        return item
                    }
                })
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id)

            if(cartItem.quantity > 1){
                this.items = this.items.map((item) => {
                    if(item.id !== id){
                        return item
                    } else {
                        item.quantity--
                        item.total = item.price * item.quantity
                        this.quantity--
                        this.total -= item.price
                        return item
                    }
                })
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id)
                this.quantity--
                this.total -= cartItem.price
            }
        },
        showProductInfo(product) {
            this.selectedProduct = product;
            this.isProductInfoOpen = true;
        },
    })
})


// konversi rupiah
const rupiah = (Number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits:0,
    }).format(Number)
}


const form = document.getElementById("checkoutForm");
const checkoutButton = document.querySelector('.checkout-button');

checkoutButton.addEventListener('click', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);

    try {
        const response = await fetch('php/placeOrder.php', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            const token = await response.text();
            window.snap.pay(token);; 
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
    } catch (err) {
        console.log(err.message);
    }
});



