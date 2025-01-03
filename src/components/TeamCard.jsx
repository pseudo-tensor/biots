function TeamCardBig({ src, position, name }) {
  return (
    <div className="tb:w-1/3 border border-neutral-400 rounded-lg">
      <div className="flex flex-col ms:h-[10rem] ml:h-[14rem] sm:h-[16rem] tb:h-[24rem] lg:h-[26rem] xl:h-[28rem] dxl:h-[32rem] txl:h-[36rem] overflow-hidden">
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt={name}
          />
        </div>
      </div>
      <div className="p-2 border-t rounded-lg">
        <p className="text-center text-sm sm:text-md lg:text-lg text-neutral-500">
          {position}
        </p>
        <p className="text-center text-sm sm:text-md lg:text-lg">{name}</p>
      </div>
    </div>
  )
}

function TeamCardSmall({ src, position, name }) {
  return (
    <div className="border border-neutral-400 rounded-lg">
      <div className="flex flex-col ms:h-[10rem] ml:h-[14rem] sm:h-[16rem] tb:h-[18rem] lg:h-[20rem] xl:h-[24rem] dxl:h-[28rem] txl:h-[32rem] overflow-hidden">
        {/* Image Section */}
        <div className="flex-grow relative">
          <img
            src={src}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt={name}
          />
        </div>
      </div>
      <div className="p-2 border-t rounded-lg">
        <p className="text-center text-sm sm:text-md lg:text-lg text-neutral-500">
          {position}
        </p>
        <p className="text-center text-sm sm:text-md lg:text-lg">{name}</p>
      </div>
    </div>
  )
}

export { TeamCardBig, TeamCardSmall }
