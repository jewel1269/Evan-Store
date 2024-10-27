import React from "react";

const NewArrivalGallery = () => {
  const products = [
    {
      id: 1,
      name: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0KepIuNL--h_uH5iEolvgA1yyyB8NMrGTVN8agYBPMIkUqyLzLirKBCSOfKgTSHRz40&usqp=CAU", // Replace with actual image path
      link: "#",
      large: true,
    },
    {
      id: 2,
      name: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
      imgSrc: "https://i.pinimg.com/736x/44/54/7f/44547fc19b634899d75f7d8d7ef911e5.jpg", // Replace with actual image path
      link: "#",
      large: false,
    },
    {
      id: 3,
      name: "Speakers",
      description: "Amazon wireless speakers.",
      imgSrc: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-audio-speakers-in-the-dark-night-image_2943649.jpg", 
      link: "#",
      large: false,
    },
    {
      id: 4,
      name: "Perfume",
      description: "GUCCI INTENSE OUD EDP.",
      imgSrc: "https://img.freepik.com/premium-photo/luxurious-perfume-bottle-with-black-details-dark-background_7023-57139.jpg", 
      link: "#",
      large: false,
    },
  ];

  return (
    <div className="px-8 py-16 ">
      <h2 className="text-red-500 font-semibold mb-2">Featured</h2>
      <h1 className="text-3xl font-bold mb-8"><span className="inline-block w-2 h-6 bg-red-500 mr-2"></span> New Arrival</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-lg ${
              product.large ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h2 className="text-white text-xl font-bold">{product.name}</h2>
              <p className="text-gray-300 text-sm">{product.description}</p>
              <a
                href={product.link}
                className="mt-2 inline-block w-[30%] text-sm font-semibold text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalGallery;
