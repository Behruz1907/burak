import Errors, { HttpCode, Message } from "../libs/Error";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /*SPA */
    
    /*SSR */

    public async createNewProduct(input: ProductInput): Promise<Product> {
         try {
             return await this.productModel.create(input);
    } 
         catch (err) {
             console.log("Error, model:createNewProduct:", err);
      // Provide error details and a status code to Errors constructor
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
    }

}

  

export default ProductService;