const products = [
    { id: 1, name: 'GÁS', price: 'R$ 90,00 /unid', image: 'product/iten1.png', obs:'‎FARDO', stock: 'A VISTA'},
    { id: 2, name: 'GALÃO 20L/10L', price: 'R$ 8,00 /unid', image: 'product/iten2.png', obs:'‎FARDO', stock: 'A VISTA'},
    { id: 3, name: 'AGUA COM GÁS', price: 'R$ 2,50 /unid', image: 'product/iten3.png', obs:'FARDO', stock: ' 21,96R$'},
    { id: 4, name: 'AGUA SEM GÁS', price: 'R$ 2,00 /unid', image: 'product/iten4.png' , obs:'FARDO',stock: '9,96R$'},
    { id: 5, name: 'SKOL', price: 'R$ 3,50 /unid', image: 'product/iten5.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 6, name: 'BRAHMA', price: 'R$ 3,50 /unid', image: 'product/iten6.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 7, name: 'HEINKEN', price: 'R$ 6,75 /unid', image: 'product/iten7.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 8, name: 'IMPERIO', price: 'R$ 3,00 /unid', image: 'product/iten8.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 9, name: 'EISENBANH', price: 'R$ 5,25 /unid', image: 'product/iten9.png', obs:'FARDO',stock: 'A VISTA' },
    { id: 10, name: 'COCA-COLA', price: 'R$ 10,00 /unid', image: 'product/iten10.png', obs:'FARDO',stock: '52,00R$'},
    { id: 11, name: 'COCA-COLA ZERO', price: 'R$ 10,00 /unid', image: 'product/iten11.png', obs:'FARDO',stock: '52,00R$'},
    { id: 12, name: 'FANTA LARANJA', price: 'R$ 7,00 /unid', image: 'product/iten12.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 13, name: 'SPRITE', price: 'R$ 6,50 /unid', image: 'product/iten13.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 14, name: 'SODA LIMONADA', price: 'R$ 6,00 /unid', image: 'product/iten14.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 15, name: 'GEBEL', price: 'R$ 5,00 /unid', image: 'product/iten15.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 16, name: 'GARANA ', price: 'R$ 4,00 /unid', image: 'product/iten16.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 17, name: 'VINHO RANDON', price: 'R$ 15,00 /unid', image: 'product/iten17.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 18, name: 'PREDIDENTE ', price: 'R$ 18,00 /unid', image: 'product/iten18.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 19, name: 'CORONA ', price: 'R$ 7,00 /unid', image: 'product/iten19.png', obs:'FARDO',stock: 'A VISTA'},
    { id: 20, name: 'KAISER', price: 'R$ 3,00 /unid', image: 'product/iten20.png', obs:'FARDO',stock: 'A VISTA'},
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h3>${product.obs}</h3>
            <p>${product.price}</p>
            <div class="back">
                 <span class="stock-info">${product.stock}</span>
                 <button onclick="buyProduct(${product.id})">Comprar</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}
         
        function buyProduct(productId) {
            // Recuperar nome e endereço do localStorage
            const nome = localStorage.getItem('nome');
            const endereco = localStorage.getItem('endereco');
            
            // Verificar se nome e endereço estão preenchidos
            if (!nome || !endereco) {
                alert("Faça o login para realizar a compra");
                return;
            }
            
            // Encontrar o produto selecionado pelo ID
            const product = products.find(p => p.id === productId);
            
            // Criar a mensagem de WhatsApp
            const whatsappMessage = `Olá, meu nome é ${nome}. Gostaria de comprar um ${product.name}    poderia me entregar no ${endereco} por favor.`;
            const whatsappUrl = `https://wa.me/+5535998700427?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Abrir o WhatsApp com a mensagem
            window.open(whatsappUrl, '_blank');
        }

        // Filtrar produtos conforme a entrada no campo de busca
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        });

        // Exibir todos os produtos inicialmente
        displayProducts(products);