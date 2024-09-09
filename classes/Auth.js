const Customer = require('./Customer')

class Auth {
    constructor(){
        this.customer = [];
    }

    register(name, email, shippingAddress){
        const newCustomer = new customer(name, email, shippingAddress);
        this.customer.push(newCustomer)
        return newCustomer;
    }

    login(email){
        return this.customer.find(customer => customer.email === email)
    }
}

module.export = Auth