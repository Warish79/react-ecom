import React from 'react';

const Addcat = () => {
   
    return (
        <div className='flex mt-5'>
            <div className='text-center'>
                <h3> Add Categories</h3> 
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Category  Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="name"/>
            </div>
            <div className=" mb-3">
                <label for="formGroupExampleInput2" class="form-label"> Category Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="About the Categories"/>
            </div>
            <div className=" mb-3">
                <label for="formGroupExampleInput3" class="form-label">Categories type</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter  Type"/>
            </div>
           
           
            <div class="col-12 text-center">
                <button type="submit" className="btn btn-success">Add categories</button>
            </div>
            </div>

       
    )
}

export default Addcat;

