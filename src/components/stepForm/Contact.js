import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

export const Contact = ({ dataForm, setDataForm, navigation }) => {
  const { phone, email } = dataForm;
  
  const { handleSubmit, control } = useForm({
    defaultValues: { phone, email },
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data)
    setDataForm(state => ({...state, ...data}));
    navigation.next();
  };

  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Phone required' }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label="Phone"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          }
        />

        <Controller
          name="email"
          control={control}
          rules={{ required: 'E-Mail required' }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label="E-Mail"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          }
        />

        <div style={{ marginTop: "1rem" }}>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Next
          </Button>
        </div>

      </form>
      
      
      
    </Container>
  );
};
