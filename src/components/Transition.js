import ShowProducts from './ShowProducts';
import { useEffect, useState, useTransition } from 'react';

let initialProducts = []
const Transition = ()=>{
    const [products,setProducts] = useState([]);
    const [isPending,startTransition] = useTransition();
    useEffect(()=>{
      fetch('http://localhost:5000/getDummyData').then(response=>{
        console.log('response----',response)
        if(response.status==200)
          return response.json()
        console.log('some error occurred..!!')
      }).then(result=>{
        console.log('result----',result)
        setProducts(result.data)
        initialProducts = result.data
      })
    },[])
    const [filterValue,setFilterValue] = useState('');
    const filterHandler = (value)=>{
      // startTransition(()=>{
      //   return setFilterValue(value);
      // })
      
        setFilterValue(value)
        startTransition(()=>{
  
          return setProducts((prevState)=>{
            let oldState = [...prevState];
            if(!value){
              console.log('filterValue-----',value)
              console.log('in initial products')
              return initialProducts;
            }
            else{
              console.log('value-----',value)
              oldState = initialProducts.filter(product=>{
                return product.includes(value);
              })
              return oldState;
            }
          })
        })
      }
    
    return (
      <div style={{textAlign: 'center'}}>
        <input type='text' style={{marginTop: '3em'}} value={filterValue}  onChange={(e)=>{filterHandler(e.target.value)}} />
        { isPending && <h3>Updating products....!!</h3>}
        <ShowProducts products={products} />
      </div>
    );
}

export default Transition