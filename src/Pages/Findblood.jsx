
function Findblood() {
  const people = [
    {
      name: "Leslie Alexander",
      callButton:
        "https://img.icons8.com/?size=100&id=aZCrpVxHTVqn&format=png&color=1f2937",
      Availability: "Available",
      image:
        "https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=b91c1c",
      kiloMeters: "2.3 km away",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      phone:
        "https://img.icons8.com/?size=100&id=FWYMZlD4gLUg&format=png&color=b91c1c",
    },
    {
      name: "Leslie Alexander",
      callButton:
        "https://img.icons8.com/?size=100&id=aZCrpVxHTVqn&format=png&color=1f2937",
      Availability: "Available",
      image:
        "https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=b91c1c",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      phone:
        "https://img.icons8.com/?size=100&id=FWYMZlD4gLUg&format=png&color=b91c1c",
    },
    {
      name: "Leslie Alexander",
      callButton:
        "https://img.icons8.com/?size=100&id=aZCrpVxHTVqn&format=png&color=1f2937",
      Availability: "Available",
      image:
        "https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=b91c1c",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      phone:
        "https://img.icons8.com/?size=100&id=FWYMZlD4gLUg&format=png&color=b91c1c",
    },
  ];

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 ml-75 mt-0.2 ">
        <div className="m-8 bg-(--Lpink) max-h-screen rounded-2xl">
          <div className="flex  justify-between items-center p-6">
            <div className="flex flex-row gap-4">
              <img
                src="https://img.icons8.com/?size=100&id=2PkSFuz2VSqJ&format=png&color=b91c1c"
                alt="findBlood"
                className="h-11 p-2 rounded-full bg-(--White) mt-1.5"
              />
              <p className="mt-0.9 text-gray-500 font-medium text-sm ">
                <span className=" text-(--ruby) font-bold text-lg">
                  Need blood urgently?
                </span>
                <br />
                Request blood and we'll notify nearby donors.
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button className="bg-(--red) text-md font-semibold text-(--White) rounded-md p-2 max-w-svw max-h-svh flex gap-2">
                <span className="flex gap-3">Request Blood</span>
                <img
                  src="https://img.icons8.com/?size=100&id=sbGJOQr7mZWy&format=png&color=FFFFFF"
                  alt="Image"
                  className="h-5 w-4 mt-1 mr-1"
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" m-8 ">
          <div className=" font-bold text-lg ml-2 ">
            <h2>Search by Blood Group</h2>
          </div>
          <div className="flex flex-row justify-between pl-4 p-2">
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red) ">
              A+
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              A-
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              B+
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              B-
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              AB+
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              AB-
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              O+
            </div>
            <div className="h-13 w-15 outline-1 outline-gray-100 rounded-full flex justify-center pt-3 pl-1 shadow-sm font-bold text-md hover:bg-(--red)">
              O-
            </div>
          </div>
          <div className="ml-2 pt-2 flex flex-row  justify-around">
            <button className="flex gap-2.5 justify-center p-2 outline-1 outline-gray-100 shadow-md rounded-sm ">
              <img
                src="https://img.icons8.com/?size=100&id=k2Z9mQic4Efh&format=png&color=1f2937"
                alt="filter"
                className="h-5 mt-1 "
              />
              <span className="text-sm pt-0.5 font-semibold">Filters</span>
            </button>
            <div className="flex gap-2 outline-1 rounded-sm p-2 outline-gray-100 shadow-md font-semibold  text-sm ">
              <img
                src="https://img.icons8.com/?size=100&id=55UPFjefdpBN&format=png&color=1f2937"
                alt="image"
                className="h-5 w-5 mt-0.5"
              />

              <select
                name="location"
                id="location"
                className="outline-none pr-38"
              >
                <option value="Within 10 km">Within 10 km</option>
              </select>
            </div>
            <div className="flex gap-2 outline-1 rounded-sm p-2 outline-gray-100 shadow-md font-semibold  text-sm">
              <img
                src="https://img.icons8.com/?size=100&id=M49y0HnG1sig&format=png&color=1f2937"
                alt="image"
                className="h-5 w-5 mt-0.5"
              />

              <select
                name="location"
                id="location"
                className="outline-none pr-40"
              >
                <option value="Within 10 km">
                  Availability: Available Now
                </option>
              </select>
            </div>
          </div>
          <div className="p-1 pl-2 pr-4 ml-2 mt-3">
            <h1 className="m-2 text-lg font-semibold">
              Available Donors{" "}
              <span className="text-(--red) font-semibold">(O+)</span>
            </h1>
            <ul
              role="list"
              className="divide-y divide-white/5 flex flex-col gap-2 mt-3"
            >
              {people.map((person) => (
                <li
                  key={person.email}
                  className="flex justify-between gap-x-6 py-5 outline-1 outline-gray-100 shadow-md rounded-lg p-4"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                    />
                    <div className="min-w-0 flex-auto  gap-2">
                      <div className="flex gap-5 ">
                        <p className="text-sm/6 font-semibold text-black">
                          {person.name}
                        </p>
                        <p className="text-green-800 p-1 pl-2 pr-2 bg-green-100 text-xs font-medium rounded-xl">
                          {person.Availability}
                        </p>
                      </div>
                      <ol className="flex">
                        <li className="flex flex-row  mt-1.5">
                          <p className="flex gap-1 mt-1">
                            <img
                              src="https://img.icons8.com/?size=100&id=85049&format=png&color=1f2937"
                              alt="image"
                              className="h-5"
                            />
                            <span className="text-xs mt-0.5  font-semibold text-gray-500">
                              {person.kiloMeters}
                            </span>
                          </p>
                          <img
                            src={person.image}
                            alt="image"
                            className="h-5 ml-4 mt-1"
                          />
                          <span className="text-sm mt-1 text-gray-500 font-semibold">
                            O+
                          </span>
                          <p className=" truncate text-xs/5 text-gray-400 ml-4 mt-1 font-semibold">
                            {person.lastSeen}
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className=" flex flex-row mt-1">
                    <img
                      src={person.callButton}
                      alt="image"
                      className="h-10 mr-8 outline-1 outline-gray-100  shadow-sm p-2 rounded-lg mt-1.5 "
                    />
                    <p className="flex  outline-1 outline-red-200 p-2 gap-2 shadow-md rounded-lg">
                      <img
                        src={person.phone}
                        alt="image"
                        className="h-6 mt-0.5 ml-3"
                      />
                      <span className="text-md font-bold mr-5 text-(--ruby)">
                        Call
                      </span>
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

export default Findblood;
