import { toggleSiteTheme } from "../functions/toggleSiteTheme";

export default function Landing() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-primary-colour">
        Micheal Nestor - light mode dark mode template
      </h1>
      <button className="text-primary-colour" onClick={() => toggleSiteTheme()}>
        Change Theme
      </button>
    </div>
  );
}
