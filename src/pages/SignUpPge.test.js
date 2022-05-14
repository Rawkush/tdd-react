import SignUpPage from "./SignUpPage"
import { render, screen } from "@testing-library/react"

describe('Sign Up Page', () => {

  describe('Layout', () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.queryByRole("heading", {
        name: "Sign Up"
      });
      expect(header).toBeInTheDocument();
    })

    // it('has username input', () => {
    //   const { container } = render(<SignUpPage />);
    //   // const input = container.querySelector("input");
    //   const input = screen.getByPlaceholderText("username");
    //   expect(input).toBeInTheDocument();

    // })
    // it('has email input', () => {
    //   const { container } = render(<SignUpPage />);
    //   // const inputs = container.querySelectorAll("input");
    //   const input = screen.getByPlaceholderText("email");
    //   expect(input).toBeInTheDocument();
    // })
    it('has username input', () => {
      const { container } = render(<SignUpPage />);
      // const input = container.querySelector("input");
      const input = screen.getByLabelText("Username");
      expect(input).toBeInTheDocument();

    })
    it('has email input', () => {
      const { container } = render(<SignUpPage />);
      // const inputs = container.querySelectorAll("input");
      const input = screen.getByLabelText("E-mail");
      expect(input).toBeInTheDocument();
    })
  })

})
