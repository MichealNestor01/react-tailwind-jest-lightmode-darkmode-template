import { toggleSiteTheme } from "./toggleSiteTheme";

describe("toggleSiteTheme", () => {
  // Helper function to set up the DOM environment for each test
  const setupDOM = (initialClass?: string) => {
    document.body.innerHTML = `<div id="site-wrapper" class="${initialClass}"></div>`;
    return document.getElementById("site-wrapper")!;
  };

  it('should correctly force theme to "light"', () => {
    const siteWrapper = setupDOM("dark");
    toggleSiteTheme("light");
    expect(siteWrapper.classList.contains("light")).toBe(true);
    expect(siteWrapper.classList.contains("dark")).toBe(false);
  });

  it('should correctly force theme to "dark"', () => {
    const siteWrapper = setupDOM("light");
    toggleSiteTheme("dark");
    expect(siteWrapper.classList.contains("dark")).toBe(true);
    expect(siteWrapper.classList.contains("light")).toBe(false);
  });

  it("should toggle theme from light to dark when no force parameter is provided", () => {
    const siteWrapper = setupDOM("light");
    toggleSiteTheme();
    expect(siteWrapper.classList.contains("dark")).toBe(true);
    expect(siteWrapper.classList.contains("light")).toBe(false);
  });

  it("should toggle theme from dark to light when no force parameter is provided", () => {
    const siteWrapper = setupDOM("dark");
    toggleSiteTheme();
    expect(siteWrapper.classList.contains("light")).toBe(true);
    expect(siteWrapper.classList.contains("dark")).toBe(false);
  });

  it("should handle no initial theme by defaulting to light", () => {
    const siteWrapper = setupDOM();
    toggleSiteTheme();
    expect(siteWrapper.classList.contains("light")).toBe(true);
  });

  it("should do nothing when the site-wrapper element does not exist", () => {
    document.body.innerHTML = ""; // Clear the DOM
    const toggleAction = () => toggleSiteTheme("light");
    expect(toggleAction).not.toThrow();
  });
});
