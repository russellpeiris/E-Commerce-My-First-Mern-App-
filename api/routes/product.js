const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product")
const router = require("express").Router();


router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//update
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{

    try{
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json(updateProduct);
    }catch(err){
        return res.status(500).json(err)}
})

//delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
        } catch (err) {
        res.status(500).json(err);
        }
    });

//retrieve
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
        } catch (err) {
        return res.status(500).json(err);
        }
    });

//retrieve all

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
    });


module.exports = router;