import * as React from 'react';
import {RouteComponentProps} from '@reach/router'

interface WebinarLoginProps extends RouteComponentProps{
  webinarId?: string;
}

const WebinarWatch: React.FC<WebinarLoginProps> = ({webinarId}) => {
  return (
    <div className="maincontentholdersection">
      <div className="contentholder w-row">
        <div
          data-w-id="7ee27f5b-cc0f-747c-dea4-e184a48df028"
          style={{
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
            transformStyle: 'preserve-3d',
          }}
          className="videoholder w-col w-col-9"
        >
          <div
            style={{ paddingTop: '56.17021276595745%' }}
            className="video-2-copy video w-video w-embed"
          >
            <iframe
              className="embedly-embed"
              src="watch_files/media.html"
              scrolling="no"
              title="YouTube embed"
              allow="autoplay; fullscreen"
              frameBorder={0}
            />
          </div>
        </div>
        <div
          data-w-id="7ee27f5b-cc0f-747c-dea4-e184a48df029"
          className="commentholder w-col w-col-3"
        >
          <div className="durationholder">
            <div className="columns w-row">
              <div className="column w-col w-col-6">
                <img
                  src="watch_files/5ffb401b138d797e6a4c33fb_clock%25201.svg"
                  loading="lazy"
                  alt="Clock SVG"
                  width={30}
                />
                <h1 className="durationofmetting">00:00:00</h1>
              </div>
              <div className="noofusers users w-col w-col-6">
                <img
                  src="watch_files/5ffb401ea3cd64fdd45b6111_businessmen.svg"
                  loading="lazy"
                  width={30}
                />
                <h1 className="durationofmetting">
                  <span className="views">000</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="showcommentshere">
            <div className="commentsholder">
              <h1 className="commentusername">Rajat Gupta</h1>
              <p className="userscomment">Hello Sir, Big fan</p>
            </div>
            <div className="commentsholder">
              <h1 className="commentusername">Aman</h1>
              <p className="userscomment">Yes</p>
            </div>
          </div>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="addcommentform"
            >
              <input
                type="text"
                className="comment w-input"
                maxLength={256}
                name="User-s-Comment"
                data-name="User's Comment"
                placeholder="Type Your Comment..."
                id="User-s-Comment"
                required
              />
              <input
                type="submit"
                defaultValue="Send"
                data-wait="Adding Your Message...."
                className="addcommentbutton w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarWatch;
