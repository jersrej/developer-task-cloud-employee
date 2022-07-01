import React, { FC } from 'react';

// components
import FormInput from 'components/FormInput';
import FormCheckbox from 'components/FormCheckbox';
import { SvgFbIcon, SvgGoogleIcon } from 'components/SvgIcons';

const Main: FC = () => {
  return (
    <main className="main">
      <div className="grid-container">
        <section className="right-container bg-blue-500">
          <div className="hero-container">
            <div className="wrap-container">
              <div className="font-white font-inter font-weight-700 font-md">
                What can I do with an account?
              </div>

              <div className="hero-box-container">
                <div className="box box-behind" />
                <div className="box box-front" />
              </div>

              <div className="font-white font-inter font-weight-700 font-md text-center mt-24">
                Feature Number 1
              </div>

              <div className="font-white font-inter font-weight-400 font-md text-center mt-16 line-height-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis euismod
                dui, sit amet
              </div>

              <div className="line-items">
                <div className="line bg-white" />
                <div className="line bg-blue-300" />
                <div className="line bg-blue-300" />
              </div>
            </div>

            <div className="terms-container text-center space-x-2">
              <a href="/" className="font-white font-weight-400 font-inter font-md">
                Terms & Conditions
              </a>
              <a href="/" className="font-white font-weight-400 font-inter font-md">
                Privacy Policy
              </a>

              <div className="my-16 font-inter font-white font-weight-400">© Brand 2021</div>
            </div>
          </div>
        </section>
        <section className="left-container">
          <div className="header-container font-inter flex items-center space-x-1">
            <div>Already have an account?</div>
            <a href="/" className="font-blue">
              Login Now
            </a>
          </div>

          <div className="wrap-container">
            <div className="logo-container bg-gray my-32">
              <div className="font-gray-800 font-inter font-weight-700 text-center font-lg">
                Logo
              </div>
            </div>

            <div className="form-container">
              <div className="col-span-12">
                <div className="font-gray-800 font-weight-700 font-lg font-inter">
                  Create an account
                </div>
              </div>

              <div className="col-span-12">
                <div className="font-gray-700 font-weight-400 font-md font-inter">
                  Enter your details below to create your account
                </div>
              </div>

              <div className="col-span-12">
                <FormInput label="Email" name="email" placeholder="Enter email address" />
              </div>

              <div className="col-span-6">
                <FormInput label="First name" name="first" placeholder="First name" />
              </div>

              <div className="col-span-6">
                <FormInput label="Last name" name="last" placeholder="Last name" />
              </div>

              <div className="col-span-12">
                <FormInput
                  label="Password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  middleText="8+ characters, containing upper and lowercase characters and a number"
                />
              </div>

              <div className="col-span-12">
                <FormInput
                  label="Confirm password"
                  name="confirm"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div className="col-span-12">
                <FormCheckbox
                  name="receive"
                  label="I’d like to receive offers, promotions, and other information from the brand"
                />
              </div>

              <div className="col-span-12">
                <FormCheckbox name="accept" label="Accept our terms and conditions" />
              </div>

              <div className="col-span-12">
                <button
                  type="button"
                  className="bg-blue-500 w-full primary-button font-white font-inter font-weight-600 font-md mt-16"
                >
                  Create an account
                </button>
              </div>
            </div>

            <hr className="divider my-24" />

            <div className="buttons-container">
              <div className="col-span-12">
                <div className="font-inter font-md font-weight-700 text-center font-gray-700">
                  Or sign in with...
                </div>
              </div>

              <div className="col-span-6">
                <button
                  type="button"
                  className="bg-gray-100 w-full social-button font-gray-800 font-inter font-weight-600 font-md flex items-center justify-center space-x-1"
                >
                  <SvgFbIcon />
                  <span>Facebook</span>
                </button>
              </div>
              <div className="col-span-6">
                <button
                  type="button"
                  className="bg-gray-100 w-full social-button font-gray-800 font-inter font-weight-600 font-md flex items-center justify-center space-x-1"
                >
                  <SvgGoogleIcon />
                  <span>Google</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
