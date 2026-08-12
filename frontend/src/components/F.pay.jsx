import React, { useState } from "react";

const FakePayment = () => {

  const [open, setOpen] = useState(false);

  const fakeSuccess = () => {
    alert("Payment Successful ✅");
    setOpen(false);
  };

  return (
    <div>

    
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 my-2 mx-2  mr-10 items-center rounded-lg font-semibold shadow-md transition duration-300"
      >
        Pay Online
      </button>

    
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-[380px] rounded-2xl p-6 shadow-2xl animate-fadeIn">

            <h2 className="text-2xl font-bold text-center mb-5">
              Select Payment Method
            </h2>

           
            <button
              onClick={fakeSuccess}
              className="w-full bg-gray-100 hover:bg-gray-200 border rounded-xl py-3 mb-3 font-semibold transition"
            >
              Pay with UPI
            </button>

            <button
              onClick={fakeSuccess}
              className="w-full bg-gray-100 hover:bg-gray-200 border rounded-xl py-3 mb-3 font-semibold transition"
            >
              Visa / MasterCard
            </button>

            <button
              onClick={fakeSuccess}
              className="w-full bg-gray-100 hover:bg-gray-200 border rounded-xl py-3 mb-3 font-semibold transition"
            >
              Bank Transfer
            </button>

            <button
              onClick={fakeSuccess}
              className="w-full bg-gray-100 hover:bg-gray-200 border rounded-xl py-3 mb-3 font-semibold transition"
            >
              Wallet Payment
            </button>

                       <div className="text-center mt-5">

              <p className="font-bold mb-3">
                Scan QR Code
              </p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=FakePayment"
                alt="QR"
                className="mx-auto rounded-lg border"
              />

              <button
                onClick={fakeSuccess}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                I Have Paid
              </button>

            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default FakePayment;