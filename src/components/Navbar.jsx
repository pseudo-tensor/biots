import Button from "./Button";
import Dropdown, { DropdownItem } from "./Dropdown";

function Navbar() {
  return (
    <div className="top-0 h-20 flex justify-between bg-neutral-800 text-neutral-50 font-sans">
      <div
        className="sm:flex cursor-pointer
                   lg:flex cursor-pointer"
      >
        <img src="biot.png" className="w-14 my-3.5 ml-10 " />
        <div className="ml-5 my-auto">
          <div className="sm:font-bold text-xl">BIOTS</div>
          <div className="sm:font-medium">SOCIETY OF BIOTECHNOLOGISTS</div>
        </div>
      </div>
      <div className="flex font-medium text-lg cursor-pointer">
        <div className="sm:hidden lg:block p-5 my-2">Home</div>
        <div className="sm:hidden lg:block p-5 my-2">Events</div>
        <div className="sm:hidden lg:block p-5 my-2">About Us</div>
        <div className="sm:hidden lg:block p-5 my-2">Team</div>
        <div className="sm:hidden lg:block p-5 my-2">Contact Us</div>
        <div className="sm:hidden lg:block p-5 my-2">Gallery</div>
        <div className="lg:hidden">
          <nav className="flex items-start justify-end px-5 py-5">
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
