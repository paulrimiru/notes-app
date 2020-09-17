import './auth.scss';

import React, { useState } from 'react';

import {
  Button,
  Hidden,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { Form, FormFields } from '../../components/Form';
import { useLocalStorage, useMessage } from '../../utils/hooks';
import { http } from '../../utils/axios';
import useAuthStyles from './styles';
import LoaderComponent from '../../components/Loader';

const Auth = () => {
  const [state, setState] = useState('login');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useLocalStorage('token');
  const classes = useAuthStyles();
  const [showSuccess, showError] = useMessage();
  
  const handleSubmit = async (data: any) => {
    setLoading(true);
    if (state === 'login') {
      await handleLogin(data)
    } else {
      await handleRegister(data)
    }
    setLoading(false);
  };

  const loginUser = async (userData: any) => {
    return await http().post('/auth/login', userData)
  }
  
  const registerUser = async (userData: any) => {
    return await http().post('/user/register', userData)
  }

  const handleLogin = async (data: any) => {
    try {
      const resp = await loginUser(data);
      if (resp?.data.data.access_token)
        setToken(resp.data.data.access_token)
      showSuccess('login successfull')
    } catch (error) {
      console.log(error)
      showError(error.message)
    }
  }

  const handleRegister = async (data: any) => {
    try {
      await registerUser(data);
      setState('login')
      showSuccess('registration successfull')
    } catch (error) {
      console.log(error)
      showError(error.message)
    }
  }

  const loginValidations: FormFields[] = [
    {
      type: 'text',
      name: 'email',
      validations: {
        required: "Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
      }
    },
    {
      type: 'password',
      name: 'password',
    },
  ]

  const registrationValidation: FormFields[] = [
    {
      type: 'text',
      name: 'username',
      validations: {
        required: "Required",
        min: {
          value: 2,
          message: 'Please enter a name with at least 2 characters'
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      validations: {
        required: "Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
      }
    },
    {
      type: 'password',
      name: 'password',
      validations: {
        required: "Password Required",
        min: {
          value: 6,
          message: 'Please enter a password with at least 6 characters'
        },
        max: {
          value: 15,
          message: 'Please enter a password with at most 15 characters'
        },
      }
    },
  ]

  return (
    <div className="login">
      <LoaderComponent loading={loading}/>
      {token && (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )}
      <Hidden mdDown>
        <img
          className="login-image"
          src="https://res.cloudinary.com/mikekrantz/image/upload/v1600309819/compressed-abstract.jpg"
          alt="abstract"
        />
      </Hidden>
      <div className="login-main">
        <div className="login-container">
          <Form
            title={"Welcome to Notes"}
            actionsName={state === "login" ? "Login" : "Register"}
            onSubmit={handleSubmit}
            hasCancel={false}
            fields={state === "login" ? loginValidations : registrationValidation}
          />
          <Button
            className={classes.button}
            color="secondary"
            onClick={() => setState(state === 'login' ? 'register' : 'login')}
          >{state === 'login' ? `Don't have account? Please register here` : `Already have account? Please login here`}</Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
  