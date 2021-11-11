import Script from "next/script";
import { useRouter } from "next/router";

const Panel = () => {
  const { query } = useRouter();

  return (
    <div className="extension">
      <Script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></Script>
      <div>Panel Example</div>
      <p>This is the panel content</p>
      <p>{JSON.stringify(query)}</p>
    </div>
  );
};

export default Panel;
