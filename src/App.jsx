import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://i.imgur.com/HNNAslL.jpg",
      thumbnail: "https://i.imgur.com/HNNAslL.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/AYiLkB2.jpg",
      thumbnail: "https://i.imgur.com/AYiLkB2.jpg",
    },
    {
      original: "https://i.imgur.com/jn7C8ud.jpg",
      thumbnail: "https://i.imgur.com/jn7C8ud.jpg",
    },
    {
      original: "https://i.imgur.com/O4hAcJM.jpg",
      thumbnail: "https://i.imgur.com/O4hAcJM.jpg",
    },
    {
      original: "https://i.imgur.com/XkM9ICh.jpg",
      thumbnail: "https://i.imgur.com/XkM9ICh.jpg",
    },
    {
      original: "https://i.imgur.com/hKvmNte.jpg",
      thumbnail: "https://i.imgur.com/hKvmNte.jpg",
    },
    {
      original: "https://i.imgur.com/HAv5A1Q.jpg",
      thumbnail: "https://i.imgur.com/HAv5A1Q.jpg",
    },
    {
      original: "https://i.imgur.com/xhVWwiy.jpg",
      thumbnail: "https://i.imgur.com/xhVWwiy.jpg",
    },
    {
      original: "https://i.imgur.com/EmetXbt.jpg",
      thumbnail: "https://i.imgur.com/EmetXbt.jpg",
    },
    {
      original: "https://i.imgur.com/8HufCbx.jpg",
      thumbnail: "https://i.imgur.com/8HufCbx.jpg",
    },
  ];

  return (
    <div style={{ width: "70vw", margin: "auto" }}>
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
