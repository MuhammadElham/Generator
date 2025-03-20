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
// Import Caterpillar Product
import Cat_C1 from "../assets/Products/Caterpillar/Cat_C1.2.webp";
import Cat_C4 from "../assets/Products/Caterpillar/Cat_C4.4.webp";
import Cat_C9 from "../assets/Products/Caterpillar/Cat_C9.webp";
import Cat_C13 from "../assets/Products/Caterpillar/Cat_C13.webp";
import Cat_C32 from "../assets/Products/Caterpillar/Cat_C32.webp";
import Cat_C3412C from "../assets/Products/Caterpillar/Cat_C3412C.webp";
import Cat_C3512B from "../assets/Products/Caterpillar/Cat_C3512B.webp";
import Cat_C3516B from "../assets/Products/Caterpillar/Cat_C3516B.webp";
// Import Perkins Product
import Perkins_Cummins320kVA from "../assets/Products/Perkins/Perkins_Cummins320kVA.webp";
import Perkins_Cummins500kVA from "../assets/Products/Perkins/Perkins_Cummins500kVA.webp";
import Perkins_DB30GF from "../assets/Products/Perkins/Perkins_DB-30GF.webp";
import Perkins_DB1000GF from "../assets/Products/Perkins/Perkins_DB-1000GF.webp";
import Perkins_GFE330PLC from "../assets/Products/Perkins/Perkins_GFE330PLC.webp";
// Companies
export const companies = { jenbacher: Jenbacher, caterpillar: Caterpillar, perkins: Perkins, cummins: Cummins, kohler: Kohler, onsite: onSite };
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
// Caterpillar Products
export const product_caterpillar = {
  cat_C1: Cat_C1,
  cat_C4: Cat_C4,
  cat_C9: Cat_C9,
  cat_C13: Cat_C13,
  cat_C32: Cat_C32,
  cat_C3412C: Cat_C3412C,
  cat_C3512B: Cat_C3512B,
  cat_C3516B: Cat_C3516B,
};
// Perkins Products
export const product_perkins = {
    perkins_Cummins320kVA: Perkins_Cummins320kVA,
    perkins_Cummins500kVA: Perkins_Cummins500kVA,
    perkins_DB30GF: Perkins_DB30GF,
    perkins_DB1000GF: Perkins_DB1000GF,
    perkins_GFE330PLC: Perkins_GFE330PLC,

};
export const productsData = [
    {
      id: "jenbacher",
      name: "Jenbacher",
      logo: companies.jenbacher,
      products: [
        {
          id: "j208",
          name: "Jenbacher J 208",
          power: "330 kW",
          image: product_jenbacher.jenbacher_J208,
          description: "High-efficiency gas piston unit for industrial use.",
          price: "$50,000",
          details: "This model is designed for high performance with low emissions...",
        },
        {
          id: "j312",
          name: "Jenbacher J 312",
          power: "500 kW",
          image: product_jenbacher.jenbacher_J312,
          description: "Reliable and efficient gas engine for industrial applications.",
          price: "$70,000",
          details: "Optimized for efficiency with robust design...",
        },
        {
          id: "j316",
          name: "Jenbacher J 316",
          power: "700 kW",
          image: product_jenbacher.jenbacher_J316,
          description: "Durable power solution for high-energy demands.",
          price: "$90,000",
          details: "Ensures stability with minimal maintenance...",
        },
        {
          id: "j320",
          name: "Jenbacher J 320",
          power: "1 MW",
          image: product_jenbacher.jenbacher_J320,
          description: "A next-gen gas engine for heavy industries.",
          price: "$120,000",
          details: "Designed for high uptime and fuel efficiency...",
        },
        {
          id: "j412",
          name: "Jenbacher J 412",
          power: "1.2 MW",
          image: product_jenbacher.jenbacher_J412,
          description: "High-performance engine for industrial energy solutions.",
          price: "$140,000",
          details: "Advanced fuel optimization and low maintenance...",
        },
        {
            id: "j416",
            name: "Jenbacher J 416",
            power: "1.5 MW",
            image: product_jenbacher.jenbacher_J416,
            description: "Powerful and efficient engine for large-scale industries.",
            price: "$160,000",
            details: "Engineered for maximum efficiency and longevity...",
        },
        {
            id: "j420_b",
            name: "Jenbacher J 420 B",
            power: "1.8 MW",
            image: product_jenbacher.jenbacher_J420_B,
            description: "Reliable gas engine with high operational efficiency.",
            price: "$180,000",
            details: "Designed for continuous operation with minimal downtime...",
        },
        {
            id: "j612",
            name: "Jenbacher J 612",
            power: "2 MW",
            image: product_jenbacher.jenbacher_J612,
            description: "Top-tier industrial gas engine with cutting-edge technology.",
            price: "$200,000",
            details: "Provides stable power output with superior efficiency...",
        },
      ],
    },

     {
    id: "caterpillar",
    name: "Caterpillar",
    logo: companies.caterpillar,
    products: [
      {
        id: "c1",
        name: "Caterpillar C1.2",
        power: "13 kW",
        image: product_caterpillar.cat_C1,
        description: "Compact and efficient diesel generator for small-scale use.",
        price: "$8,000",
        details: "Ideal for residential and small commercial applications...",
      },
      {
        id: "c4",
        name: "Caterpillar C4.4",
        power: "50 kW",
        image: product_caterpillar.cat_C4,
        description: "Medium-power generator with excellent fuel efficiency.",
        price: "$15,000",
        details: "Designed for industrial and backup power solutions...",
      },
      {
        id: "c9",
        name: "Caterpillar C9",
        power: "200 kW",
        image: product_caterpillar.cat_C9,
        description: "Reliable diesel generator for industrial applications.",
        price: "$40,000",
        details: "Provides continuous power with low emissions...",
      },
      {
        id: "c13",
        name: "Caterpillar C13",
        power: "400 kW",
        image: product_caterpillar.cat_C13,
        description: "High-performance generator with durable components.",
        price: "$60,000",
        details: "Optimized for high efficiency and reliability...",
      },
      {
        id: "c32",
        name: "Caterpillar C32",
        power: "1 MW",
        image: product_caterpillar.cat_C32,
        description: "Heavy-duty generator for large-scale power needs.",
        price: "$130,000",
        details: "Designed for continuous operation with maximum uptime...",
      },
      {
        id: "c3412c",
        name: "Caterpillar C3412C",
        power: "1.5 MW",
        image: product_caterpillar.cat_C3412C,
        description: "Industrial-grade diesel generator with superior efficiency.",
        price: "$170,000",
        details: "Ensures stable power supply with minimal fuel consumption...",
      },
      {
        id: "c3512b",
        name: "Caterpillar C3512B",
        power: "2 MW",
        image: product_caterpillar.cat_C3512B,
        description: "Robust generator built for high-power applications.",
        price: "$200,000",
        details: "Designed for demanding industrial environments...",
      },
      {
        id: "c3516b",
        name: "Caterpillar C3516B",
        power: "2.5 MW",
        image: product_caterpillar.cat_C3516B,
        description: "Top-tier power solution with advanced technology.",
        price: "$250,000",
        details: "Maximizes efficiency while reducing operational costs...",
      },
    ],
  },

  {
    id: "perkins",
    name: "Perkins",
    logo: companies.perkins,
    products: [
      {
        id: "cummins320kva",
        name: "Perkins Cummins 320 kVA",
        power: "320 kVA",
        image: product_perkins.perkins_Cummins320kVA,
        description: "High-efficiency diesel generator for industrial use.",
        price: "$80,000",
        details: "Reliable power backup with low fuel consumption...",
      },
      {
        id: "cummins500kva",
        name: "Perkins Cummins 500 kVA",
        power: "500 kVA",
        image: product_perkins.perkins_Cummins500kVA,
        description: "Heavy-duty generator for commercial applications.",
        price: "$120,000",
        details: "Designed for continuous operation with high durability...",
      },
      {
        id: "db30gf",
        name: "Perkins DB-30GF",
        power: "30 kVA",
        image: product_perkins.perkins_DB30GF,
        description: "Compact and cost-effective generator for small businesses.",
        price: "$15,000",
        details: "Perfect for remote operations and emergency backup...",
      },
      {
        id: "db1000gf",
        name: "Perkins DB-1000GF",
        power: "1 MW",
        image: product_perkins.perkins_DB1000GF,
        description: "Industrial-grade generator for large-scale applications.",
        price: "$150,000",
        details: "High-performance and fuel-efficient for long-term use...",
      },
      {
        id: "gfe330plc",
        name: "Perkins GFE330PLC",
        power: "330 kVA",
        image: product_perkins.perkins_GFE330PLC,
        description: "Advanced generator with digital control systems.",
        price: "$85,000",
        details: "Provides stable and continuous power with low emissions...",
      },
    ],
  },
  ];
  
