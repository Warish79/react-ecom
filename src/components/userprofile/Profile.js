import React from 'react'
const Profile = () => {
    return (
        <>
            <div className='container mt-5 mb-4' >
                <div className='card'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src='https://yt3.ggpht.com/ytc/AKedOLRnxoku_QkJNjqwtRg4rs4VlF38Af1iQz6V6PHa=s900-c-k-c0x00ffffff-no-rj' className="card-img-top mt-5" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <h5 className="card-title mt-2">Warish Khan</h5>
                            <p className="card-text">Web/Frontend Developer</p>
                            <h4 className='text-info'> About Us</h4>
                            <p>Dedicated web developer with 1 years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail. MySQL, Python ann React.

                                Experienced developer with expertise in educational institutions and Blackboard online classroom management. Experienced with ASP, XML, HTML, CSS5 and PHP. Goal-oriented and driven.

                                Motivated designer and developer with experience creating custom websites through PHP,JavaScript and tailwindCSS. Strong collaboration skills and proven history of application development. DHTML and JavaScript. </p>
                                <h5 className='text-success'>Email: Khanwarish79@gmail.com</h5>
                                <h5 className='text-danger'>Contact No. +91 9658325621</h5>
                            <button className="btn btn-dark mb-3">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
