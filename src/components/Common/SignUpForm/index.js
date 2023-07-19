import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    // const {name, email, subject, message, emailStatus} = this.state;
    return (
      <section className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="sign_info">
            <div className="row">
              <div className="col-lg-3"></div>
              <div
                style={{ textAlign: "center" }}
                className="col-lg-6 text_box"
              >
                <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                  EMPOWER YOUR BUSINESS WITH 99MINDS
                </h2>
                <label class="f_p text_c f_400 l_height28 mb_40">
                  Trusted by over 1000 businesses. Discover the secret to
                  successful marketing automation with 99minds. We empower
                  retail businesses to harness the potential of gift cards,
                  driving customer retention, loyalty, and reducing returns.
                </label>
                {/* <form
                  onSubmit={this.submitForm}
                  className="contact_form_box"
                  method="post"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group text_box">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        placeholder="Company Name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="business_website"
                        name="business_website"
                        placeholder="Business Website"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Job Title/Position"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        placeholder="Industry"
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
                  <button type="submit" className="btn_three">
                    Submit
                  </button>
                </form> */}
                <iframe
                  width="610px"
                  height="630px"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=205c1cfe70d4992dc2177093cc20262a2be02ea8811f8fa1a04f7843a2afd3cagid71ea9139e1fbbeb931227dbcd956ad07d28dee89c93511d9e2b4e07614183e7a"
                ></iframe>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUpForm;
