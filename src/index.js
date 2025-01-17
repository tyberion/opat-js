import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Viewer from "./viewer";
import TopBar from "./topbar";
import Sidebar from "./sidebar";
import loadSampleData from "./sample_data/load_sample_data";
import SettingsModal from "./settings_modal";
import CONFIG from "./config";
import { Gear } from "react-bootstrap-icons";

function computeViewerPosition(img) {
  const { naturalHeight, naturalWidth, height, width } = img;
  const rescale = Math.min(height / naturalHeight, width / naturalWidth);
  const [newHeight, newWidth] = [
    naturalHeight * rescale,
    naturalWidth * rescale,
  ];
  return {
    height: newHeight,
    width: newWidth,
    left: (width - newWidth) / 2,
    top: (height - newHeight) / 2,
  };
}

function App() {
  console.log("index re-render");

  const [images, setImages] = React.useState([]);
  const [intrinsics, setIntrinsics] = React.useState();
  const [model, setModel] = React.useState();
  const [viewerPosition, setViewerPosition] = React.useState();
  const [poses, setPoses] = React.useState({});
  const [currentPose, setCurrentPose] = React.useState();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isSettingsShown, setIsSettingsShown] = React.useState(false);
  const [config, setConfig] = React.useState(CONFIG);

  React.useEffect(() => loadSampleData(setImages, setIntrinsics, setModel), []);

  const imgRef = React.useRef();
  const imgUrlRef = React.useRef();
  const imgUrl = React.useMemo(() => {
    if (imgUrlRef.current) URL.revokeObjectURL(imgUrlRef.current);
    imgUrlRef.current =
      images.length > 0
        ? URL.createObjectURL(images[currentImageIndex])
        : undefined;
    return imgUrlRef.current;
  }, [images, currentImageIndex]);

  const handleKeyDown = React.useCallback(
    (event) => {
      if (
        images.length === 0 ||
        event.repeat ||
        !(event.code === "PageDown" || event.code === "PageUp")
      )
        return;

      event.preventDefault();
      const newImageIndex =
        event.code === "PageDown"
          ? (currentImageIndex + 1) % images.length
          : (currentImageIndex - 1 + images.length) % images.length; // Javascript is a cruel joke
      setCurrentImageIndex(newImageIndex);
    },
    [images, currentImageIndex]
  );
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleResize = React.useCallback(() => {
    if (imgRef.current)
      setViewerPosition(computeViewerPosition(imgRef.current));
  }, []);
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const setPose = React.useCallback(
    (pose, save) => {
      // cause the topbar to re-render
      setCurrentPose(pose);

      if (images.length === 0) return;

      if (save) {
        if (poses[images[currentImageIndex].name]) {
          // copy into the same reference so that the viewer doesn't re-render
          Object.assign(poses[images[currentImageIndex].name], pose);
        } else {
          poses[images[currentImageIndex].name] = pose;
        }
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }
    },
    [poses, images, currentImageIndex]
  );

  const fov =
    intrinsics && images.length > 0
      ? intrinsics[images[currentImageIndex].name].fov_y
      : 40;

  return (
    <div className="main-wrapper">
      <TopBar
        {...{
          fov: viewerPosition
            ? {
                y: fov,
                x: (fov * viewerPosition.width) / viewerPosition.height,
              }
            : undefined,
          setCurrentImageIndex,
          images,
          setImages,
          model,
          setModel,
          setIntrinsics,
          currentPose,
          setPoses,
          poses,
          currentImageIndex,
        }}
      />
      <div className="body-wrapper">
        <div className="Viewer-wrapper">
          {imgUrl ? (
            <img
              className="background-image"
              alt=""
              key="img"
              ref={imgRef}
              src={imgUrl}
              onLoad={() => {
                setViewerPosition(computeViewerPosition(imgRef.current));
              }}
            />
          ) : (
            <div className="loading">Loading sample data...</div>
          )}
          <Viewer
            key="viewer"
            {...{
              fov,
              model,
              position: viewerPosition,
              initialPose:
                images.length > 0
                  ? poses[images[currentImageIndex].name]
                  : undefined,
              setPose,
              config,
            }}
          />
          <Gear
            size={24}
            className="settings-gear"
            onClick={() => setIsSettingsShown(true)}
          />
        </div>
        <Sidebar
          {...{
            images,
            currentImageIndex,
            setCurrentImageIndex,
          }}
        />
      </div>
      <SettingsModal
        {...{ isSettingsShown, setIsSettingsShown, config, setConfig }}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
