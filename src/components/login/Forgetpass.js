import React from 'react'

const Forgetpass = () => {
    return (
    
            <div className="container square-box d-flex mx-auto align-items-center justify-content-center">
            <form>
                <h3>Forget Password</h3>

                <div className="form-group mt-2">
                    <label className='mt-2'>Email address</label>
                    <div className='mt-2'>
                    <input className='mt-2' type="email" className="form-control" placeholder="Enter email" />
                    </div>
                </div>
                <div className='mt-4'>
                <button className="mt-5" type="submit" className="btn btn-primary btn-block">Forget Password</button>
                </div>
               </form> 
        </div>
    )
}

export default Forgetpass;
