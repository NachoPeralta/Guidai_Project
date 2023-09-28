import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="row">
      <div className="slideInFromRight col-lg-12">
        <div className="card mb-4" style={{ height: "100%" }}>
          <div className="row g-0">
            <div className="imagenProducto col-md-4">
              <img
                src={producto.img}
                className="card-img-top"
                alt={producto.descripcionCorta}
              />
            </div>
            <div className="col-md-8">
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ height: "100%" }}
              >
                <div>
                  <h5 className="card-title">
                    {producto.categoria} - Aroma: {producto.descripcionCorta}
                  </h5>
                  <h5 className="card-title">
                    Precio UYU $: {producto.precio}
                  </h5>
                  <p className="card-text">{producto.descripcionLarga}</p>
                  <br />
                  <Link className="btn btn-primary" to={`/item/${producto.codigo}`}>
                    Ir al detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
