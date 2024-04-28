const PRODUCTS = [
  {
    id: 100,
    name: "Sugar Cane Fiber Tableware",
    image: require("../../assets/products/p-100.jpg"),
    url: "https://renouvo.net/biomass-materials/sugarcane-fiber/",
    description:
      "Sugarcane is one of the most productive crops in the world. More than one billion tons of sugar cane are produced every year, resulting in a large amount of sugar cane fiber. Therefore, the use of sugarcane fiber is becoming increasingly common. In order to rationally utilize resources, many new applications of sugarcane fiber have been developed. They have huge potential to be used as alternative materials for plastics, biofuels, compost or food additives, etc.",
  },
  {
    id: 101,
    name: "Biodegradable Plastic",
    image: require("../../assets/products/p-101.jpg"),
    url: "https://renouvo.net/biodegradable-compostable/what-are-biodegradable-plastics/#What_are_biodegradable_plastics",
    description:
      "Biodegradable plastic breaks down quickly and can be easily recycled through organic processes, is energy-efficient to produce and breaks down within a few months, thus minimizing the amount of waste. Composting of biodegradable plastic products also helps improve soil fertility.",
  },
  {
    id: 102,
    name: "Hot Paper Cups",
    image: require("../../assets/products/p-102.jpg"),
    url: "https://www.ecoware.co.nz/collections/hot-paper-cups",
    description:
      "Ecoware coffee cups are made from 100% renewable resources, heavy-duty paper lined with Ingeo™ bioplastic. Water-based paper cups are Flustix PLASTICFREE certified for a PLA-free option. Paper cups and lids are industrially compostable certified to DIN CERTCO EN13432 and DIN CERTCO ASTM D6400/D6868.",
  },
  {
    id: 103,
    name: "Cold Clear Cups",
    image: require("../../assets/products/p-103.jpg"),
    url: "https://www.ecoware.co.nz/collections/cold-clear-cups",
    description:
      "Made from 100% renewable plant-based resources, the cup and lid provide a durable, recycled alternative to fossil-fueled plastic cups. They are BPI certified for commercial composting, meet the requirements of ASTM D6400/D6868, and can be used with food scraps where composting programs exist.Made from 100% renewable plant-based resources, the cup and lid provide a durable, recycled alternative to fossil-fueled plastic cups. They are BPI certified for commercial composting, meet the requirements of ASTM D6400/D6868, and can be used with food scraps where composting programs exist.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
