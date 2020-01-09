import { Controller, Get, Post, Req, Put, Delete, Patch, Res, HttpCode, Header, Param, Scope } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { TransientdemoService } from '../transientdemo/transientdemo.service';
import { RequestdemoService } from '../requestdemo/requestdemo.service';

@Controller({ path: 'product', scope: Scope.REQUEST })
export class ProductController {

    constructor(private productService: ProductService,
        private transientService: TransientdemoService,
        private requestService: RequestdemoService) { }


    @Get()
    GetProducts() {
        return this.productService.getProducts();
    }

    @Post()
    AddProduct(@Req() req: Request, @Res() res: Response) {
        this.productService.addProduct(req.body);
        // return json data with default status code
        return res.json({ id: req.body.id });
        // to update the status code
        //return res.status(205).json({ id: req.body.id})
    }

    @Put()
    @HttpCode(204)
    EditProduct() {

    }

    @Delete()
    @Header('header-key', 'value')
    DeleteProduct() {

    }

    @Patch()
    UpdateProductPrice() {

    }

    @Get(':id')
    GetProductById(@Param() param: any) {
        console.log(param.id);
        return this.productService.getProductById(+param.id);
    }

}
