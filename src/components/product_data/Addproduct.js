import React ,{useState}from 'react';

const Addproduct = () => {
    const [product_name, setProductname]=useState('');
    const [Description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [thumb, setThumb] = useState(null);
    return (
        <div className='flex mt-5'>
            <div className='text-center'>
                <h3> Add Product</h3> 
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Product name"/>
            </div>
            <div className=" mb-3">
                <label for="formGroupExampleInput2" class="form-label">Product Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="About the product"/>
            </div>
            <div className=" mb-3">
                <label for="formGroupExampleInput3" class="form-label">Product Price</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Price"/>
            </div>
            <div className=" mb-3">
            <label for="formGroupExampleInput3" class="form-label">Product category</label>
            <select className="form-select" aria-label="select example">
                <option value="1">Phone</option>
                <option value="2">Watch</option>
                <option value="3">Earphone</option>
                <option value="4">Laptop</option>
            </select>
            </div>
            <div className=" mb-3">
                <label for="formGroupExampleInput3" class="form-label">Product Image</label>
                <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02"/>
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
            <div class="col-12 text-center">
                <button type="submit" className="btn btn-success">Add Product</button>
            </div>
            </div>

        </div>
    )
}

export default Addproduct;

