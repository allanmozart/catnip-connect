import axios from "axios";

const config = {
  method: 'get',
  url: 'https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&order=RANDOM&limit=1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'live_KasVNFto4XAaTCjbdEB75L93A6YIwsEylHovNx5AZ86nkJgkWfT55eRsz430O3cC',
  },
};

axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log('error', error);
  });
