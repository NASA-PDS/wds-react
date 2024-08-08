import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type DeterminateLoaderProps = {
  variant: 'determinate'
  /** Progress value to display */
  value: number;
};

type IndeterminateLoaderProps = {
  variant: 'indeterminate'
}

type LoaderProps = DeterminateLoaderProps | IndeterminateLoaderProps;

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

/**
 * A basic determinate or indeterminate loader
 */
export const Loader = (props: LoaderProps) => {

  if( props.variant == "determinate") {
    return <CircularProgressWithLabel value={props.value}/>
  }
  
  return <CircularProgress />

};
