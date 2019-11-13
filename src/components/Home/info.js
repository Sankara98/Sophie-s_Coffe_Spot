import React from 'react'
import {Link}  from 'gatsby'
import Title from '../Global/Title'
export default function info() {
    return (
        <section className="py-5">
            <div  className="container">
                <Title title="our Story"> </Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center"> 
                        <p className = "lead text-muted mb-5">
                        nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum
                        </p>
                        <Link to="/about">
                            <button className="btn text-capitalize btn-yellow">
                                About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
