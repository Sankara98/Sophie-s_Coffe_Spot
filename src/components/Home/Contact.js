import React from 'react'
import Title from '../Global/Title'


export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact Us"/>
            <div className="row">
                <div className="col-10 col-sm-6 mx-auto">
                    <form 
                        action="https://formspree.io/your@email.com" 
                        method="POST"
                    > 
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeHolder="John Smith"/>
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeHolder="Email@email.com"/>
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className="form-control" rows="5" placeholder="Your description goes here..."></textarea>
                        </div>
                        {/* Submit */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5"> Submit </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
