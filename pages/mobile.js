import Script from "next/script";

const Mobile = () => {
  return (
    <div>
      <Script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></Script>
      <div>Mobile Example</div>
    </div>
  );
};

export default Mobile;
