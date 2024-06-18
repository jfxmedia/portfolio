import { useState, useEffect } from "react";

const GetData = () => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState('beach');
  const [value, setValue] = useState('beach');  

  const accessKey = '2zMtMFcEI9do3K8V303HD3WX9xwXJxgQfcQhRj3yzHc';

  const handleInputChange = (e) => {
    setValue(e.target.value);  
  };

  const handleSearch = () => {
    setQuery(value); 
  };

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPics([data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [query]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 text-center justify-center mx-auto">
        <input
          className='w-[200px] h-[30px] bg-white rounded-lg shadow-xl'
          value={value}
          type="text"
          onChange={handleInputChange} 
        />
        <button
          className='w-[200px] rounded-lg bg-cyan-300'
          onClick={handleSearch}
        >
          Generate
        </button>
      </div>
      
      {pics.map((pic) => {
        return (
          <div className="pic mx-auto justify-center flex w-full h-auto" key={pic.id}>
            <img src={pic.urls.small} alt={pic.description || 'Unsplash Image'} />
          </div>
        );
      })}
    </div>
  );
}

export default GetData;
