"use client";
import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const MySplineComponent = () => {
  useEffect(() => {
    const loadSpline = async () => {
      const canvas: any = document.getElementById("canvas3d");
      const app = new Application(canvas);
      await app.load(
        "https://prod.spline.design/p80pILjaD74YL8Hp/scene.splinecode"
      );
    };

    loadSpline();
    return () => {};
  }, []);

  return (
    <canvas
      id="canvas3d"
      
    />
  );
};

export default MySplineComponent;
