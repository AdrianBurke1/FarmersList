class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i){
        if(i >= 0 && i < this.products.length){
            this.total -= this.products[i].price;
            this.products.splice(i, 1);
        }
    }
}

module.export = Cart; 