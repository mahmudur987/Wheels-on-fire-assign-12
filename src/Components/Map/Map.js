import React, { useState } from "react";

const Map = () => {
  const [selling, setSelling] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center m-10">
        <button
          className="btn  btn-ghost font-bold"
          onClick={() => setSelling(false)}
        >
          Buying
        </button>
        <input
          onClick={() => setSelling(!selling)}
          type="checkbox"
          className="toggle"
          checked={selling}
        />
        <button className="btn btn-ghost" onClick={() => setSelling(true)}>
          selling
        </button>
      </div>
      {selling && (
        <div>
          <div>
            <h1 className="text-center font-bold text-3xl">
              Selling a bike on wheels on fire is as easy as 1–2–3
            </h1>
          </div>
          <div
            className="bg-cover bg-center py-8 min-h-[700px]"
            style={{
              backgroundImage:
                "url('https://static.vecteezy.com/system/resources/previews/000/213/504/original/road-map-illustration-vector.jpg')",
            }}
          >
            <div className="max-w-5xl mx-auto px-4">
              <div className="min-h-[700px] flex flex-col justify-between gap-8 text-center">
                <div className=" flex justify-end">
                  <div className="md:w-1/3 bg-slate-200 p-6 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">
                      Create the listing
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="md:w-1/3 bg-base-100 p-4 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">
                      Test ride & hand-over meeting
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elipsum
                      dolor sit amet, consectetur adipiscing elitit.
                    </p>
                  </div>
                </div>
                <div className=" flex justify-end">
                  <div className="md:w-1/3 bg-slate-200 p-4 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">
                      Get paid directly to your account
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elitpsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!selling && (
        <div>
          <div>
            <h1 className="text-center font-bold text-3xl">
              Buying a bike on wheels on fire is as easy as 1–2–3
            </h1>
          </div>
          <div
            className="bg-cover bg-bottom py-8 min-h-[700px]"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/city-map-design_1308-580.jpg?w=740&t=st=1687085976~exp=1687086576~hmac=4046597ef512360f9f2d937d9e94db760e733a73893448cd5b212309ca029bdd')",
            }}
          >
            <div className="max-w-5xl mx-auto px-4">
              <div className="min-h-[700px] flex flex-col justify-between gap-8 text-center">
                <div className=" flex justify-start">
                  <div className="md:w-1/3 bg-slate-200 p-6 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">
                      Find your new or second-hand bike
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className=" flex justify-end">
                  <div className="md:w-1/3 bg-base-100 p-4 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">
                      Make an appointment with the seller
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elipsum
                      dolor sit amet, consectetur adipiscing elitit.
                    </p>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="md:w-1/3 bg-slate-200 p-4 shadow-md rounded-md ">
                    <h3 className="text-xl font-bold mb-2">Click to confirm</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elitpsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
