import React from "react"
import Parse from 'parse/dist/parse.min.js';
import FileUpload from './components/FileUpload';
import Feed from './components/Feed';

Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = "https://parseapi.back4app.com/";

function App() {

  const[data, setData] = React.useState(1);

  const updateData = (prevState) => {
    setData(
      () => prevState + 1
    );
  }

  return (
    <main className="container">
      <h1 className="title">My Gallery</h1>

      <>
        <FileUpload updateData={updateData}/>
        <Feed data={data}/>
      </>
    </main>
  )
}

export default App
