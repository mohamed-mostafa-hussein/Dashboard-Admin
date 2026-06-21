import { Button, Stack, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Information from "../../components/Information";

function Form() {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const data = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = () => {
    setOpenSnackbar(true);
  };

  // @ts-ignore
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <>
    <Information title={"registration"} subTitle={""} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "This field is required" : null}
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "This field is required" : null}
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={errors.email ? "Please enter a valid email" : null}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.phone)}
          helperText={errors.phone ? "Please enter a valid phone number" : null}
          {...register("phone", { required: true, pattern: phoneRegExp })}
          label="Phone Number"
          variant="filled"
        />

        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />

        <TextField variant="filled" select label="Role" defaultValue="user">
          {data.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            color: "white",
            "& .MuiAlert-icon": { color: "white" },
          }}
        >
          Account added successfully
        </Alert>
      </Snackbar>
    </>
  );
}

export default Form;
