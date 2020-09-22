const axios = require('axios');
const cheerio = require('cheerio');

const ignored = [
  'tank',
  't-shirt',
  'jasper hill',
  'guest cider',
  'cheesemonger',
  'enamel',
  'brass pin',
  'COAL hat',
  'ginger beer',
  'koozie',
  'bandana',
  'postcard',
  'sticker set',
];

exports.handler = async function() {
  return axios.get('https://togo.holymountainbrewing.com/s/order/')
    .then(function(response){
      
      const $ = cheerio.load(response.data);
      // Ugly as fuck but the site renders itself from a JSON blob and I'm too lazy to actually render thl the JSON and call it a day
      var textNode = $('head > script').map((i, x) => x.children[0])
                                 .filter((i, x) => x && x.data.match(/__BOOTSTRAP_STATE__/)).get(0).data.trim().substring(18);
      textNode = textNode.substring(0, textNode.length - 1).split('__BOOTSTRAP_STATE__')[1].substring(3);

      const jsn = JSON.parse(textNode)

      const products = jsn.commerceLinks.products;

      const filteredProducts = [];

      for (const productId in products) {
        const product = products[productId];

        const name = product.name;

        var shouldIgnore = false;

        for (const ignore of ignored) {
           if (name.toLowerCase().includes(ignore.toLowerCase())) {
            shouldIgnore = true;
           }
        }

        if (!shouldIgnore) {
          filteredProducts.push({'name': name, 'url': product.site_link})
        }
      }
    });
}