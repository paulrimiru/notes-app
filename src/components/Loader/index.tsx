import { makeStyles, createStyles, Backdrop } from '@material-ui/core';
import React from 'react';
import Loader from 'react-loaders';
import './loader.scss';

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      zIndex: 1500,
      color: '#fff',
    },
    loader: {transform: 'scale(3.5)'}
  }),
);

const LoaderComponent = ({ loading }: { loading: boolean }) => {
  const styles = useStyles();
  return (
    <Backdrop className={styles.backdrop} open={loading}>
      <Loader active={loading} type="line-scale-pulse-out-rapid" innerClassName={styles.loader} />
    </Backdrop>
  )
}

export default LoaderComponent;
