import React from "react";

const ConfirmedPaymentPage = () => {
  const paymentMethods = [
    {
      name: "VISA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsQMmNtlPMfU4nDbOhkKxA3lqSwAn1Rj6NQ&usqp=CAU",
    },
    {
      name: "DBBL",
      image:
        "https://www.newagebd.com/files/records/news/202011/122238_131.jpg",
    },

    {
      name: "Bkash",
      image:
        "https://repository-images.githubusercontent.com/198359987/a5145380-e312-11e9-89e0-33b42410e0fd",
    },
    {
      name: "Rocket",
      image: "https://alpha.net.bd/Content/img/ecommerce/rocketlogo.svg",
    },
    {
      name: "Sure cash",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8F6chSt9uQ1KxBtjNuXYyuyni1bhvU-EavrYN1ucOW0I0e5l-GuV5iW2WXDhruBw_XE&usqp=CAU",
    },
    {
      name: "Nogad",
      image:
        "https://www.tbsnews.net/sites/default/files/styles/social_share/public/images/2021/09/15/nagad.jpg",
    },

    // Add more payment methods as needed
  ];

  return (
    <div className="flex flex-col  min-h-[400px]">
      <div className="max-w-full mx-auto p-8  shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Confirmed Payment</h2>
        <p className="mb-4">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>

        <div className="border-t mt-4 pt-4">
          <h3 className="text-lg font-bold mb-2">Choose a payment method:</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Payment method cards */}
            {paymentMethods.map((method, idx) => (
              <div
                className=" p-4 rounded-md flex flex-col items-center"
                key={method.name}
              >
                <img
                  className="w-24 h-24 mb-2"
                  src={method.image}
                  alt={method.name}
                />
                <h4 className="text-xl font-bold mb-2">{method.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedPaymentPage;
