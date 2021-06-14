import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

export const Address = ({ dataForm, setDataForm, navigation }) => {
  const { address, city, zip } = dataForm;
  
  const { handleSubmit, control } = useForm({
    defaultValues: { address, city, zip },
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data)
    setDataForm(state => ({...state, ...data}));
    navigation.next();
  };

  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="address"
          control={control}
          rules={{ required: 'Address required' }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label="Address"
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
          name="city"
          control={control}
          rules={{ required: 'City required' }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label="City"
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
          name="zip"
          control={control}
          rules={{ pattern: /^[0-9\b]+$/}}
          render={({ field, fieldState: { error } }) => {
            console.log("error",error)
            return (<TextField
              {...field}
              label="Zip"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
              error={!!error}
              helperText={error?.message}
              type="number"
            />)}
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
