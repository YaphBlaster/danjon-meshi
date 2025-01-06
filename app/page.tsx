import { getImageProps } from "next/image";
import Background from "../assets/background.webp";
import MiddleFrame from "../assets/frame-mdl.webp";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Home() {
  const {
    props: { srcSet: backgroundSrcSet },
  } = getImageProps({
    alt: "",
    src: Background,
  });
  const backgroundImage = getBackgroundImage(backgroundSrcSet);

  const {
    props: { srcSet: middleFrameSrcSet },
  } = getImageProps({
    alt: "",
    src: MiddleFrame,
  });
  const middleFrameBackgroundImage = getBackgroundImage(middleFrameSrcSet);

  return (
    <main
      className="relative"
      style={{ backgroundImage, backgroundSize: "100%", height: "100vh" }}
    >
      <div>Delicious in dungeon</div>
      <div
        className="body-main-frame absolute w-full top-0 left-0  h-lvh pointer-events-none "
        style={{
          backgroundImage: middleFrameBackgroundImage,
          backgroundSize: "100%",
        }}
      />
      <div className="w-[95%] mx-auto p-10 text-center">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Danjon <span className="text-primary-foreground">Meshi</span>
        </h2>
      </div>
    </main>
  );
}
