import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async (word) => {
    setIsLoading(true);

    try {
      const response = await fetch(url + word);
      const data = await response.json();

      setData(data[0]);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <Form fetchData={fetchData} />
      <Results isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
