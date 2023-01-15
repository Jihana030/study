import { useState, useEffect } from "react";

export default function useProducts({salesOnly}){
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoding(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
            .then(res=>res.json())
            .then(data=>{
                console.log('뜨끈한 데이터');
                setProducts(data);
            })
            .catch((e)=>setError('error'))
            .finally(()=>setLoding(false));
        return ()=>{
            console.log('깨끗')
        }
    }, [salesOnly]);

    return [loading, error, products];
}