/* eslint-disable @next/next/no-img-element */
import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Whatsapp"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
