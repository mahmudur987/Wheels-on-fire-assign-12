import React from "react";

const Showcase = () => {
  const divData = [
    {
      image:
        "https://images.unsplash.com/photo-1536244881128-90b1d3d2549f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80",
      title: "MTB bicycle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522751697237-845edeac3145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
      title: "Road bike",
      description: "Aliquam finibus ex vitae est congue auctor.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558978806-73073843b15e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "E-bike",
      description: "Curabitur nec orci sagittis, malesuada tellus nec.",
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-6xl  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {divData.map((div, index) => (
            <div
              key={index}
              className={`bg-cover bg-center text-white flex items-center justify-center min-h-[150px] ${
                index === 0 ? "row-span-2" : ""
              }`}
              style={{ backgroundImage: `url(${div.image})` }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{div.title}</h3>
                <p className="text-sm">{div.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
