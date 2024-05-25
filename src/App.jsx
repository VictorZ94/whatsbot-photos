import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  useEffect(() => {
    document.title = "Galería de imágenes apartamento las acacias";
  }, []);

  const images = [
    {
      original: "https://i.imgur.com/HNNAslL.jpg",
      thumbnail: "https://i.imgur.com/HNNAslL.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/8HufCbx.jpg",
      thumbnail: "https://i.imgur.com/8HufCbx.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/BwIFjXu.jpg",
      thumbnail: "https://i.imgur.com/BwIFjXu.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/TGivMtl.jpg",
      thumbnail: "https://i.imgur.com/TGivMtl.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/HAv5A1Q.jpg",
      thumbnail: "https://i.imgur.com/HAv5A1Q.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/EmetXbt.jpg",
      thumbnail: "https://i.imgur.com/EmetXbt.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/O4hAcJM.jpg",
      thumbnail: "https://i.imgur.com/O4hAcJM.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/xhVWwiy.jpg",
      thumbnail: "https://i.imgur.com/xhVWwiy.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/hKvmNte.jpg",
      thumbnail: "https://i.imgur.com/hKvmNte.jpg/100/150/",
    },
  ];

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <ImageGallery
        items={images}
        showBullets
        showThumbnails={true}
        thumbnailPosition="right"
      />
    </div>
  );
}

export default App;
