"use client";
import Image from "next/image";
import styles from "./style.module.css";
import starIcon from "@/assets/star.svg";

export default function SliderAnimation() {
  const texts = [
    "Full Stack",
    "Front End",
    "Back End",
    "Full Stack",
    "Front End",
    "Back End",
    "Full Stack",
    "Front End",
    "Back End",
    "Full Stack",
    "Front End",
    "Back End",
  ];

  return (
    <>
      <div
        className={`${styles.textContainer} h-16 w-screen flex items-center bg-white gap-8`}
      >
        <div className={`${styles.text} text-3xl`}>
          <div className="inline-flex gap-8">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <Image
                  src={starIcon}
                  alt="star"
                  width={40}
                  height={40}
                  className=""
                />
              </>
            ))}
          </div>
          <div className="inline-flex gap-8">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <Image
                  src={starIcon}
                  alt="star"
                  width={40}
                  height={40}
                  className=""
                />
              </>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${styles.textContainerTwo} h-16 w-screen flex items-center bg-white gap-8`}
      >
        <div className={`${styles.textTwo} text-3xl`}>
          <div className="inline-flex gap-8">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <Image src={starIcon} alt="star" width={40} height={40} />
              </>
            ))}
          </div>
          <div className="inline-flex gap-8">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <Image src={starIcon} alt="star" width={40} height={40} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
