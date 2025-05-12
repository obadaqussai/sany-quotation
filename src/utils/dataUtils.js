export const productCategories = [
  'Excavators',
  'Dump Trucks',
  'Wheel Loaders',
  'Cranes',
  'Concrete Machinery'
];

export const products = [
  // 1. Dump Trucks
  {
    id: 'SYZ320C-8Y',
    sku: 'SANY-SYZ320C-8Y',
    name: "SYZ320C-8Y(V) Dump Truck",
    category: "Dump Trucks",
    description: "6x4 dump truck with Yuchai engine and Beiben axles",
    cashPrice: 850000, // SAR
    image: "/images/dump-truck-6x4.jpg",
    catalogPdf: "/catalogs/DumpTruck6X4.pdf",
    keyFeatures: [
      "Yuchai YC6MK400-50 engine (294kW)",
      "16T Beiben cast steel axles",
      "46500 kg full load weight",
      "20 m³ cargo capacity",
      "Euro V emission standard"
    ],
    specifications: {
      general: {
        model: "SYZ320C-8Y(V)",
        code: "ZZX100000241",
        curbWeight: "16500 kg",
        fullLoadWeight: "46500 kg",
        dimensions: "8800×2540×3580 mm",
        wheelBase: "4000+1400 mm",
        minGroundClearance: "≥300 mm",
        turningDiameter: "≤24 m"
      },
      engine: {
        model: "Yuchai YC6MK400-50",
        displacement: "10.338 L",
        power: "294 kW @ 1900 rpm",
        torque: "1900 N.m @ 1100-1500 rpm",
        emissionStandard: "Euro V"
      },
      transmission: {
        gearbox: "Fast 12JSD200T-B",
        frontAxle: "9T",
        rearAxle: "2×16T"
      },
      performance: {
        cargoCapacity: "20 m³",
        cargoDimensions: "5800×2350×1500 mm",
        liftingAngle: "45°",
        fuelTank: "300 L",
        brakingSystem: "Pneumatic dual-circuit"
      }
    },
    standardFeatures: [
      "Sany Cab CB318",
      "12.00R20 tires",
      "Rootcloud monitoring system",
      "ABS braking system"
    ],
    warranty: "12 months or 3000 operating hours",
    paymentTerms: {
      cashDiscount: "5%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        },
        {
          name: "2-Year Plan",
          downPayment: "25%",
          interestRate: "8%",
          term: "24 months"
        }
      ]
    }
  },
  {
    id: 'SYZ425C-8S',
    sku: 'SANY-SYZ425C-8S',
    name: "SYZ425C-8S(V) Dump Truck",
    category: "Dump Trucks",
    description: "8x4 dump truck with Sany power engine",
    cashPrice: 950000, // SAR
    image: "/images/dump-truck-8x4.jpg",
    catalogPdf: "/catalogs/DumpTruck8X4.pdf",
    keyFeatures: [
      "Sany D12C5-462E1 engine (340kW)",
      "2×16T Hande rear axles",
      "65000 kg full load weight",
      "25 m³ cargo capacity",
      "Euro V emission standard"
    ],
    specifications: {
      general: {
        model: "SYZ425C-8S(V)",
        code: "ZZX10000492",
        curbWeight: "20610 kg",
        fullLoadWeight: "65000 kg",
        dimensions: "10325×2550×3625 mm",
        wheelBase: "2000+3550+1500 mm",
        minGroundClearance: "≥300 mm",
        turningDiameter: "≤24 m"
      },
      engine: {
        model: "Sany D12C5-462E1",
        displacement: "12.12 L",
        power: "340 kW @ 1900 rpm",
        torque: "2200 N.m @ 1000-1400 rpm",
        emissionStandard: "Euro V"
      },
      transmission: {
        gearbox: "Fast 12JSDX240TA",
        frontAxle: "2×9T",
        rearAxle: "2×16T"
      },
      performance: {
        cargoCapacity: "25 m³",
        cargoDimensions: "7200×2350×1500 mm",
        liftingAngle: "45°",
        fuelTank: "500 L",
        brakingSystem: "Pneumatic dual-circuit"
      }
    },
    standardFeatures: [
      "Sany Cab CB318",
      "12.00R24 tires",
      "Rootcloud monitoring system",
      "ABS braking system",
      "GPS terminal"
    ],
    warranty: "12 months or 3000 operating hours",
    paymentTerms: {
      cashDiscount: "5%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        },
        {
          name: "2-Year Plan",
          downPayment: "25%",
          interestRate: "8%",
          term: "24 months"
        }
      ]
    }
  },

  // 2. Excavators
  {
    id: 'SY215H',
    sku: 'SANY-SY215H',
    name: "SY215H Hydraulic Excavator",
    category: "Excavators",
    description: "21.5-ton hydraulic excavator for general construction",
    cashPrice: 1200000, // SAR
    image: "/images/sy215h.jpg",
    catalogPdf: "/catalogs/SY215H.pdf",
    keyFeatures: [
      "Custom trust offer engine technology",
      "Performance evaluation system",
      "Long-term durability support",
      "Associate intelligence lab"
    ],
    specifications: {
      general: {
        operatingWeight: "21500 kg",
        bucketCapacity: "0.8-1.2 m³",
        transportLength: "9450 mm",
        transportWidth: "2800 mm",
        transportHeight: "3250 mm"
      },
      engine: {
        model: "Custom SANY",
        power: "110 kW",
        emissionStandard: "Euro III"
      },
      performance: {
        diggingForce: "140 kN",
        breakoutForce: "100 kN",
        travelSpeed: "5.2 km/h",
        swingSpeed: "11 rpm"
      }
    },
    warranty: "12 months or 2000 hours",
    paymentTerms: {
      cashDiscount: "5%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        }
      ]
    }
  },
  {
    id: 'SY365H',
    sku: 'SANY-SY365H',
    name: "SY365H Hydraulic Excavator",
    category: "Excavators",
    description: "36-ton mining excavator with superior performance",
    cashPrice: 2200000, // SAR
    image: "/images/sy365h.jpg",
    catalogPdf: "/catalogs/SY365H.pdf",
    keyFeatures: [
      "DOMCS engine-pump-voice control system",
      "8% higher efficiency, 10% lower fuel consumption",
      "FOPS/ROPS certified cabin",
      "20000h service life under mining conditions"
    ],
    specifications: {
      general: {
        operatingWeight: "36000 kg",
        bucketCapacity: "1.6-2.32 m³",
        transportLength: "11530 mm",
        transportWidth: "3190 mm",
        transportHeight: "3545 mm"
      },
      engine: {
        model: "GH-6HK1XKSC",
        power: "212 kW @ 2000 rpm",
        torque: "1080 N.m @ 1500 rpm",
        displacement: "7.79 L",
        emissionStandard: "Euro III"
      },
      performance: {
        diggingForce: "235 kN",
        breakoutForce: "180 kN",
        travelSpeed: "5.5/3.5 km/h",
        swingSpeed: "9.5 rpm",
        gradeability: "70% (35°)"
      }
    },
    warranty: "12 months or 2000 hours",
    paymentTerms: {
      cashDiscount: "7%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        },
        {
          name: "2-Year Plan",
          downPayment: "25%",
          interestRate: "8%",
          term: "24 months"
        }
      ]
    }
  },
  {
    id: 'SY550HD',
    sku: 'SANY-SY550HD',
    name: "SY550HD Hydraulic Excavator",
    category: "Excavators",
    description: "55-ton mining excavator with DOMCS control system",
    cashPrice: 3200000, // SAR
    image: "/images/sy550hd.jpg",
    catalogPdf: "/catalogs/SY550HD.pdf",
    keyFeatures: [
      "300kW @1800rpm engine power",
      "52000kg operating weight",
      "3.1-3.6 m³ bucket capacity",
      "FOPS/ROPS certified cab",
      "Independent oil radiator system"
    ],
    specifications: {
      general: {
        operatingWeight: "52000 kg",
        bucketCapacity: "3.1-3.6 m³",
        transportLength: "12076 mm",
        transportWidth: "3360 mm",
        transportHeight: "3700 mm"
      },
      engine: {
        model: "6WG1XKSC-01",
        power: "300 kW @ 1800 rpm",
        torque: "1950 N.m @ 1400 rpm",
        displacement: "15.681 L",
        emissionStandard: "Euro III"
      },
      performance: {
        diggingForce: "270 kN",
        breakoutForce: "244 kN",
        travelSpeed: "5.4/3.1 km/h",
        swingSpeed: "8 rpm",
        gradeability: "70% (35°)"
      }
    },
    warranty: "12 months or 2000 hours",
    paymentTerms: {
      cashDiscount: "8%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        },
        {
          name: "2-Year Plan",
          downPayment: "25%",
          interestRate: "8%",
          term: "24 months"
        }
      ]
    }
  },

  // 3. Wheel Loaders
  {
    id: 'SW978K1',
    sku: 'SANY-SW978K1',
    name: "SW978K1 Wheel Loader",
    category: "Wheel Loaders",
    description: "5-ton wheel loader with 4.5-7.0 m³ bucket capacity",
    cashPrice: 750000, // SAR
    image: "/images/sw978k1.jpg",
    catalogPdf: "/catalogs/SW978K1.pdf",
    keyFeatures: [
      "Rated power: 164 kW @2200 rpm",
      "Operating weight: 17,100 kg",
      "Rated payload: 5,000 kg",
      "Bucket capacity: 2.7-4.0 m³",
      "Reliable, Fuel-efficient & Comfortable"
    ],
    specifications: {
      general: {
        operatingWeight: "17100 kg",
        bucketCapacity: "2.7-4.0 m³",
        ratedPayload: "5000 kg"
      },
      engine: {
        power: "164 kW @ 2200 rpm",
        emissionStandard: "Euro III"
      },
      performance: {
        travelSpeed: "35 km/h",
        breakoutForce: "160 kN",
        tippingLoad: "8000 kg"
      }
    },
    warranty: "12 months or 2000 hours",
    paymentTerms: {
      cashDiscount: "5%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        }
      ]
    }
  },
  {
    id: 'SYL956H5',
    sku: 'SANY-SYL956H5',
    name: "SYL956H5 Wheel Loader",
    category: "Wheel Loaders",
    description: "5-ton wheel loader with high efficiency",
    cashPrice: 780000, // SAR
    image: "/images/syl956h5.jpg",
    catalogPdf: "/catalogs/SYL956H5.pdf",
    keyFeatures: [
      "Rated power: 164 kW @2200 rpm",
      "Operating weight: 17,100 kg",
      "Rated payload: 5,000 kg",
      "Bucket capacity: 2.7-4.0 m³"
    ],
    specifications: {
      general: {
        operatingWeight: "17100 kg",
        bucketCapacity: "2.7-4.0 m³",
        ratedPayload: "5000 kg"
      },
      engine: {
        power: "164 kW @ 2200 rpm",
        emissionStandard: "Euro III"
      },
      performance: {
        travelSpeed: "35 km/h",
        breakoutForce: "160 kN",
        tippingLoad: "8000 kg"
      }
    },
    warranty: "12 months or 2000 hours",
    paymentTerms: {
      cashDiscount: "5%",
      installmentOptions: [
        {
          name: "1-Year Plan",
          downPayment: "30%",
          interestRate: "6%",
          term: "12 months"
        }
      ]
    }
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};