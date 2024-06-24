import { render, RenderResult, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

interface RenderWithRouterOptions {
  route?: string;
}

// Helper function to render components within the context of a BrowserRouter
function renderWithRouter(
  ui: React.ReactElement,
  { route = "/" }: RenderWithRouterOptions = {}
): RenderResult {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
}

describe("App Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test("landing page rendered at /", async () => {
    renderWithRouter(<App />);
    const landingText = await screen.findByText(
      "Micheal Nestor - light mode dark mode template"
    );
    expect(landingText).toBeInTheDocument();
  });

  test("about page rendered at /about", async () => {
    renderWithRouter(<App />, { route: "/about" });
    const aboutText = await screen.findByText("About Page");
    expect(aboutText).toBeInTheDocument();
  });
});
