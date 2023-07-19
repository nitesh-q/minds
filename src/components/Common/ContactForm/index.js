import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // const {name, email, subject, message, emailStatus} = this.state;
    return (
      <section className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Office Address
                </h6>
                <p className="f_400 f_size_15">
                  120E 62nd st, New York, NY 10065, United States
                </p>
              </div>
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Contact Info
                </h6>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Phone:</span>{" "}
                  <a href="tel:19177274266">+1 917-727-4266</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Email:</span>{" "}
                  <a href="mailto:support@99minds.io">support@99minds.io</a>
                </p>
              </div>
            </div>
            <div className="contact_form col-lg-9">
              <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                Leave a Message
              </h2>
              <form
                onSubmit={this.submitForm}
                className="contact_form_box"
                method="post"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Enter Your Message . . ."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn_three">
                  Send Message
                </button>
              </form>
              {/* {emailStatus ? emailStatus : null} */}
              <div id="success">Your message succesfully sent!</div>
              <div id="error">
                Opps! There is something wrong. Please try again
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
