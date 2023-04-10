import { render, screen } from "@testing-library/vue";

// COMPONENTS
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Display company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Google Careers");
    expect(companyName).toBeInTheDocument();
  });
});
