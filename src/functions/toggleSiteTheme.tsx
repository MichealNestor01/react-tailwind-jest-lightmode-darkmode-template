/**
 * function to toggle the sites theme
 *
 * @export
 * @param {?("light" | "dark")} [force]
 */
export function toggleSiteTheme(force?: "light" | "dark"): void {
  if (force) {
    // used to manually set theme
    const siteWrapper = document.getElementById("site-wrapper");
    siteWrapper?.classList.remove("light", "dark");
    siteWrapper?.classList.add(force);
  } else {
    // used to toggle theme
    const siteWrapper = document.getElementById("site-wrapper");
    if (siteWrapper?.classList.contains("light")) {
      siteWrapper?.classList.remove("light");
      siteWrapper?.classList.add("dark");
    } else {
      siteWrapper?.classList.remove("dark");
      siteWrapper?.classList.add("light");
    }
  }
}
