import { FC, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const CoinList: FC<Props> = ({ targetCurrency }) => {
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState<string>("market_cap_desc");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [priceChangePercent, setPriceChangePercent] = useState<string>("24h");

  let alreadyCalled = false;
  let totalPages = 0;

  useEffect(() => {
    if (data.length === 0 && !alreadyCalled) {
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      alreadyCalled = true;
      const res = await axios.get("http://localhost:3001/prices");
      totalPages = Math.ceil(res.data.totalCoins / 10);
      setData(res.data.data);
      console.log(res.data, "FRespisne");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: Record<string, any>) => (
            <tr key={coin.symbol}>
              <td className="flex items-center gap-1">
                <Image
                  src={coin.image}
                  width={24}
                  height={24}
                  className="rounded-full"
                  alt={coin.symbol}
                />
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
              </td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;

type Props = {
  targetCurrency: "USD" | "INR" | "EUR";
};
