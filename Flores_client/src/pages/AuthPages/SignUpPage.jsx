import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-full border border-[#c5d0c5] bg-[#f8f9f5] px-5 py-3 text-sm text-[#2a3a2a] outline-none transition placeholder:text-[#a5b5a5] focus:border-[#2a3a2a] focus:bg-white";

const actionButtonClassName = "w-full py-3.5 text-[11px] tracking-[0.15em]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // After successful sign up, redirect to sign in
    navigate("/auth/signin");
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#2a3a2a] sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-3 text-sm leading-6 text-[#6a7a6a]">
        Create your account with the same layout pattern and shared button
        treatment.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-[#4a5a4a]"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Placeholder"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-medium text-[#4a5a4a]"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Placeholder"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-[#4a5a4a]"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="Placeholder"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-[#4a5a4a]"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Placeholder"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#8a9a8a]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        {/* Submit */}
        <Button type="submit" variant="dark" className={actionButtonClassName}>
          Create Account
        </Button>

        {/* Social Login */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="mt-8 border-t border-[#c5d0c5] pt-6 text-sm text-[#6a7a6a]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#2a3a2a] transition hover:text-[#4a5a4a]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
