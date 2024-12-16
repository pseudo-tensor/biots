function Footer() {
  return (
    <div className="fixed bottom-0 w-screen grid grid-cols-3 items-center justify-items-center bg-neutral-800 text-neutral-50 font-sans">
      <img src="biot.png" className="w-40 h-40 my-32 ml-40" />
      <div className="h-fit align-middle">
        <div className="text-neutral-400 text-lg">
          <p className="text-center">© 2024-2025 All Rights Reserved.</p>
          <br />
          <p className="text-center">BIOTS Family</p>
          <p className="text-center">biotsbitmesra@gmail.com</p>
        </div>
        <div className="flex justify-between">icons</div>
      </div>
    </div>
  );
}

export default Footer;
