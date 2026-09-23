import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{
            height: "300px",
            objectFit: "cover",
          }}
          className="w-100"
          src="/image/Hawaiian.avif"
          alt="Hawaiian Pizza"
        />

        <Carousel.Caption>
          <h3>Hawaiian Pizza</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{
            height: "300px",
            objectFit: "cover",
          }}
          className="w-100"
          src="/image/images.jpg"
          alt="Pizza"
        />

        <Carousel.Caption>
          <h3>Pepperoni Pizza</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{
            height: "300px",
            objectFit: "cover",
          }}
          className="w-100"
          src="/image/Margherita.jpg"
          alt="Margherita Pizza"
        />

        <Carousel.Caption>
          <h3>Margherita Pizza</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
