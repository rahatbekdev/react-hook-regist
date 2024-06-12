



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

export const RegisterClientPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://3.67.195.110/api/auth/signUpForClient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Registration successful:", result);
        navigate("/");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const password = watch("password");

  return (
    <FormContainer>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          fullWidth
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
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
        <TextField
          type="password"
          label="Confirm password"
          variant="outlined"
          fullWidth
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Создать аккаунт
        </Button>
        <Button variant="outlined" color="secondary">
          Стать продавцом
        </Button>
      </InputContainer>
    </FormContainer>
  );
};

export default RegisterClientPage;





