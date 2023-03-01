import React, { useContext, createContext } from "react";

const normalizeSrc = (src) => (src[0] === "/" ? src.slice(1) : src);

export function imgixLoader({ src, width, quality }) {
  const url = new URL("https://undecipheredclothing.imgix.net/" + normalizeSrc(src));
  const params = url.searchParams;
  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());
  if (quality) {
    params.set("q", quality.toString());
  }
  return url.href;
}

const ImgixContext = createContext();

/**
 * `useImgixContext()` tries to invoke `React.useContext()`. If no context
 * is available, this function returns `undefined`.
 * @returns The context defined by the closest parent `ImgixProvider`.
 */
function useImgixContext() {
  return useContext(ImgixContext);
}

/**
 * Creates a Provider component that passes `imageProps` as the Context
 * for child components who use the `useImgixContext()` custom hook or
 * `React.useContext()` API.
 * @param {React.Element <typeof Component>} children
 * @param {Object} imageProps
 * @returns React.Element
 */
function ImgixProvider({ children }) {
  const value = imgixLoader;

  if (children == null || children.length < 1) {
    console.error("ImgixProvider must have at least one Imgix child component");
  }
  return (
    <ImgixContext.Provider value={value}>{children}</ImgixContext.Provider>
  );
}

export { ImgixProvider, useImgixContext };
