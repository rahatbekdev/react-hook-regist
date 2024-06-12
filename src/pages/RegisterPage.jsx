

import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  gap: "1rem",
});

const InputContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "300px", // Ширина формы
});

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://3.67.195.110/api/auth/signUpForVendor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        navigate("/");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <FormContainer>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="firstName"
          variant="outlined"
          fullWidth
          {...register("firstName", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          type="text"
          label="lastName"
          variant="outlined"
          fullWidth
          {...register("lastName", { required: "Familiya is required" })}
          error={!!errors.familiya}
          helperText={errors.familiya?.message}
        />
        <TextField
          type="tel"
          label="PhoneNumber"
          variant="outlined"
          fullWidth
          {...register("phoneNumber", { required: "Phone number is required" })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {/* <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        /> */}
        <Button type="submit" variant="contained" color="primary">
          Создать аккаунт
        </Button>
      </InputContainer>
    </FormContainer>
  );
};

export default RegisterPage;

// Boobba_js22
