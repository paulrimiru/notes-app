import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';

export function useLocalStorage(key: string, initialValue?: string): [string | undefined, (value?: string) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value?: string) => {
    try {
      window.localStorage.setItem(key, value || '');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStoredValue(window.localStorage.getItem(key) || storedValue);
    // eslint-disable-next-line
  }, [window.localStorage.getItem(key)])

  return [storedValue, setValue];
}

export function useMessage() {
  const { enqueueSnackbar } = useSnackbar();

  const showSuccess = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      preventDuplicate: true,
    })
  }
  
  const showError = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      preventDuplicate: true,
    })
  }
  
  const showInfo = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'info',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      preventDuplicate: true,
    })
  }

  return [showSuccess, showError, showInfo];
}
