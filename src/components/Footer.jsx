function Footer() {
  return (
    <div className="min-w-max ms:pt-10 tb:pt-20 lg:pt-10 lg:grid lg:grid-cols-3 items-center justify-items-center bg-neutral-800 text-neutral-50 font-sans">
      <img
        src="biot.png"
        className="ms:w-28 ms:h-28 tb:w-40 tb:h-40 ms:mb-10 tb:mb-16 lg:my-32 lg:ml-40"
      />
      <div className="h-fit align-middle lg:pt-4">
        <div className="text-neutral-400 ms:text-sm tb:text-lg">
          <p className="text-center">© 2024-2025 All Rights Reserved.</p>
          <br />
          <p className="text-center">BIOTS Family</p>
          <p className="text-center">biotsbitmesra@gmail.com</p>
        </div>
        <div className="flex justify-between ms:py-10">
          <a
            href="https://www.facebook.com/depbiots/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              class="ms:h-6 ms:w-6 tb:h-8 tb:w-8 text-neutral-400 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/biotsbitmesra/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              class="ms:h-6 ms:w-6 tb:h-8 tb:w-8 text-gray-400 cursor-pointer"
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
          </a>
          <a
            href="https://www.linkedin.com/company/biots-bitmesra/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              class="ms:h-6 ms:w-6 tb:h-8 tb:w-8  text-gray-400 cursor-pointer"
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
          </a>
        </div>
      </div>
      <div className="text-lg text-neutral-400">--------</div>
    </div>
  );
}

export default Footer;
