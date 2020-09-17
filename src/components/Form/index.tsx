import React, { useState, forwardRef } from 'react';

import { InputAdornment, IconButton, Button, TextField, Typography } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useForm, ValidationRules } from 'react-hook-form';
import shortId from 'shortid';

import './form.scss';
import { useFormStyles } from './styles';
import { toSentenceCase } from '../../utils/lib';

interface FieldProps {
  error?: { message: string };
  name: string;
  defaultValue?: string | number;
  validations?: ValidationRules;
}

interface InputFieldProps extends FieldProps {
  type: 'text' | 'multiline';
}

interface PasswordFieldProps extends FieldProps {
  type: 'password';
}

interface DropDowntFieldProps extends FieldProps {
  type: 'dropdown';
  options: Array<string | number>;
}

interface CustomFieldProps extends FieldProps {
  type: 'custom';
  component: React.ForwardRefExoticComponent<Omit<CustomFieldProps, 'component'> & React.RefAttributes<unknown>>;
}

export type FormFields = InputFieldProps | CustomFieldProps | PasswordFieldProps | DropDowntFieldProps;

const PasswordInputField = forwardRef(({ name, error, defaultValue }: PasswordFieldProps, ref) => {
  const [hidden, setHidden] = useState(true);
  const styles = useFormStyles();
  const handleVisibilityToggle = () => {
    setHidden(!hidden);
  };
  return (
    <TextField
      fullWidth
      defaultValue={defaultValue}
      error={!!error}
      id={name}
      label={toSentenceCase(name)}
      name={name}
      variant="filled"
      type={!hidden ? 'text' : 'password'}
      className={styles.textField}
      inputRef={ref}
      helperText={error?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleVisibilityToggle}
              onMouseDown={handleVisibilityToggle}
            >
              {!hidden ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

const InputField = forwardRef(({ name, type, error, defaultValue }: InputFieldProps, ref) => {
  const styles = useFormStyles();
  console.log(error);
  return (
    <TextField
      fullWidth
      defaultValue={defaultValue}
      error={!!error}
      className={styles.textField}
      id={name}
      multiline={type === 'multiline'}
      label={toSentenceCase(name)}
      name={name}
      variant="filled"
      type={'text'}
      inputRef={ref}
      helperText={error?.message}
    />
  );
});

const DropDownField = forwardRef(({ name, options, defaultValue }: DropDowntFieldProps, ref) => {
  const styles = useFormStyles();
  return (
    <TextField
      fullWidth
      name={name}
      label={toSentenceCase(name)}
      defaultValue={defaultValue}
      id={name}
      select
      inputRef={ref}
      className={styles.dropDown}
      SelectProps={{
        native: true,
        autoWidth: true,
      }}
      variant="filled"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
});

const getFormField = (formField: FormFields, register: any) => {
  const { error, name } = formField;
  switch (formField.type) {
    case 'text':
    case 'multiline':
      return (
        <InputField
          key={shortId.generate()}
          error={error}
          name={name}
          ref={register}
          type={formField.type}
          defaultValue={formField.defaultValue}
        />
      );
    case 'password':
      return (
        <PasswordInputField
          type={formField.type}
          key={shortId.generate()}
          error={error}
          name={name}
          ref={register}
          defaultValue={formField.defaultValue}
        />
      );
    case 'custom':
      return (
        <formField.component
          type={formField.type}
          key={shortId.generate()}
          error={error}
          name={name}
          ref={register}
          defaultValue={formField.defaultValue}
        />
      );
    case 'dropdown':
      return (
        <DropDownField
          type={formField.type}
          key={shortId.generate()}
          error={error}
          name={name}
          ref={register}
          options={formField.options}
          defaultValue={formField.defaultValue}
        />
      );
    default:
      return <div className="invalid">Invalid type passed</div>;
  }
};

interface FormProps {
  fields: FormFields[];
  actionsName: string;
  title: string;
  hasCancel: boolean;
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

export function Form({ fields, actionsName, onSubmit, title, onCancel, hasCancel }: FormProps) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        return handleSubmit(onSubmit)(e);
      }}
      className="form"
    >
      <div className="form-header">
        <Typography variant="h6">{title}</Typography>
      </div>
      <div className="form-container">
        {fields.map((fieldProps) =>
          getFormField({ ...fieldProps, error: errors[fieldProps.name] }, register(fieldProps.validations)),
        )}
      </div>
      <div className="form-actions">
        <Button variant="contained" color="primary" size="large" disableElevation type="submit">
          {actionsName}
        </Button>
        { hasCancel &&
          <Button color="primary" size="large" disableElevation onClick={onCancel}>
            Cancel
          </Button>
        }
        
      </div>
    </form>
  );
}
