import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import style from "../styles/Slider.module.css";
const data = [
  {
    image:
      "https://images.pexels.com/photos/33961/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/990349/pexels-photo-990349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Courusel() {
  const [current, setCurrent] = React.useState(0);
  const length = data.length;
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };


  React.useEffect(() => {
      const slide = setInterval(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 3000);
      return () => clearInterval(slide);
    }, [current]);
  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={style.right_arrow}
        onClick={nextSlide}
      />
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={index === current ? style.active : style.slide}
          >
            {index === current && (
              <img
                className={style.image}
                src={item.image}
                alt={`travel${index}`}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
