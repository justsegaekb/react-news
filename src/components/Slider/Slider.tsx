import { useRef, cloneElement, ReactElement } from "react";
import styles from "./styles.module.css";
import { INews } from "../../interfaces";

interface Props {
  children: ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
