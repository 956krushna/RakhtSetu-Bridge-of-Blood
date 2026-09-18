
function Donateblood() {
  return (
    <>
    <div className="flex w-full max-h-screen">
        <div className="flex-1 ml-75">
          <div className="m-4 mr-12 bg-(--white) max-h-screen rounded-2xl outline-1 outline-gray-100 shadow-sm">
            <div className="flex  justify-between items-center p-3 pl-9 pr-3">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">
                    Check Eligibility
                </h1>
                <ul className="flex flex-col gap-1">
                    <li className="flex text-sm font-semibold text-gray-500">
                        <img src="https://img.icons8.com/?size=100&id=uAGfRpkJmAGW&format=png&color=40C057" alt="Image" className="h-5 mr-2 mt-0.5"/>
                        Age between 18-65 years
                    </li>
                    <li className="flex text-sm font-semibold text-gray-500">
                        <img src="https://img.icons8.com/?size=100&id=uAGfRpkJmAGW&format=png&color=40C057" alt="Image" className="h-5 mr-2 mt-0.5"/>
                        Weight more than 50 kg
                    </li>
                    <li className="flex text-sm font-semibold text-gray-500">
                        <img src="https://img.icons8.com/?size=100&id=uAGfRpkJmAGW&format=png&color=40C057" alt="Image" className="h-5 mr-2 mt-0.5"/>
                        Hemoglobin level normal
                    </li>
                    <li className="flex text-sm font-semibold text-gray-500">
                        <img src="https://img.icons8.com/?size=100&id=uAGfRpkJmAGW&format=png&color=40C057" alt="Image" className="h-5 mr-2 mt-0.5"/>
                        Not donated in last 3 months
                    </li>
                </ul>
                
                <div className="flex gap-5 justify-center justify-items-center">
                  <button className="bg-(--white) text-md font-sm text-(--red) rounded-md p-2 w-55 max-h-svh flex gap-0.5 outline-1 shadow-md">
                    
                    <span className="ml-15.5 text-sm font-bold">Check Again</span>
                  </button>
                  
                </div>
              </div>
              <div className="flex">
                <img
                  src="/src/assets/Donateblood.png"
                  alt="Saline"
                  className="h-58 w-68 mr-25"
                />
              </div>
            </div>
          </div>
          {/* How it works */}
          <div className=" m-4 mr-12">
            <div className="font-bold text-lg ml-5">
              <h2>How it works</h2>
            </div>
            <div className=" flex flex-row justify-around p-1 ml-5 mr-5">
              <div className="flex flex-col outline-1 outline-gray-200 h-35 w-35 pt-2 rounded-lg shadow-sm">
                <img
                  src="https://img.icons8.com/?size=100&id=12KKQpzXxFis&format=png&color=b91c1c"
                  alt="Register"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-15.5 text-md font-bold">1</p>
                <span className="text-sm font-semibold p-1 text-gray-500 ml-8">Register &<br/> Fill Details</span>
              </div>
              <div className="flex mt-11">
                <img src="https://img.icons8.com/?size=100&id=bJKrzgR6iAgp&format=png&color=EBEBEB" alt="image" className="h-8 w-9"/>
              </div>
              <div className="flex flex-col outline-1 outline-gray-200 h-35 w-35 pt-2 rounded-lg shadow-sm">
                <img
                  src="https://img.icons8.com/?size=100&id=35583&format=png&color=b91c1c"
                  alt="Check up "
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-15.5 text-md font-bold">1</p>
                <span className="text-sm font-semibold p-1 text-gray-500 ml-11">Health</span>
                <span className="text-sm font-semibold  text-gray-500 ml-10">Check-up</span>
              </div>
              <div className="flex mt-11">
                <img src="https://img.icons8.com/?size=100&id=bJKrzgR6iAgp&format=png&color=EBEBEB" alt="image" className="h-8 w-9"/>
              </div>
              <div className="flex flex-col outline-1 outline-gray-200 h-35 w-35 pt-2 rounded-lg shadow-sm">
                <img
                  src="https://img.icons8.com/?size=100&id=K5ept1r6k9OD&format=png&color=b91c1c"
                  alt="Donate Blood"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 "
                />
                <p className="ml-15.5 text-md font-bold">1</p>
                <span className="text-sm font-semibold p-1 text-gray-500 ml-11">Donate</span>
                <span className="text-sm font-semibold  text-gray-500 ml-13">Blood</span>
              </div>
              <div className="flex mt-11">
                <img src="https://img.icons8.com/?size=100&id=bJKrzgR6iAgp&format=png&color=EBEBEB" alt="image" className="h-8 w-9"/>
              </div>
              <div className="flex flex-col outline-1 outline-gray-200 h-35 w-35 pt-2 rounded-lg shadow-sm">
                <img
                  src="https://img.icons8.com/?size=100&id=IE7sPRCpVPEq&format=png&color=b91c1c"
                  alt="Find Blood"
                  className="  flex h-10 w-10 ml-12 bg-(--Lpink) rounded-xl p-1.5 ]"
                />
                <p className="ml-15.5 text-md font-bold">1</p>
                <span className="text-sm font-semibold p-1 text-gray-500 ml-12">Save <br/> Lives</span>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="h-10 ml-9 mr-13  flex justify-center max-w-screen bg-(--ruby) rounded-md">
            <button className="ml-5 text-sm font-bold text-(--White)">
                Book Appointments
            </button>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Donateblood
