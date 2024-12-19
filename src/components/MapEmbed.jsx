function Map() {
  return (
    <div
      style={{
        textDecoration: "none",
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
        height: "40rem",
      }}
    >
      <div
        id="my-map-canvas"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%", border: "0" }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=BIT+MESRa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
