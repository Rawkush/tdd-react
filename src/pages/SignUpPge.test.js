import SignUpPage from "./SignUpPage"
import { render, screen } from "@testing-library/react"
import userEvents from "@testing-library/user-event"
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

    it('has password input', () => {
      const { container } = render(<SignUpPage />);
      // const inputs = container.querySelectorAll("input");
      const input = screen.getByLabelText("password");
      expect(input).toBeInTheDocument();
    })
    it('has password type for password input', () => {
      render(<SignUpPage />);
      // const inputs = container.querySelectorAll("input");
      const input = screen.getByLabelText("password");
      expect(input.type).toBe("password");
    })
    it('has password type for password reapeat input', () => {
      render(<SignUpPage />);
      // const inputs = container.querySelectorAll("input");
      const input = screen.getByLabelText("repeat password");
      expect(input.type).toBe("password");
    })
    it('has Sign Up button', () => {
      render(<SignUpPage />);
      const btn = screen.queryByRole('button', {
        name: "Sign up"
      });
      expect(btn).toBeInTheDocument();
    })
    it('has disables the button initally', () => {
      render(<SignUpPage />);
      const btn = screen.queryByRole('button', {
        name: "Sign up"
      });
      expect(btn).toBeDisabled();
    });
  })

  describe('interactions', () => {
    it("enables the button when password amd password-repat fields have some value", () => {
      render(<SignUpPage />);
      const repeatPasswordInput = screen.getByLabelText("repeat password");
      const passwordInput = screen.getByLabelText("password");
      //typiing data inpto password fields
      userEvents.type(passwordInput, "password")
      userEvents.type(repeatPasswordInput, "password");
      const button = screen.getByRole('button', {
        name: "Sign up"
      })
      expect(button).toBeEnabled();
    })
  })

})
