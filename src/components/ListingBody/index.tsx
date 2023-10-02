import './styles.css'
import Filter, { FilterData } from "../../components/Filter"
import Listing from "../../components/Listing"
import { ProductDTO } from "../../models/product";
import { useState, useContext, useEffect } from 'react'
import * as productService from '../../services/product-service'
import { ContextCartCount } from '../../utils/context-cart';

export default function ListingBody() {

   
    const { contextCartCount, setContextCartCount } = useContext(ContextCartCount)

    const [productsList, setProductsList] = useState<ProductDTO[]>(productService.products);

    // o componente pai passa a funcao para o componente filho com nome handle
    function handleSearch(searchValue: FilterData) {
        const filterProduct = productService.findByPrice(Number(searchValue.priceLo), Number(searchValue.priceHi));
        setProductsList(filterProduct);
        setContextCartCount(filterProduct.length);
    }

    useEffect(() => {
        setContextCartCount(contextCartCount)        
    }, [productsList])

    return (
        <div>
            <Filter onSearch={handleSearch} />
            <div className='listing-master container'>
                {
                    productsList.map(product =>
                        <Listing
                            key={product.id}
                            product={product}
                        />
                    )
                }
            </div>

        </div>
    )
}
