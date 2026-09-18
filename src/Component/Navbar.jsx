function Navbar() {
  return (
    <>
    <nav className=" h-14 bg-(--white) ">
      <div className="flex justify-end object-center gap-3 mr-8 p-4">
      {/* <div className="flex">
        <h1>
          Hello, <span>Rahul 👋</span>
        </h1>
        <p>
          Thank you for being a life saver.
        </p>
      </div> */}
      <div className="flex bg-(--white) rounded-md mr-13 max-h-10 max-w-60 p-1 outline-1 outline-(--Lpink) hover:bg-(--Lpink) justify-center justify-items-center">
        <img src="https://img.icons8.com/?size=100&id=15989&format=png&color=dc2826" alt="image" className="h-6 mt-1"/>
        <select name="Location" id="Location" className="outline-none">
          <option value="Delhi">Delhi, Mumbai</option>
        </select>
      </div>
      <div className="mr-4">
        <img src="https://img.icons8.com/?size=100&id=kGXPXvA8Atz6&format=png&color=1f2937" alt="Image" className="h-6 flex justify-self-center mt-2"/>
      </div>
      <div className="bg-(--Lpink) rounded-full h-10 w-10 mb-1 flex justify-center justify-items-center">
        <a href="/profile"><img src="/src/assets/boy.png" alt="imagr" className="object-fill "/>
</a>
      </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
