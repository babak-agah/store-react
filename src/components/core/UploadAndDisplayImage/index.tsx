import { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<File>();

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="ok"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(undefined)}>Remove</button>
        </div>
      )}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          if (event.target.files?.length) {
            setSelectedImage(event.target.files[0]);
          }
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
