import React, { useState } from 'react'
import { useRef } from 'react'

const AvatarUpload = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef()

  const handleRemove = () => {
    setSelectedImage(null)
    inputRef.current.value = ""
  }

  return (
    <div>
      <h1>Select an avatar:</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        ref={inputRef}
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0])
          props.setImage(event.target.files[0])
          setSelectedImage(event.target.files[0])
        }}
      />
    </div>
  );
};

export default AvatarUpload