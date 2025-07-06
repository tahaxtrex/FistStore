import express, { Router } from "express";
const router = express.Router();
import Product from "../models/product.js";
import mongoose from "mongoose";

let isValidId = "mongoose.Types.ObjectId.isValid()"

router.post("/", async (req, res) => {
  const product = req.body;

  // 1. Validation
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields'
    });
  }

  // 2. Save product to MongoDB
  try {
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();

    // 3. Send success response
    return res.status(201).json({
      success: true,
      data: savedProduct
    });

  } catch (error) {
    // 4. Send error response
    return res.status(500).json({
      success: false,
      message: 'Server error while saving product',
      error: error.message
    });
  }
});


router.get("/", async (req, res)=>{
  try {
    const products = await Product.find({})
    if(products.length == 0){
      return res.status(400).json({
      success: false,
      message: "no product found",
    });
    }
    return res.status(200).json({
      success: true,
      data : products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error"
    });
  }
})

router.delete("/:id", async(req, res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message:"product not found"})
  }
  try {
    const deletion = await Product.findByIdAndDelete(id);
    if (!deletion){
      return res.status(404).json({success: false, message:"product not found"})
    }
    return res.status(200).json({success: true, message: 'product deleted'})
  } catch (error) {
    return res.status(500).json({success: false, message: 'server error'})
  }
})

router.put("/:id", async(req, res)=>{
  const product = req.body;
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message:"product not found"})
  }
  try {
    const update = await Product.findByIdAndUpdate(id, product, {new: true})
    if(!update){
      return res.status(404).json({success: false, message: 'product not found'})
    }
    return res.status(200).json({success: true, data: update})
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({success: false, message: 'server error'});
  }
})





export default router;