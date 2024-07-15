// Define the ProductModel interface
export interface ProductModel {
  id:number
  name: string;
  lastPrice: number;
  currPrice: number;
  quantity: number;
  description: string;
  image: string;
  weight: number;
data:number
}

// export class Product implements ProductModel {
//   id:number;
//   name: string;
//   lastPrice: number;
//   currPrice: number;
//   quantity: number;
//   description: string;
//   image: string;
//   weight: number;
// data:number

//   constructor(
//     id:number,
//     name: string,
//     lastPrice: number,
//     currPrice: number,
//     quantity: number,
//     description: string,
//     image: string,
//     weight: number,
    
//   ) {
//     this.id = id;
//     this.name = name;
//     this.lastPrice = lastPrice;
//     this.currPrice = currPrice;
//     this.quantity = quantity;
//     this.description = description;
//     this.image = image;
//     this.weight = weight;
//   }
  
// }
