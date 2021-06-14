import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from 'react-i18next';

const genders = ["", "Mr", "Mme"];

export const Names = ({ dataForm, setDataForm, navigation }) => {
  const { firstName, lastName, gender } = dataForm;
  const { handleSubmit, control } = useForm({
    defaultValues: { firstName, lastName, gender },
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    setDataForm(state => ({...state, ...data}));
    navigation.next();
  };

  const { t, i18n } = useTranslation();

  return (
    <Container maxWidth="xs">
      
      <h3>{t('step1.title')}</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: t("step1.firstName.error.message") }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label={ t("step1.firstName.label") }
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
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: 'Last name required' }}
          render={({ field, fieldState: { error } }) => 
            <TextField
              {...field}
              label="Last Name"
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
          name="gender"
          control={control}
          render={({ field }) =>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select {...field} fullWidth>
                {genders.map(gender => <MenuItem value={gender} key={gender}>{gender}</MenuItem>)}
              </Select>
            </FormControl>
          }
        />
        
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          type="submit"
        >
          Next
        </Button>
      </form>
      
    </Container>
  );
};
