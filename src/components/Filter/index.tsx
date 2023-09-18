/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css'
import { useState } from 'react';


export type FilterData = {
    priceLo?: number;
    priceHi?: number;
}

// nome da prop q vai passar pro pai deve ser onAlgumaCoisa
type Props = {
    onSearch?: Function;
}

export default function Filter({ onSearch }: Props) {

    const [formData, setFormData] = useState<FilterData>({
        priceLo: 0,
        priceHi: 0
    })
    console.log('priceHi', formData.priceHi)

    function handleChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        if (onSearch) {
            onSearch(formData);
        }
    }

    return (
        <div className='mt20 mb20'>
            <form onSubmit={handleSubmit} className='card-filter container '>
                <input
                    name="priceLo"
                    value={formData.priceLo || ''}
                    type="text"
                    placeholder="Preço mínimo"
                    onChange={handleChange}
                    className='mb20'
                />
                <input
                    value={formData.priceHi || ''}
                    placeholder="Preço máximo"
                    type="text"
                    name="priceHi"
                    max={formData.priceHi}
                    onChange={handleChange}
                    className='mb20'
                />
                <button type="submit"
                    className='btn'
                >Enviar</button>
            </form>
        </div>
    )
}


