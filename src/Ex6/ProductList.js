import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product', oldPrice: '150.000', newPrice: '80.000', sale: false },
  { id: 2, name: 'Product', oldPrice: '150.000', newPrice: '80.000', sale: false },
  { id: 3, name: 'Product', oldPrice: '150.000', newPrice: '80.000', sale: false },
  { id: 4, name: 'Product', oldPrice: '150.000', newPrice: '80.000', sale: true },
];

function ProductList() {
  return (
    <div className="container my-4">
      <p className="text-muted mb-3">List product description</p>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {products.map((p) => (
          <div className="col" key={p.id}>
            <div className="card h-100 position-relative">
              {p.sale && <span className="badge bg-warning text-dark sale-ribbon">Sale</span>}
              <div className="product-placeholder">280 x 280</div>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  <span className="text-decoration-line-through text-muted me-2">{p.oldPrice} vnđ</span>
                  <span className="text-danger fw-bold">{p.newPrice} vnđ</span>
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary btn-sm">🛒</button>
                  <button className="btn btn-outline-secondary btn-sm">Xem chi tiết</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
