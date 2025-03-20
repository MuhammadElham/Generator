// Import Companies
import Jenbacher from "../assets/Logo/Company/company_1.png";
import Caterpillar from "../assets/Logo/Company/company_2.png";
import Perkins from "../assets/Logo/Company/company_3.png";
import Cummins from "../assets/Logo/Company/company_4.png";
import Kohler from "../assets/Logo/Company/company_5.png";
import onSite from "../assets/Logo/Company/company_6.png";
// Import Jenbacher Product
import Jenbacher_J208 from "../assets/Products/Jenbacher/Jenbacher_J208.webp";
import Jenbacher_J312 from "../assets/Products/Jenbacher/Jenbacher_J312.webp";
import Jenbacher_J316 from "../assets/Products/Jenbacher/Jenbacher_J316.webp";
import Jenbacher_J320 from "../assets/Products/Jenbacher/Jenbacher_J320.webp";
import Jenbacher_J412 from "../assets/Products/Jenbacher/Jenbacher_J412.webp";
import Jenbacher_J416 from "../assets/Products/Jenbacher/Jenbacher_J416.webp";
import Jenbacher_J420_B from "../assets/Products/Jenbacher/Jenbacher_J420_B.webp";
import Jenbacher_J612 from "../assets/Products/Jenbacher/Jenbacher_J612.webp";
// Companies
export const companies = { jenbacher: Jenbacher, caterpillar: Caterpillar, perkins: Perkins, cumins: Cummins, kohler: Kohler, onsite: onSite };
// Jenbacher Products
export const product_jenbacher = {
  jenbacher_J208: Jenbacher_J208,
  jenbacher_J312: Jenbacher_J312,
  jenbacher_J316: Jenbacher_J316,
  jenbacher_J320: Jenbacher_J320,
  jenbacher_J412: Jenbacher_J412,
  jenbacher_J416: Jenbacher_J416,
  jenbacher_J420_B: Jenbacher_J420_B,
  jenbacher_J612: Jenbacher_J612,
};
const productsData = [
  {
    id: "jenbacher",
    name: "Jenbacher",
    logo: companies.jenbacher,
    products: [
      {
        id: "j208",
        name: "Jenbacher J 208",
        power: "330 kW",
        image: require("../assets/Products/jenbacher_j208.png"),
        description: "High-efficiency gas piston unit for industrial use.",
        price: "$50,000",
        details: "This model is designed for high performance with low emissions...",
      },
    ],
  },
];
