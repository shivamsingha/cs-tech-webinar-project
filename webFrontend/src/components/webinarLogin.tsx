import * as React from 'react';
import { useForm } from 'react-hook-form';
import {RouteComponentProps} from '@reach/router'
import { useMutation } from 'urql';
import '../styles/index.css';

const ViewerLogin = `
  mutation ($id: ID!, $title: String!) {
    updateTodo (id: $id, title: $title) {
      id
      title
    }
  }
`;

interface WebinarLoginProps extends RouteComponentProps{
  webinarId?: string;
}

const WebinarLogin: React.FC<WebinarLoginProps> = ({webinarId}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data):void => console.log({data, webinarId});
  return (
    <>
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-fa2b0a6cc5fc-bbb37b5e">
              <a href="#" className="nav-logo-link w-inline-block">
                <img
                  src="Team%20Champions_files/5db86dc421496616bf357c25_placeholder.svg"
                  className="nav-logo"
                />
                <h1 className="heading">Team Champions</h1>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mainsection">
        <div className="formholder">
          <div className="form w-form">
            <form
              id="wf-form-Main-Form"
              name="wf-form-Main-Form"
              className="mainformsection"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="name" className="field-label-2">
                Name
              </label>
              <input
                type="text"
                className="name w-input"
                maxLength={256}
                name="name"
                placeholder="Enter Your Name Here"
                id="name"
                ref={register}
              />
              <label htmlFor="email" className="field-label">
                Email Address
              </label>
              <input
                type="email"
                className="email w-input"
                maxLength={256}
                autoFocus
                name="email"
                placeholder="Enter Your Email"
                id="email"
                ref={register({ required: true })}
                required
              />
              <label htmlFor="Phone-Number" className="field-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="phonenumber w-input"
                maxLength={256}
                name="Phone-Number"
                placeholder="Enter Your Phone Number"
                id="Phone-Number"
                ref={register}
              />
              <input
                type="submit"
                defaultValue="Register"
                data-wait="Adding You On List"
                className="submitbutton w-button"
              />
              <img
                src="Team%20Champions_files/5ffb08ae138d7995014b8859_Component%25201.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, 208px"
                srcSet="
    Team%20Champions_files/5ffb08ae138d7995014b8859_Component%25201-p-500.png 500w,
    Team%20Champions_files/5ffb08ae138d7995014b8859_Component%25201.png       590w
  "
                className="image"
                width={208}
              />
            </form>
            <div className="success-message w-form-done">
              <div className="text-block">
                Thank you! Your are added on the list 👍
                <br />
                We will update you via SMS &amp; Email
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div className="text-block-2">
                Oops! Something went wrong while <br />
                submitting the form.
                <br />
                Please enter valid information and try again
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timersection">
        <h1 className="text">Webinar Will Start In</h1>
        <h1 className="text countdown">
          <span className="hours">00</span>
          <span className="timetext">hr</span>
          <span className="minutes">00</span>
          <span className="timetext">min</span>
          <span className="seconds">00</span>
          <span className="timetext">sec</span>
        </h1>
      </div>
    </>
  );
};

export default WebinarLogin;
