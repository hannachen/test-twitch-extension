import { useEffect } from "react";
import Script from "next/script";

const Config = () => {
  useEffect(() => {
    console.log("???");
    window.Twitch.ext.onContext((context) => {
      console.log(context);
    });
  }, []);

  return (
    <div>
      <Script
        src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"
        strategy="beforeInteractive"
      ></Script>

      <div className="extension">
        <h3>Config Example</h3>
        <form id="form">
          <fieldset>
            <legend>Dilemma Options</legend>
            <div>
              <input
                type="checkbox"
                id="one"
                name="option"
                value="lose the ability to read"
                checked
                readOnly
              />
              <label htmlFor="one">lose the ability to read </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="two"
                name="option"
                value="eat nothing but ketchup for the rest of your life"
                checked
                readOnly
              />
              <label htmlFor="two">
                eat nothing but ketchup for the rest of your life{" "}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="three"
                name="option"
                value="be dumb but always listened to"
                checked
                readOnly
              />
              <label htmlFor="three"> be dumb but always listened to </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="four"
                name="option"
                value="be alone for your entire life"
                checked
                readOnly
              />
              <label htmlFor="four"> be alone for your entire life </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="five"
                name="option"
                value="turn every person you look at into stone"
                checked
                readOnly
              />
              <label htmlFor="five">
                turn every person you look at into stone{" "}
              </label>
            </div>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Config;
