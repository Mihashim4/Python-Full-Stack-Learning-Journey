import React, { useState } from "react";

function Products() {
  const [openCard, setOpenCard] = useState(null);

  const toggleDetails = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const products = [
    {
      id: 1,
      title: "Body Components",
      image: "/images/body.jpg",
      short: "Boot gas springs, regulators, wiper blades",
      details: [
        "Car, Bus, Lorry, Tipper :- Body, Door, Bonnet, Body Panels",
        "Boot / Bonnet Gas Springs",
        "Window Winder Mechanisms (Regulators)",
        "Windscreen Wiper Blades"
      ]
    },
    {
      id: 2,
      title: "Brake & Wheel Components",
      image: "/images/brake-disc-and-pads.jpeg",
      short: "Discs, drums, pads, shoes, hubs, bearings",
      details: [
        "Brake Discs", "Brake Drums", "Brake Master Cylinders", "Brake Pads",
        "Brake Sensor Wires", "Brake Shoes", "Freewheel Hubs", "Wheel Bearings",
        "Wheel Brake Cylinders", "Wheel Hubs", "Wheel Speed Sensors"
      ]
    },
    {
      id: 3,
      title: "Bearings",
      image: "/images/bearings.jpeg",
      short: "Wheel bearings, engine bearings, ball bearings & more",
      details: [
        "Wheel Bearings", "Engine Bearings", "Ball Bearings", "Roller Bearings",
        "Clutch Bearings", "Propshaft Centre Bearings", "Thrust Bearings"
      ]
    },
    {
      id: 4,
      title: "Camshaft Train Components",
      image: "/images/campshift.jpeg",
      short: "Camshafts, bearings, followers, push-rods",
      details: ["Camshafts", "Cam Bearings", "Hydraulic Cam Followers", "Push-Rod Tubes"]
    },
    {
      id: 5,
      title: "Chemical Components",
      image: "/images/chemicals.jpg",
      short: "Oils, additives, cleaners, sealants",
      details: [
        "Additives (Diesel Treatment, Injector Cleaner, etc.)", "Anti-Freeze",
        "Brake Fluid", "Carburettor, Brake & Clutch Cleaners", "Car Care Products",
        "Engine & Exhaust Enamel", "Gasket Maker", "Oils (Engine & Hydraulic)",
        "Radiator Products", "Valve Grinding Paste"
      ]
    },
    {
      id: 6,
      title: "Cooling Components",
      image: "/images/cooling.jpg",
      short: "Radiators, water pumps, thermostats, fans",
      details: [
        "Coolant Level Sensor", "Fan Blades", "Fan Clutches",
        "Radiator Expansion Bottles", "Radiators & Caps",
        "Radiator Hoses & Heater Pipes", "Thermostats & Housings",
        "Water Pumps", "Welch Plugs"
      ]
    },
    {
      id: 7,
      title: "Crankshaft Components",
      image: "/images/crankshaft.jpeg",
      short: "Con-rods, bolts, crankshafts, bearings",
      details: ["Con-Rod Bolts", "Con-Rods", "Crankshafts", "Engine Bearings"]
    },
    {
      id: 8,
      title: "Cylinder Components",
      image: "/images/cylinder.jpeg",
      short: "Pistons, rings, sleeves, bushes",
      details: ["Pistons", "Piston Rings", "(Cylinder) Sleeves", "Sleeve Kits", "Small End Bushes"]
    },
    {
      id: 9,
      title: "Cylinder Head Components",
      image: "/images/cylinderhead.jpeg",
      short: "Heads, precombustion chambers, bolts",
      details: ["Cylinder Heads", "Precombustion Chambers", "Cylinder Head Bolts"]
    },
    {
      id: 10,
      title: "Electrical Components",
      image: "/images/electrical.jpg",
      short: "Ignition coils, spark plugs, glow plugs, leads",
      details: [
        "Distributor Caps & Rotors", "Glow Plugs", "Globes", "Ignition Coils",
        "Ignition Leads", "Ignition Modules", "Spark Plugs"
      ]
    },
    {
      id: 11,
      title: "Engine Accessories",
      image: "/images/engine.jpg",
      short: "Pulleys, belts, tensioners, mountings",
      details: [
        "Crankshaft Pulleys", "Micro-V Belts",
        "Micro-V Belt Tensioners, Pulleys & Idler Wheels",
        "Engine Mountings", "Crank Ventilation Valves", "Headers (Exhaust Manifolds)"
      ]
    },
    {
      id: 12,
      title: "Filtration Components",
      image: "/images/filters.jpeg",
      short: "Air, oil, fuel, cabin filters",
      details: [
        "Air Filters", "Fuel Filters", "Oil Filters", "Cabin Filters",
        "Breather Filters", "Motorcycle Filters"
      ]
    },
    {
      id: 13,
      title: "Steering Components",
      image: "/images/steering.jpg",
      short: "Racks, pumps, tie rods, ball joints",
      details: [
        "Ball Joints", "Drag Links", "Idler Arms", "Power Steering Pumps",
        "Tie Rod Ends", "Tie Rods", "Steering Racks"
      ]
    },
    {
      id: 14,
      title: "Suspension Components",
      image: "/images/suspension.jpeg",
      short: "Control arms, bushes, stabiliser links",
      details: [
        "Control Arm Bushes", "Control Arms", "Stabiliser Links",
        "Strut Mountings", "Subframe Kits", "Suspension Bushes"
      ]
    },
    {
      id: 15,
      title: "Transmission Components",
      image: "/images/gear.jpg",
      short: "Clutch kits, CV joints, mountings, propshaft",
      details: [
        "Clutch Kits", "Clutch Master Cylinders", "Clutch Slave Cylinders",
        "CV Joints", "Gearbox Mountings", "Propshaft Centre Bearings", "Universal Joints"
      ]
    },
    {
      id: 16,
      title: "Valve Train Components",
      image: "/images/valvetrain.jpeg",
      short: "Valves, guides, seats, shims, rockers",
      details: [
        "Lash Pads", "Mechanical Cam Followers", "Rocker Arms", "Rocker Shafts",
        "Valve Guides", "Valve Seat Inserts", "Valve Shims", "Valves"
      ]
    }
  ];

  return (
    <div>
      
      <section className="products-hero">
        <h1>Old Auto Parts Collection</h1>
        <p>Quality used spare parts for Cars, Lorries, Autos & more</p>
      </section>

      <section className="products-intro">
        <p>
          We offer a wide range of new & used auto parts for various vehicles, including cars,
          lorries, and autos. Our collection includes body components, brake and wheel components,
          bearings, camshaft train components, chemical components, cooling components, crankshaft components,
          cylinder components, cylinder head components, electrical components, engine accessories, filtration components,
          steering components, suspension components, transmission components, and valve train components.
          Browse our selection to find the parts you need to keep your vehicle running smoothly.
        </p>
      </section>

      <hr />

      
      <section className="products py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4 col-sm-6" key={product.id}>
                <div className="card h-100 text-center p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top mx-auto"
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3">{product.title}</h5>
                    <p className="card-text">{product.short}</p>

                    <p
                      className="view-btn text-primary"
                      style={{ cursor: "pointer", fontWeight: "500" }}
                      onClick={() => toggleDetails(product.id)}
                    >
                      {openCard === product.id ? "Hide Details ▴" : "View Details ▾"}
                    </p>

                    {openCard === product.id && (
                      <div className="details text-start">
                        <ul className="list-unstyled small">
                          {product.details.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;