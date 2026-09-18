import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "Who can Donate Blood?",
      content:
        "A healthy person can donate blood if they meet certain basic requirements. Generally, a blood donor should be between 18 and 65 years old, weigh at least 50 kg, and be in good health. The person should not have a fever, infection, or other serious illness at the time of donation. Hemoglobin levels must also meet the required minimum. People who are pregnant or have certain medical conditions may not be eligible to donate. Recent surgeries, tattoos, vaccinations, or certain medications may also require a temporary waiting period before donating blood. Before donation, a blood bank checks the donor’s health and eligibility to ensure that donating blood is safe for both the donor and the recipient.",
    },
    {
      title: "What should i eat before donating blood",
      content:
        "Before donating blood, eat a **light, healthy meal** about 2–3 hours beforehand. Good choices include fruits, vegetables, whole grains, rice, roti, eggs, beans, or lean meat. Foods rich in **iron** such as spinach, lentils, beans, and meat can also be helpful. Drink plenty of **water** before donating to stay hydrated. Avoid donating on an empty stomach and avoid very fatty or greasy foods immediately before donation, as they can affect the quality of the blood sample.",
    },
    {
      title: "Is Blood Donation Safe?",
      content:
        "Yes, blood donation is generally safe for healthy people. Blood is collected by trained healthcare professionals using sterile, single-use needles and equipment, so there is no risk of getting an infection from donating blood. Some people may experience mild and temporary effects such as dizziness, weakness, or bruising at the needle site, but these usually go away quickly. Drinking plenty of fluids, eating a healthy meal, and resting after donation can help prevent discomfort. Before donating, the donor’s health is checked to make sure that blood donation is safe for them.",
    },
    {
      title: "Can i donate if i am on medication?",
      content:
        "Yes, you may be able to donate blood while taking medication, but it depends on the **medicine, the reason you take it, and your health condition**. Some medicines require a temporary waiting period, while others may prevent donation. You should **not stop taking prescribed medication just to donate blood**. Tell the blood bank staff about all medicines you are taking, and they can confirm whether you are eligible to donate.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full min-h-screen ">
      <div className="flex-1 ml-75 mt-0.2 ">
        <div className=" m-5 ">
            <div className="mr-10 ml-5">
                <div className="w-full outline-1  outline-gray-300 rounded-md shadow-sm flex">
                <img src="https://img.icons8.com/?size=100&id=elSdeHsB03U3&format=png&color=1f2937" alt="image" className="h-6 mt-2.5 ml-2"/>
                <input placeholder="Search for a question" className="w-full outline-none h-10 ml-4 text-sm font-bold"/>
            </div>
            </div>
            <div className="mr-8 ml-5 mt-3 flex gap-5">
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">All</button>
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">Donations</button>
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">Appointments</button>
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">Elgibility</button>
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">Account</button>
               <button className="outline-1 outline-gray-200 rounded-sm p-3 pl-5 pr-5 text-xs font-bold shadow-sm hover:bg-(--red) hover:text-(--White)">Others</button>
            </div>
          <div className="max-h-screen  mr-12 mt-3 ml-6   flex p-1">
            <div className="">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden"
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between px-6 py-2  text-left hover:bg-pink-50 focus:bg-pink-50   transition  "
                    >   
                      <span className="font-semibold text-gray-800">
                        {item.title}
                      </span>

                      <span
                        className={`text-2xl transition-transform duration-300  ${
                          openIndex === index ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Content */}
                    <div
                      className={`grid transition-all duration-300 ${
                        openIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-gray-500 bg-pink-50 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
                    </div>

      </div>
    </div>
  );
}

export default Faq;
