"use client";
import styles from "./style.module.css";
import { CodeXml } from "lucide-react";

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
        className={`${styles.textContainer} h-16 w-screen flex items-center bg-white rotate-6 md:rotate-3 z-50`}
      >
        <div className={`${styles.text} text-3xl`}>
          <div className="flex items-center">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <CodeXml
                  width={50}
                  height={40}
                  stroke="#FF8A56"
                  className="mx-5"
                />
              </>
            ))}
          </div>
          <div className="flex items-center">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <CodeXml
                  width={50}
                  height={40}
                  stroke="#FF8A56"
                  className="mx-5"
                />
              </>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${styles.textContainerTwo} h-16 w-screen flex items-center bg-white -rotate-6 md:-rotate-3 z-50`}
      >
        <div className={`${styles.textTwo} text-3xl`}>
          <div className="flex items-center">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <CodeXml
                  width={50}
                  height={40}
                  stroke="#FF8A56"
                  className="mx-5"
                />
              </>
            ))}
          </div>
          <div className="flex items-center">
            {texts.map((text, index) => (
              <>
                <span
                  key={index}
                  className="text-3xl h-40 flex items-center font-black"
                >
                  {text}
                </span>
                <CodeXml
                  width={50}
                  height={40}
                  stroke="#FF8A56"
                  className="mx-5"
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
