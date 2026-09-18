function Donations() {
  const people = [
    {
      bloodquantity: "Whole Blood",

      location: "City Hospital Blood Bank, New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      person: "https://img.icons8.com/?size=100&id=11220&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
      mili:"450ml",
      drop:"https://img.icons8.com/?size=100&id=FU2y2ma2Czyg&format=png&color=b91c1c",

    },
    {
      bloodquantity: "Whole Blood",

      location: "City Hospital Blood Bank, New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      person: "https://img.icons8.com/?size=100&id=11220&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
      mili:"450ml",
      drop:"https://img.icons8.com/?size=100&id=FU2y2ma2Czyg&format=png&color=b91c1c",

    },
    {
      bloodquantity: "Whole Blood",

      location: "City Hospital Blood Bank, New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      person: "https://img.icons8.com/?size=100&id=11220&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
      mili:"450ml",
      drop:"https://img.icons8.com/?size=100&id=FU2y2ma2Czyg&format=png&color=b91c1c",

    },
    {
      bloodquantity: "Whole Blood",

      location: "City Hospital Blood Bank, New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      person: "https://img.icons8.com/?size=100&id=11220&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
      mili:"450ml",
      drop:"https://img.icons8.com/?size=100&id=FU2y2ma2Czyg&format=png&color=b91c1c",

    },
  ];

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 ml-75 mt-0.2 ">
        <div className=" m-5 ">
          <div className="m-2 bg-(--Lpink) max-h-screen rounded-2xl">
            <div className="flex  justify-between items-center p-3">
              <div className="flex flex-row gap-5">
                <img
                  src="https://img.icons8.com/?size=100&id=rmUXxOkHKZLY&format=png&color=b91c1c"
                  alt="findBlood"
                  className="h-16 p-2 ml-2 rounded-full bg-(--Lpink) shadow-xl outline-1 outline-red-100 mt-0.2"
                />
                <div className="flex flex-col gap-1">
                  <p className="mt-0.9  font-medium text-md">
                    <p className="font-bold text-3xl">
                      Every <span className="text-(--red)"> Donation</span> Counts
                    </p>
                  </p>
                  <p className="text-md text-gray-500 font-semibold">Your blood can give someone a second chance at life.</p>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src="/src/assets/BeSave.png"
                  alt="Image"
                  className="h-24 w-70  mr-16"
                />
              </div>
            </div>
          </div>


          <div className="pl-2 pr-4 ml-2 ">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">My Donations</h1>
                <p className="text-sm font-semibold text-gray-500">View your past blood donation records and impact</p>
              </div>
              <div className="flex  outline-1 outline-gray-200 shadow-sm rounded-md mt-3">
                <img src="https://img.icons8.com/?size=100&id=M49y0HnG1sig&format=png&color=1f2937" alt="image" className="h-4.5 mt-1.5 ml-1 mr-1"/>
                  <select className="h-5 max-w-screen pr-2 outline-none text-sm font-bold mt-1 mr-1">
                    <option value="Filter">Filter</option>
                  </select>
              </div>
            </div>
            <ul
              role="list"
              className="divide-y divide-white/5 flex flex-col gap-2 mt-3"
            >
              {people.map((person) => (
                <li className="flex justify-between gap-x-6 py-3 outline-1 outline-gray-200 shadow-sm rounded-lg p-4">
                  <div className="flex min-w-0  ">
                    <div className="max-h-screen w-20 outline-1 outline-gray-200 shadow-sm rounded-md text-sm flex flex-col justify-center p-1.5 pl-6 ">
                      <p className="text-md text-(--red) font-semibold">
                        {person.month}
                      </p>
                      <p className="ml-0.5 text-lg font-bold text-(--ruby)">
                        {person.date}
                      </p>
                      <p className="mr-1 text-sm font-semibold text-gray-500">
                        {person.year}
                      </p>
                    </div>
                    <div className=" outline-1 outline-gray-200 ml-2.5  mr-4"/>
                    <div className="min-w-0 flex flex-auto">
                      <div className="">
                        <img src="https://img.icons8.com/?size=100&id=0wniqABvR6uT&format=png&color=b91c1c" alt="Image" className="h-10 bg-(--Lpink) p-1 mr-2.5 -ml-1 mt-1 shadow-sm rounded-full"/>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold flex flex-row text-black">
                          {person.bloodquantity}
                          
                        </p>
                       
                        <p className="flex gap-2 mt-0.5">
                          <img
                            src="https://img.icons8.com/?size=100&id=85049&format=png&color=1f2937"
                            alt="image"
                            className="h-4"
                          />
                          <span className="text-xs mt-0.5   font-bold text-gray-500">
                            {person.location}
                          </span>
                        </p>
                        <p className=" flex gap-2.5 mt-0.5 ">
                          <img
                            src={person.clock}
                            alt="image"
                            className="h-3.5 mt-0.5 ml-0.5"
                          />
                          <span className="text-xs   mt-0.5 font-bold text-gray-500">
                            {person.time}
                          </span>
                        </p>
                        <p className=" flex gap-2.5 mt-0.5 ">
                          <img
                            src={person.drop}
                            alt="image"
                            className="h-4.5"
                          />
                          <span className="text-xs   mt-0.5 font-bold text-gray-500">
                            {person.mili}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" outline-1 outline-gray-200 ml-11  mr-4"/>
                  <div className=" flex flex-row ">
                    <div className="flex flex-col mr-40  mt-3.5">
                      <p className="text-md mt-1 font-semibold">
                      Helped
                    </p>
                    <p className="flex">
                      <img src={person.person} alt="image" className="h-5 mt-0.5 mr-2" /> <span className="mb-1 text-sm mt-0.5 font-bold">3 Lives</span>
                    </p>
                    </div>
                    <p className="h-8 flex mt-6 rounded-lg bg-green-100 pt-2  pl-3 pr-5 text-xs text-green-800 shadow-sm font-bold">
                     <img src="https://img.icons8.com/?size=100&id=uAGfRpkJmAGW&format=png&color=40C057" alt="Image" className="h-4 mr-1.5"/>
                     Completed
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Donations;
