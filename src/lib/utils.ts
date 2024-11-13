// Update this file with the new reusable timer function
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Theme = "light" | "dark";

export const toggleDarkMode = (): void => {
  const currentTheme = localStorage.getItem("theme") as Theme || "light";
  const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
};

export const applySavedTheme = (): void => {
  const savedTheme = localStorage.getItem("theme") as Theme || "light";
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
};

export const isDarkModeActive = (): boolean => {
  return localStorage.getItem("theme") === "dark";
};

// Reusable timer function
export const startReusableTimer = (
  duration: number,
  onTick: (timeLeft: number) => void,
  onComplete: () => void
): (() => void) => {
  let timeLeft = duration;

  const timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      onTick(timeLeft);
      
    } else {
      clearInterval(timerId);
      onComplete();
    }
  }, 1000);

  return () => clearInterval(timerId); // Return a cleanup function to clear the interval
};


