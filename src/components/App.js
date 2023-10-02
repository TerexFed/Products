import { useState } from "react";
import ProductItem from "./ProductItem";
import '../index.css'

function App() {
  const data = [

    { id: 1, name: 'Велосипед', price: 1000, count: 1 },

    { id: 2, name: 'Самокат', price: 700, count: 1 },

    { id: 3, name: 'Ролики', price: 1300, count: 2 },

    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }

  ]

  const [products, setProducts] = useState(data)
  
  function removeProduct(id) {
    let removedProduct = products.filter((el) => el.id !== id)
    setProducts(removedProduct)
  }
  function addCount(id) {
    let changedCount = products.filter((el) =>
      el.count <= 24 ? ((el.id === id) ? el.count++ : el.count) : el.count = 25
    )
    setProducts(changedCount)

  }
  function minusCount(id) {
    let changedCount = products.filter((el) =>
      el.count === 0 ? removeProduct(id) : ((el.id === id) ? el.count-- : el.count)
    )
    setProducts(changedCount)
  }
  function AddProducts() {
    let [Pname, Pprice] = prompt('Введите название и цену товара по образцу - "НАЗВАНИЕ ЦЕНА"').split(' ')

    if(isNaN(Pname) === false){
      alert('Вы неправльно задали имя')
    }
    else if(isNaN(Pprice) === true){
      alert('Вы неправльно задали цену')
    }
    else if(isNaN(Pname) === true) {
      let NewProduct = {
        id: Date.now(),
        name: Pname,
        price: Pprice,
        count: 1
      }
      setProducts([...products, NewProduct])
    }
  }

  return (
    <div className="App">
      <button onClick={AddProducts}>Добавить новый товар</button>
      <div className="grid">
      {products.map((el) => {
        return <ProductItem key={el.id} id={el.id} name={el.name} price={el.price} count={el.count} removeProduct={removeProduct} addCount={addCount} minusCount={minusCount} />
      })}
      </div>
    </div>
  );
}

export default App;
