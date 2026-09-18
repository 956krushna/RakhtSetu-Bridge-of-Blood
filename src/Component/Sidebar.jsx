function Sidebar() {
  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-40 min-h-screen w-68 bg-(--whi)`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-center">
          <img
            src="https://img.icons8.com/?size=100&id=36172&format=png&color=b91c1c "
            alt="Image"
            className="h-12 mr-5"
          />

          <div className="flex flex-col mr-4  ">
            <h1 className="text-base font-bold text-(--red)  flex    ">
              <span className="text-(--Black)">Blood</span>Bank
            </h1>
            <p className="text-xs font-semibold text-gray-500 ">
              Save Life, Donate Blood
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-4">
          <a
            href="/"
            className="mb-1 flex items-center gap-5 rounded-lg  px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>Home</span>
          </a>

          <a
            href="/Findblood"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=8wqyf8LgdRx1&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>Find Blood</span>
          </a>

          <a
            href="/Donateblood"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=h_4lKPtgklKC&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>Donate Blood</span>
          </a>

          <a
            href="/Appointment"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=M49y0HnG1sig&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>My Appointment</span>
          </a>

          <a
            href="/Donations"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=Ic3U5Ry8E7ee&format=png&color=1f2937"
              alt="Image"
              className="h-5.5"
            />
            <span>My Donations</span>
          </a>

          <a
            href="/Faq"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=QbUVCJcLUR8w&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>FAQ</span>
          </a>

          <a
            href="/"
            className="mb-1 flex items-center gap-5 rounded-lg px-4 py-2.5 hover:bg-(--Lpink) text-(--Black)"
          >
            <img
              src="https://img.icons8.com/?size=100&id=yYVvZRRwNT5v&format=png&color=1f2937"
              alt="Image"
              className="h-5"
            />
            <span>Logout</span>
          </a>
        </nav>
        {/* Need Help Section */}
        <div className="flex mt-10 ml-10 bg-(--Lpink) rounded-lg  h-25 w-50 p-2">
          <div className="flex  justify-center items-center align-center">
            <img
              src="https://img.icons8.com/?size=100&id=dy6AVIUkS3M0&format=png&color=dc2826"
              alt="Image"
              className="h-9 ml-1 mb-8"
            />
            <div className="flex flex-col ml-3">
              <h1 className="text-(--Black) text-sm font-semibold flex ">
                <span>Need Help?</span>
              </h1>
              <p className="text-gray-500 text-xs font-medium ">
                We're here to help you.
              </p>
              <div className="flex gap-1 mt-2  justify-center items-center align-center ">
                <span className="text-(--red)  text-sm font-bold">
                  Contact Support
                </span>
                <img
                  src="https://img.icons8.com/?size=100&id=sbGJOQr7mZWy&format=png&color=dc2826"
                  alt="Image"
                  className="h-4  mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
