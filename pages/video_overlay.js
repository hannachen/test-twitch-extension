import Script from "next/script";
import { useRouter } from "next/router";

const VideoOverlay = () => {
  const { query } = useRouter();

  return (
    <div>
      <Script
        src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"
        strategy="beforeInteractive"
      ></Script>

      <div className="extension" style={{ backgroundColor: "#FFFFFF" }}>
        <h2>This is a video overlay!!!!!</h2>
        <p>!!!!!!!!!!!!!!!!!</p>
        <p>{JSON.stringify(query)}</p>
      </div>
    </div>
  );
};

export default VideoOverlay;
