import './styles.css'
import '../Filter/styles.css'
import { ProductDTO } from '../../models/product'

type Props = {
    product: ProductDTO;    
}

export default function Listing({ product }: Props) {

    
    return (
        <div className='container'>
            <div className='listing-body mb10' >
                <p className='listing-title'>{product.name}</p>
                <p className='listing-price'>R$ {product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
