function Footer() {
  return (
    <div className="min-w-max sm:pt-20 lg:grid lg:grid-cols-3 items-center justify-items-center bg-neutral-800 text-neutral-50 font-sans">
      <img src="biot.png" className="w-40 h-40 sm:mb-20 lg:my-32 lg:ml-40" />
      <div className="h-fit align-middle">
        <div className="text-neutral-400 text-lg">
          <p className="text-center">© 2024-2025 All Rights Reserved.</p>
          <br />
          <p className="text-center">BIOTS Family</p>
          <p className="text-center">biotsbitmesra@gmail.com</p>
        </div>
        <div className="flex justify-between py-4">
          <svg
            class="h-8 w-8 text-neutral-400 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <svg
            class="h-8 w-8 text-gray-400 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <svg
            class="h-8 w-8 text-gray-400 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
            <rect x="2" y="9" width="4" height="12" />{" "}
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
