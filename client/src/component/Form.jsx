import React from "react";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { FormContainer, FormTitle, StyledContainer } from "../utills/Style";
import { toast } from "react-toastify";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 6 ? null : "Password must be atleast 6 letter",
      terms: (value) => (value ? null : "You must agree to the terms"),
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.validate().hasErrors) {
      //   console.log(form.values.email);

      if (
        form.values.email === "Admin@gmail.com" &&
        form.values.password === "admin@123" &&
        form.values.terms === true
      ) {
        navigate("/layout");
        toast.success("admin login successful");
      } else {
        toast.warning("wrong login credencial");
      }
    } else {
      Object.values(form.errors).forEach((error) => {
        if (error) {
          toast.error(error);
        }
      });
    }
  };

  return (
    <StyledContainer>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            label="Your email"
            placeholder="example@gmail.com"
            type="email"
            required
            {...form.getInputProps("email")}
            style={{ marginBottom: "1rem" }}
          />
          <PasswordInput
            label="Your password"
            placeholder="******"
            type="password"
            required
            {...form.getInputProps("password")}
            style={{ marginBottom: "1rem" }}
          />
          <Checkbox
            required
            style={{ marginBottom: "1rem" }}
            label="I agree terms and condition"
            {...form.getInputProps("terms", { type: "checkbox" })}
          />
          <Button type="submit" variant="outline">
            Login now
          </Button>
        </form>
      </FormContainer>
    </StyledContainer>
  );
};

export default Form;
