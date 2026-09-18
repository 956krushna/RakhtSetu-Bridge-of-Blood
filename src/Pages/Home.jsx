
function Home() {
  return (
    <>
      <div className="flex w-full min-h-screen">
        
        <div className="flex-1 ml-75 mt-0.2 ">
          <div className="m-8 bg-(--Lpink) max-h-screen rounded-2xl">
            <div className="flex  justify-between items-center p-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold">
                  Every Drop <br /> Counts.&nbsp;
                  <span className="text-(--red) font-bold">
                    Save a Life.
                  </span>
                </h1>
                <p className="text-gray-500 text-lg">
                  Your small act of kindness can <br /> bring hope to someone in
                  need.
                </p>
                <div className="flex gap-5">
                  <button className="bg-(--red) text-md font-sm text-(--White) rounded-md p-2 max-w-svw max-h-svh flex gap-0.5">
                    <img
                      src="https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=FFFFFF"
                      alt="Image"
                      className="h-4.5 mt-1 mr-1"
                    />
                    <span className="flex gap-3">Donate Blood</span>
                  </button>
                  <button className="bg-(--White) font-sm text-md outline-1 outline-gray-300 rounded-md p-2 max-w-svw max-h-svh flex gap-1">
                    <img
                      src="https://img.icons8.com/?size=100&id=elSdeHsB03U3&format=png&color=1f2937"
                      alt="Image"
                      className="h-5 mt-0.5"
                    />
                    <span className="">Find Blood</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/src/assets/Saline.jpg"
                  alt="Saline"
                  className="h-60 w-90 mr-18"
                />
              </div>
            </div>
          </div>
          {/* Quick Actions */}
          <div className=" m-8 p-1  pb-3 outline-1 outline-gray-100 rounded-lg shadow-md">
            <div className="p-1 font-bold text-lg ml-2">
              <h2>Quick Action</h2>
            </div>
            <div className=" flex flex-row justify-between p-2 ml-2 mr-2 mb-1">
              <div className="flex flex-col outline-1 outline-gray-100 h-20 w-40 p-2 pb-1 rounded-lg gap-1 shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=elSdeHsB03U3&format=png&color=b91c1c"
                  alt="Find Blood"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-8 text-sm font-semibold">Find Blood</p>
              </div>
              <div className="flex flex-col outline-1 outline-gray-100 h-20 w-40 p-2 pb-1 rounded-lg gap-1 shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=b91c1c"
                  alt="Donate Blood"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-6.5 text-sm font-semibold">Donate Blood</p>
              </div>
              <div className="flex flex-col outline-1 outline-gray-100 h-20 w-40 p-2 pb-1 rounded-lg gap-1 shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=M49y0HnG1sig&format=png&color=b91c1c"
                  alt="Appointment"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-7 text-sm font-semibold">Appointment</p>
              </div>
              <div className="flex flex-col outline-1 outline-gray-100 h-20 w-40 p-2 pb-1 rounded-lg gap-1 shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=Ic3U5Ry8E7ee&format=png&color=b91c1c"
                  alt="My Donations"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-6 text-sm font-semibold">My Donations</p>
              </div>
            </div>
          </div>

          {/* Your Impact */}
          <div className=" m-8 p-1  pb-3 outline-1 outline-gray-100 rounded-lg shadow-md">
            <div className="p-1 font-bold text-lg ml-2">
              <h2>Your Impact</h2>
            </div>
            <div className="flex flex-row justify-between p-2 ml-2 mr-2 mb-1">
              <div className="flex flex-row justify-center outline-1 outline-gray-100 h-20 w-40 p-2 rounded-lg shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=Dd9u4dz8Ev3A&format=png&color=b91c1c"
                  alt="Donations"
                  className="  mt-3 flex h-10 w-10 bg-(--Lpink) rounded-full p-1.5 "
                />
                <div className="flex flex-col ml-3 gap-0.2">
                  <span className="text-2xl font-bold text-(--ruby) mt-2">
                    3
                  </span>
                  <p className=" text-sm font-semibold text-gray-500">
                    Donations
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center outline-1 outline-gray-100 h-20 w-40 p-2 rounded-lg shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=11220&format=png&color=b91c1c"
                  alt="Lives Saved"
                  className="  mt-3 flex h-10 w-10 bg-(--Lpink) rounded-full p-1.5 "
                />
                <div className="flex flex-col ml-3 gap-0.2">
                  <span className="text-2xl font-bold text-(--ruby) mt-2">
                    9
                  </span>
                  <p className=" text-sm font-semibold text-gray-500">
                    Lives Saved
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center outline-1 outline-gray-100 h-20 w-40 p-2 rounded-lg shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=qSIwo9enkj9W&format=png&color=b91c1c"
                  alt="Blood Group"
                  className="  mt-3 flex h-10 w-10 bg-(--Lpink) rounded-full p-1.5 "
                />
                <div className="flex flex-col ml-3 gap-0.2">
                  <span className="text-2xl font-bold text-(--ruby) mt-2">
                    O+
                  </span>
                  <p className=" text-sm font-semibold text-gray-500">
                    Blood Group
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center outline-1 outline-gray-100 h-20 w-40 p-2 rounded-lg shadow-lg">
                <img
                  src="https://img.icons8.com/?size=100&id=M49y0HnG1sig&format=png&color=b91c1c"
                  alt="Member since"
                  className="  mt-3 flex h-10 w-10 bg-(--Lpink) rounded-full p-1.5 "
                />
                <div className="flex flex-col ml-3 gap-0.2">
                  <span className="text-2xl font-bold text-(--ruby) mt-2">
                    2026
                  </span>
                  <p className=" text-sm font-semibold text-gray-500">
                    Member Since
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
