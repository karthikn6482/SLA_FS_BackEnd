import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const uploadImage = async () => {

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://localhost:5000/api/upload",
      formData
    );

    setPreview(res.data.imageUrl);
  };

  return (
    <div className="container">

      <h2>Image Upload</h2>

      <input
        type="file"
        onChange={(e)=> setImage(e.target.files[0])}
      />

      <button onClick={uploadImage}>Upload</button>

      {preview && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={preview} width="300"/>
        </div>
      )}

    </div>
  );
}

export default App;