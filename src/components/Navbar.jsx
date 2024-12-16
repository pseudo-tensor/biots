import Button from "./Button";
import Dropdown, { DropdownItem } from "./Dropdown";

function Navbar() {
  return (
    <div
      className="sm:flex justify-between bg-neutral-800 text-neutral-50 font-sans 
                 lg:flex justify-between bg-neutral-800 text-neutral-50 font-sans"
    >
      <div
        className="sm:flex cursor-pointer
                   lg:flex cursor-pointer"
      >
        <img
          src="biot.png"
          className="sm:w-14 my-3.5 ml-10 
                    lg: w-14 my-3.5 ml-10"
        />
        <div
          className="sm:my-4 ml-5
                      lg:my-4 ml-5"
        >
          <div
            className="sm:font-bold
                        lg:font-bold"
          >
            BIOTS
          </div>
          <div
            className="sm:font-medium
                        lg:font-medium"
          >
            SOCIETY OF BIOTECHNOLOGISTS
          </div>
        </div>
      </div>
      <div
        className="sm:flex font-medium text-base cursor-pointer
                    lg:flex font-medium text-lg cursor-pointer"
      >
        <div className="sm:hidden lg:block p-5 my-2">Home</div>
        <div className="sm:hidden lg:block p-5 my-2">Events</div>
        <div className="sm:hidden lg:block p-5 my-2">About Us</div>
        <div className="sm:hidden lg:block p-5 my-2">Team</div>
        <div className="sm:hidden lg:block p-5 my-2">Contact Us</div>
        <div className="sm:hidden lg:block p-5 my-2">Gallery</div>
        <div className="lg:hidden">
          <nav className="flex items-start justify-end px-4 py-5">
            <Dropdown trigger={<Button>Menu</Button>}>
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
    </div>
  );
}

export default Navbar;
