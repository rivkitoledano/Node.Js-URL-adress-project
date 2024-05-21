import express from "express";
import LinksController from "../Controllers/linkController.js";
const linkRouter = express.Router();
console.log("hi")
linkRouter.get('/', LinksController.getList);
linkRouter.post('/', LinksController.add);
linkRouter.get('/:id', LinksController.getById);
linkRouter.delete('/:id', LinksController.delete);
linkRouter.get('/redirect/:id', LinksController.redirect);
linkRouter.get('/:id/click-stats', LinksController.getClickStats); 

export default linkRouter;
