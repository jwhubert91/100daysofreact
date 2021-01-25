import { mapboxAPIKey, serpToken } from './keys';

const fetchGeoFromZip = async (zip) => {
  let geoPromise = fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${zip}.json?access_token=${mapboxAPIKey}`
  ).then((response) => response.json());
  let promiseData = await geoPromise;
  if (promiseData.features === 0) return false;
  const latLong = {
    lat: promiseData.features[0].center[1],
    long: promiseData.features[0].center[0],
  };
  console.log(latLong);
  return latLong;
};

const fetchProducts = async (latLong, productSearch) => {
  let productsPromise = fetch(
    encodeURI(
      `https://rt.serpmaster.com/?q=${productSearch}&scraper=google_shopping_search&geo=${latLong.lat},${latLong.long},10&num=100&parse=json&access_token=${serpToken}`
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  ).then((response) => response.json());
  let promiseData = await productsPromise;
  console.log(promiseData);
};

export default async function fetchProductsData(zip, productString) {
  let latLong = await fetchGeoFromZip(zip);
  const resultsArray = await fetchProducts(latLong, productString);
  return resultsArray;
}
