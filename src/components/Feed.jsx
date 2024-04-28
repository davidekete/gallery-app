import React from 'react'
import Parse from 'parse/dist/parse.min.js';

function Feed(props) {

    const[gallery, setGallery] = React.useState([]);

    React.useEffect( () => {
        const fetchFiles = async () => {
            let query = new Parse.Query("Gallery");
            const results = await query.find();
            setGallery(results);
            console.log(results);
        }
        fetchFiles();
    // eslint-disable-next-line react/prop-types
    }, [props.data]);

    
  return (
    <div  className='photos'>
        {gallery.map( (item) => (
            <img src={item.get("photo").url()} key={item.id} />
        ))}
    </div>
  )
}

export default Feed