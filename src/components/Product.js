import React, { useState } from 'react';
import Product_card from './product_data/Product_data';

function Product() {
    const [data, setData] = useState(Product_card);
    const filterResult = (catItem) => {
        const result = Product_card.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);

    }
    return (
        <>

            <div className="container-fluid mx-2">
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3 bg-dark mt-4'>
                        <h3 className='text-white'>Filter by categories</h3>
                        <div className='d-grid gap-1'>

                        <button className="btn btn-primary  mb-2" onClick={() => filterResult('Phone')}>Phone</button>
                        <button className="btn btn-primary  mb-2" onClick={() => filterResult('Watch')}>watches</button>
                        <button className="btn btn-primary  mb-2" onClick={() => filterResult('Earphone')}>Earphone</button>
                        <button className="btn btn-primary  mb-2" onClick={() => filterResult('Laptop')}>laptop</button>
                        <button className="btn btn-primary  mb-2" onClick={() => setData(Product_card)}>All</button>
                        </div>   
                        <div>
                        <label for="customRange3" className="form-label mt-4 text-white">Price range</label>
                        <input type="range" className="form-range" min="1000" max="200,000" id="customRange2"></input>
                        </div> 
                        <div>
                        <h6 className='text-white mt-4 mb-2'>Brands</h6>
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label text-white ml-2 " htmlFor="customCheck1">Iphone</label>
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label text-white ml-2 " htmlFor="customCheck1">Samsung</label>
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label text-white ml-2 " htmlFor="customCheck1">Mi</label>

                        </div>


                    </div>


                    
                        <div className='col-md-9'>
                        <div className='row'>
                            {data.map((value) => {
                                const { id, product_name, Description, Price, thumb } = value;
                                return (
                                    <>
                                        <div className='col-md-4 mt-4 mb-4 h-100' key={id}>
                                            <div className='card'>
                                                <img src={thumb} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{product_name}</h5>
                                                    <p className="card-text">{Description}</p>
                                                    <h6> Price:{Price}</h6>
                                                    <button className="btn btn-info">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product;
