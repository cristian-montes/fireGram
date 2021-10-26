import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';

function App() {
  const [selectImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
    { selectImg && <Modal selectImg={selectImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
