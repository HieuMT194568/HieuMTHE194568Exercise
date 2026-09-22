import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Nav';
import UncontrolledExample from './Carousel';
import ProductList from './ProductList';
import './layout.css'
function Layout() {
  return (
    <><NavScrollExample></NavScrollExample>
    <UncontrolledExample></UncontrolledExample>
    <h1 >NEW PRODUCT</h1>
    <ProductList></ProductList>

    </>

  )
}

export default Layout