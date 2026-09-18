function Appointments() {
  const people = [
    {
      hospitalname: "City Hospital Blood Bank",
      UCC: "Upcoming",
      location: "New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      arrow: "https://img.icons8.com/?size=100&id=7849&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
    },
    {
      hospitalname: "City Hospital Blood Bank",
      UCC: "Upcoming",

      location: "New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      arrow: "https://img.icons8.com/?size=100&id=7849&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
    },
    {
      hospitalname: "City Hospital Blood Bank",
      UCC: "Upcoming",

      location: "New delhi",
      month: "MAY",
      date: "25",
      year: "2026",
      arrow: "https://img.icons8.com/?size=100&id=7849&format=png&color=1f2937",
      clock:
        "https://img.icons8.com/?size=100&id=DVIax78ExUe5&format=png&color=1f2937",
      time: "10.00 AM",
    },
  ];

  return (
    <div className="flex w-full max-h-screen">
      <div className="flex-1 ml-75 mt-0.2 ">
        <div className=" m-5 ">
          <div className=" mt-1 ml-4 mr-5 border-b border-gray-200 p-2">
            <div className="flex flex-row gap-20 text-sm font-bold ">
              <p className="hover:text-(--ruby)">Upcoming</p>
              <p className="hover:text-(--ruby)">Completed</p>
              <p className="hover:text-(--ruby)">Cancelled</p>
            </div>
          </div>
          <div className="p-1 pl-2 pr-4 ml-2 mt-1">
            <ul
              role="list"
              className="divide-y divide-white/5 flex flex-col gap-2 mt-3"
            >
              {people.map((person) => (
                <li className="flex justify-between gap-x-6 py-3 outline-1 outline-gray-200 shadow-sm rounded-lg p-4">
                  <div className="flex min-w-0 gap-x-3  ">
                    <div className="max-h-screen w-20 outline-1 outline-gray-200 shadow-sm rounded-md text-sm flex flex-col justify-center p-1.5 pl-6 gap-0.2 mr-3">
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
                    <div className="min-w-0 flex-auto">
                      <div className="flex flex-col gap-0.5">
                        <p className="text-md font-bold text-black">
                          {person.hospitalname}
                        </p>
                        <p className="flex gap-2 mt-1">
                          <img
                            src="https://img.icons8.com/?size=100&id=85049&format=png&color=1f2937"
                            alt="image"
                            className="h-5"
                          />
                          <span className="text-sm   font-bold text-gray-700">
                            {person.location}
                          </span>
                        </p>
                        <p className=" flex gap-2 mt-1 ">
                          <img
                            src={person.clock}
                            alt="image"
                            className="h-4.5 mt-0.5"
                          />
                          <span className="text-sm   mt-0.5 font-bold text-gray-700">
                            {person.time}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-row mt-6.5 gap-8">
                    <p className="bg-amber-50 h-8 pt-1 text-amber-400 font-bold rounded-lg shadow-sm pl-5.5 pr-6 mr-8 text-sm">
                      {person.UCC}
                    </p>
                    <p className="flex h-5 mt-2.5">
                      <img src={person.arrow} alt="image" className="h-4" />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-between mt-6 m-5 mr-10 p-2">
            <p className="text-sm font-semibold text-gray-500 mt-3">
              Need to cancel or reshedule?
            </p>
            <button className="outline-1 p-3 pt-2.5 pl-7 pr-7 rounded-lg outline-red-400 shadow-md text-sm  text-(--red) font-extrabold text-shadow-md">
              Manage Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
