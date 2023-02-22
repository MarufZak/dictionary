import axios from 'axios';
import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInputEmpty, setIsInputEmpty] = React.useState(false);
  const [error, setError] = React.useState({
    state: false,
    message: {},
  });

  const fetchData = async (word) => {
    setIsLoading(true);
    setError({ state: false, message: {} });

    try {
      const response = await axios(url + word);
      const data = response.data;

      setData(data[0]);
    } catch (error) {
      setError({ state: true, message: error.error });
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <Form
        isInputEmpty={isInputEmpty}
        setIsInputEmpty={setIsInputEmpty}
        fetchData={fetchData}
      />
      <Results isInputEmpty={isInputEmpty} error={error} isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
