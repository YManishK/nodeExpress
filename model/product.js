const products = [];
const db = require('../util/database');

module.exports  = class Product {
    constructor(name,price,proDescription){
        this.name = name;
        this.price = price;
        this.proDescription = proDescription;
    }

    saveAll(){
       return db.execute('INSERT INTO products (title,price,description) VALUES (?, ?, ?)',
            [this.name,this.price,this.proDescription]
        )
        // products.push(this);
    }

    static fetchAll(){
      return db.execute('SELECT * FROM products');
        //     .then((res)=>{
        //         console.log(res[0])
                 
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        // return products;
    }
}