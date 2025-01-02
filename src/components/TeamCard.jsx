function TeamCardBig({ src, position, name }) {
  return (
    <div className="tb:w-1/3 mx-auto border border-neutral-400 rounded-xl">
      <img
        src={src}
        className="w-full rounded-xl"
      />
      <div className="ms:p-1 tb:p-3 border-t">
        <p className="text-center ms:text-sm sm:text-base tb:text-lg text-neutral-500">
          {position}
        </p>
        <p className="text-center ms:text-sm sm:text-base tb:text-lg">{name}</p>
      </div>
    </div>
  )
}

function TeamCardSmall({ src, position, name }) {
  return (
    <div className="mx-auto border border-neutral-400 rounded-lg">
      <img
        src={src}
        className="w-full rounded-xl"
      />
      <div className="ms:p-1 tb:p-2 border-t">
        <p className="text-center ms:text-sm sm:text-md tb:text-md text-neutral-500">
          {position}
        </p>
        <p className="text-center ms:text-sm sm:text-md tb:text-md">{name}</p>
      </div>
    </div>
  )
}

export { TeamCardBig, TeamCardSmall }
