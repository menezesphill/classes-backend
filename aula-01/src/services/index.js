import axios from 'axios';
var data = '';

export const getBitcoinPrice = async () => {

    var config = {
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        headers: { },
        maxRedirects: 0,
        data : data
      };

      const response = await axios(config)
      // O objeto response tem um elemento "status" com
      // o código da resposta e um elemento "data" com
      // a resposta em JSON
      return response.data[0].current_price
}
