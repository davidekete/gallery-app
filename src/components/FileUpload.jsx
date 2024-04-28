/* eslint-disable react/prop-types */
import Parse from 'parse/dist/parse.min.js';

function FileUpload({updateData}) {

    const handleFileUpload = async (event) => {
        event.preventDefault();
        try {
            let name = 'image.jpg';
            const File = new Parse.File(name, event.target.files[0]);
            const photo = await File.save();

            const Gallery = Parse.Object.extend("Gallery");
            const gallery = new  Gallery();
            gallery.set("photo", photo);
            await gallery.save();

            console.log('File saved:', File);
            updateData();
          } catch (error) {
            console.error('Error saving file:', error);
          }
    }

  return (
    <form>
        <label htmlFor="file-upload" className="custom-file-upload">
            Choose File
        </label>
        <input id="file-upload" type="file" style={{display: "none"}} onChange={handleFileUpload}/>
    </form>
  )
}

export default FileUpload