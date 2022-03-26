import FormField from "./FormField";

const SignupForm = () => {
  return (
    <form>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="text" placeholder="password" />
      <button type="text"> Sign </button>
    </form>
  );
};

export default SignupForm;
