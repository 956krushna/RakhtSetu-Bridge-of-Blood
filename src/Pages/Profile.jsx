function Profile() {
  return (
    <div className="flex w-full max-h-screen">
      <div className="flex-1 ml-75 mt-0.2 ">
        <div className=" m-5 ">
          <div className="m-2 bg-(--Lpink) max-h-screen rounded-2xl">
            <div className="flex  justify-between items-center p-3">
              <div className="flex flex-row gap-5">
                <img
                  src="/src/assets/boy.png"
                  alt="findBlood"
                  className="relative h-20 object-fill ml-2 mt-4.5 rounded-full bg-(--Lpink) shadow-xl outline-1 outline-red-100"
                />
                <img src="https://img.icons8.com/?size=100&id=o93w6kP6r2PN&format=png&color=1f2937" alt="Image" className="absolute h-6  bottom-98 left-101 bg-white rounded-full p-1"/>
                <div className="flex flex-col gap-0.5 ml-1">
                    <h2 className="text-lg font-bold">Rahul Sharma</h2>
                    <p className="flex text-sm gap-1"><img src="https://img.icons8.com/?size=100&id=YcFQMeKu1G1B&format=png&color=1f2937" alt="Image" className="h-5 mt-0.5"/> rahulsharma@gmail.com</p>
                    <p className="flex text-sm gap-1"><img src="https://img.icons8.com/?size=100&id=5pexQtHfizSf&format=png&color=1f2937" alt="Image" className="h-4.5 mt-0.5"/>+91 8557462542</p>
                    <p className="flex text-sm gap-1"><img src="https://img.icons8.com/?size=100&id=42411&format=png&color=b91c1c" alt="Image" className="h-4.5 mt-0.5"/>Blood Group: <span className="text-(--red) font-bold">O+</span></p>
                    <p className="flex text-sm gap-1 outline-1 p-1 pl-2 pr-2 pt-0.5 mr-24 mt-0.5 outline-red-400 rounded-2xl shadow-md bg-pink-100"><img src="https://img.icons8.com/?size=100&id=vurh7-um5eMM&format=png&color=b91c1c" alt="Image" className="h-4 mt-0.5"/><span className="font-bold text-(--red)">Donor</span></p>
                 </div>
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src="/src/assets/DonateSaved.png"
                  alt="Image"
                  className="h-35 w-90  mr-16"
                />
              </div>
              
            </div>
          </div>
              <div className="outline-1 outline-gray-300 rounded-lg shadow-md p-5 ml-5 mr-5 mt-4">
                <p className="flex text-lg font-bold"><img src="https://img.icons8.com/?size=100&id=U40u7TexAdgU&format=png&color=1f2937" alt="Image" className="h-6 mr-4 mt-0.5"/>Personal Information</p>
                <div className="p-3 pl-2 ml-1 mr-2">
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Full Name <p className="text-(--Black) font-semibold ">Rahul Sharma</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Email Address <p className="text-(--Black) font-semibold ">rahulsharma@gmail.com</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Phone No. <p className="text-(--Black) font-semibold ">+91 8557462542</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Gender <p className="text-(--Black) font-semibold">Male</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Date of Birth <p className="text-(--Black) font-semibold ">15 may 2026</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Blood Group <p className="text-(--Black) font-semibold">O+</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                        <li className="flex justify-between text-gray-500 text-md font-medium border-b border-b-gray-200">Address <p className="text-(--Black) font-semibold ">Gujarmal, Shirur, Pune-421 303</p> <img src="https://img.icons8.com/?size=100&id=e1XZ25Bcs3PM&format=png&color=1f2937" alt="Image" className="h-5"/></li>
                    </ul>
                </div>
             
            </div>

          </div>
        </div>
      </div>
  );
}

export default Profile;
