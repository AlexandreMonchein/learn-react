import { useEffect } from "react";

export const usePixabayPictures = () => {
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const search = "yellow+flower";
        const key = "44711405-94b9c2c9f56de5cb4de16a909";
        const response = await fetch(
          `https://pixabay.com/api/?key=${key}&q=${search}&per_page=10&image_type=photo`,
          {
            method: "GET",
            mode: 'no-cors',
            headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin" :"*"
            },
          }
        );
        console.warn(">>> response", response);
        const data = await response.json();
        console.warn(">>> data", data);
      } catch (err) {
        console.warn(">>> error", err);
      }
    };

    fetchPhotos();
  }, []);
};
