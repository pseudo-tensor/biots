import Button from "./Button";
import Dropdown, { DropdownItem } from "./Dropdown";

function Navbar() {
  return (
    <header className="top-0 ms:h-16 tb:h-20 flex justify-between bg-neutral-800 text-neutral-50 font-sans">
      <div className="ms:flex cursor-pointer">
        <img
          src="biot.png"
          className="ms:w-10 ms:my-3 ms:ml-4 tb:w-14 tb:my-3.5 tb:ml-10 "
        />
        <div className="ms:ml-3 tb:ml-5 my-auto">
          <div className="ms:font-bold ms:text-md tb:font-bold tb:text-xl">
            BIOTS
          </div>
          <div className="ms:text-xs tb:text-base font-medium">
            SOCIETY OF BIOTECHNOLOGISTS
          </div>
        </div>
      </div>
      <div className="flex font-medium text-lg cursor-pointer">
        <div className="ms:hidden lg:block p-5 my-2">Home</div>
        <div className="ms:hidden lg:block p-5 my-2">Events</div>
        <div className="ms:hidden lg:block p-5 my-2">About Us</div>
        <div className="ms:hidden lg:block p-5 my-2">Team</div>
        <div className="ms:hidden lg:block p-5 my-2">Contact Us</div>
        <div className="ms:hidden lg:block p-5 my-2">Gallery</div>
        <div className="ms:block lg:hidden">
          <nav className="flex items-start justify-end ms:py-2 tb:px-5 tb:py-5">
            <Dropdown
              trigger={
                <Button>
                  <svg
                    class="h-8 w-8 text-gray-100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <line x1="3" y1="12" x2="21" y2="12" />{" "}
                    <line x1="3" y1="6" x2="21" y2="6" />{" "}
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              }
            >
              <DropdownItem>Home</DropdownItem>
              <DropdownItem>Events</DropdownItem>
              <DropdownItem>About Us</DropdownItem>
              <DropdownItem>Team</DropdownItem>
              <DropdownItem>Contact Us</DropdownItem>
              <DropdownItem>Gallery</DropdownItem>
            </Dropdown>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
