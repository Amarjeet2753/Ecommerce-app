import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productListController, productPhotoController, updateProductController } from '../controllers/productController.js';

import formidable from 'express-formidable'


const router = express.Router();


//routes  
// create product ---------->
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );


  // get all product --------->

  router.get('/get-product',getProductController);
  
  //  get single product ---------->
  router.get('/get-product/:slug',getSingleProductController);
  
  // get product -photo ---->
  router.get('/product-photo/:pid',productPhotoController);

  //delete rproduct
router.delete("/delete-product/:pid",requireSignIn,isAdmin, deleteProductController);


  
//   update product ----------->
  router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
  

  //filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);



export default router;