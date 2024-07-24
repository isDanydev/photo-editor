import { useState } from "react";
import {
  brightness as option_brightness,
  contrast as option_contrast,
  saturation as option_saturation,
  grayscale as option_grayscale,
  sepia as option_sepia,
  blur as option_blur,
  hueRotate as option_hueRotate,
} from "./data/options/edition";
import UrlLinkImage from "./components/UrlLinkImage";
import Photo from "./assets/img/ash-and-serena.jpg";
const App = () => {
  const [brightness, setBrightness] = useState(option_brightness);
  const [contrast, setContrast] = useState(option_contrast);
  const [saturation, setSaturation] = useState(option_saturation);
  const [grayscale, setGrayscale] = useState(option_grayscale);
  const [sepia, setSepia] = useState(option_sepia);
  const [blur, setBlur] = useState(option_blur);
  const [hueRotate, setHueRotate] = useState(option_hueRotate);
  const [image, setImage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  return (
    <div className="flex flex-col md:h-dvh  gap-3 items-center justify-center  bg-slate-700 ">
      <h1 className="text-4xl font-bold text-white">Photo Editor</h1>
      <div className="flex gap-5 flex-col md:flex-row items-center  text-white bg-slate-900 rounded p-3 m-auto justify-evenly md:w-[720px] w-[400px]">
        <img
          src={image === "" || !image.includes("https") ? Photo : image}
          alt=""
          style={{
            filter: `${brightness.property}(${brightness.value}${brightness.unit}) ${blur.property}(${blur.value}${blur.unit}) ${hueRotate.property}(${hueRotate.value}${hueRotate.unit}) ${sepia.property}(${sepia.value}${sepia.unit}) ${grayscale.property}(${grayscale.value}${grayscale.unit}) ${saturation.property}(${saturation.value}${saturation.unit}) ${contrast.property}(${contrast.value}${contrast.unit})`,
          }}
          className="object-cover w-[350px] h-[600px]"
        />
        <div className="flex flex-col gap-3 items-center">
          <span>
            {brightness.name} : {brightness.value}
          </span>
          <input
            type="range"
            min={brightness.range.min}
            max={brightness.range.max}
            value={brightness.value}
            onChange={(e) =>
              setBrightness({ ...brightness, value: e.target.value })
            }
          />
          <span>
            {blur.name} : {blur.value}
          </span>
          <input
            type="range"
            min={blur.range.min}
            max={blur.range.max}
            value={blur.value}
            onChange={(e) => setBlur({ ...blur, value: e.target.value })}
          />
          <span>
            {contrast.name} : {contrast.value}
          </span>
          <input
            type="range"
            min={contrast.range.min}
            max={contrast.range.max}
            value={contrast.value}
            onChange={(e) =>
              setContrast({ ...contrast, value: e.target.value })
            }
          />
          <span>
            {saturation.name} : {saturation.value}
          </span>
          <input
            type="range"
            min={saturation.range.min}
            max={saturation.range.max}
            value={saturation.value}
            onChange={(e) =>
              setSaturation({ ...saturation, value: e.target.value })
            }
          />
          <span>{grayscale.name} </span>
          <input
            type="range"
            min={grayscale.range.min}
            max={grayscale.range.max}
            value={grayscale.value}
            onChange={(e) =>
              setGrayscale({ ...grayscale, value: e.target.value })
            }
          />
          <span>
            {sepia.name} : {sepia.value}
          </span>
          <input
            type="range"
            min={sepia.range.min}
            max={sepia.range.max}
            value={sepia.value}
            onChange={(e) => setSepia({ ...sepia, value: e.target.value })}
          />
          <span>
            {hueRotate.name} : {hueRotate.value}
          </span>
          <input
            type="range"
            min={hueRotate.range.min}
            max={hueRotate.range.max}
            value={hueRotate.value}
            onChange={(e) =>
              setHueRotate({ ...hueRotate, value: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 bg-black mb-3 md:w-[600px] w-[400px] p-2 rounded">
        <h1 className=" w-[20%] font-bold text-white">Url Link Image</h1>
        <UrlLinkImage image={image} handleChange={handleChange} />
      </div>
    </div>
  );
};
export default App;
