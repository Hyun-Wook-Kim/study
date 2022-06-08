import { useEffect, useState } from "react";



function App() {

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([]);
  const [selectedCoinInfo, setSelectedCoinInfo] = useState([]);


  const [asset, setAsset] = useState(0);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=010').then((response) => response.json()).then((json) => {
      setCoins(json);
      setLoading(current => !current)
    });
    // (async () => {
    //   const response = await fetch('https://api.coinpaprika.com/v1/tickers');
    //   console.log(response)

    // })()
  }, [])

  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      <h2>How much dollors do you have?</h2>
      <input type="number" value={asset} onChange={(e) => {
        setAsset(e.target.value)
      }} />

      {loading ? (<strong>Loading....</strong>)
        :
        (<div>
          <select onChange={(e) => {
            const [name, price] = e.target.value.replace(/(\s*)/g, '', '').split(':');
            console.log(name, price)
            setSelectedCoinInfo([name, price])
          }}>
            {coins.map(coin => <option key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}
          </select>

          <p>
            You can buy...<br></br>
            {asset ? asset / selectedCoinInfo[1] : 0} {selectedCoinInfo[0]} with {asset} dollors
          </p>
        </div>)
      }


    </div>
  );
}

export default App;
