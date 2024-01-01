import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCast = ({ cast }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Adicione breakpoints conforme necessário
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cast.map((actor) => (
        <div key={actor.id} className="carousel-item">
          <div className="agroupCast" style={{width: "90%", border: "15px solid azure", backgroundColor: "azure"}}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
              alt={actor.name} 
              style={{width: "100%"}}
            /> 
            <div className="person" style={{marginTop: "1em", backgroundColor: "azure"}}>
              <p style={{color: "black",marginTop: "1em", backgroundColor: "azure", fontWeight: "bold"}}>{actor.name}</p>
              <p style={{color: "#1e1e1e", marginTop: "0.2em", backgroundColor: "azure"}}>{actor.character}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselCast;
