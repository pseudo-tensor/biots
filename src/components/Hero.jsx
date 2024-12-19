import Button from "./Button";

function Hero() {
  return (
    <div class="relative max-w-screen mx-auto ">
      <img
        class="h-[calc(100vh-5rem)] w-full object-cover "
        src="heroImage.jpg"
        alt="Random image"
      />
      <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-neutral-50 sm:text-5xl lg:text-7xl font-bold">
          EMERGE, INNOVATE, LEAD.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
