import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Error";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /*SPA */
    
    /*SSR */

        public async getAllProducts(): Promise<Product[]> {
        const result = await this.productModel.find().exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

      
        return result;
            
        
    }

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


    public async updateChosenProduct(
        id: string,
        input: ProductUpdateInput): Promise<Product> {
        // string => ObjectId
        id = shapeIntoMongooseObjectId(id);                       // search query, qanday ozgartiramiz, qanday malumotni qaytarsin
        const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true }).exec();
        if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

      
        return result;
            
        
    }

}

  

export default ProductService;