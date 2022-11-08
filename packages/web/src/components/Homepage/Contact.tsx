import React from "react";
import { Address } from "models/address";
import AddressComponent from "components/Generics/Address";

interface ContactProps {
  id: number;
  __component: string;
  label: string;
  title: string;
  paragraph: string;
  quote: string;
  address: Address[];
}

const Contact = (props: ContactProps) => {
  return (
    <section className="section-box">
      <div className="container mb-50 mt-70">
        <div className="bdrd-58 box-gray-100 icon-wave">
          <div className="row">
            <div className="col-lg-12 mb-60">
              <span className="text-body-capitalized text-uppercase">
                {props.label}
              </span>
              <h2 className="text-heading-3 color-gray-900 mt-10">
                {props.title}
              </h2>
              <p className="text-body-text color-gray-600 mt-20">
                {props.paragraph}
                <br className="d-lg-block d-none" />
                {props.quote}
              </p>
            </div>
            {props.address.map((item) => {
              return <AddressComponent key={item.id} {...item} />;
            })}

            <div className="col-lg-8">
              <div className="row">
                <form
                  className="row"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="d04b4e14-0113-4c70-99ff-389ffc2c1d6e"
                  ></input>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder="Company (optioanl)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        required
                        className="form-control"
                        placeholder="Tell us about yourself"
                      />
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  ></input>
                  <div className="col-lg-12 mt-15">
                    <button
                      className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                      type="submit"
                    >
                      Send Message
                    </button>
                    <br className="d-lg-none d-block" />
                    <span className="text-body-text-md color-gray-500 mb-20">
                      By clicking contact us button, you agree our terms and
                      policy,
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
