import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const ring = document.querySelector(".cursor-ring") as HTMLElement;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    // Delegation hover
    const addHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-hover-target")) {
        document.body.classList.add("cursor-hover");
      }
    };

    const removeHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-hover-target")) {
        document.body.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("pointerenter", addHover, true);
    document.addEventListener("pointerleave", removeHover, true);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("pointerenter", addHover, true);
      document.removeEventListener("pointerleave", removeHover, true);
    };
  }, []);

  return (
    <>
      <Outlet />

      {/* Glow Cursor */}
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
};

export default Mouse;
