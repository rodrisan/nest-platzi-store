import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return `The filter`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=>${limit}, offset=>${offset}, brand=>${brand}`;
  }
}
