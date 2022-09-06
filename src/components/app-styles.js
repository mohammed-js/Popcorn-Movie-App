import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: '6em 2em 2em', // push content from the very top of screen, as Navbar not seizing any size
  },
  toolkit: {
    height: '70px',
  },
}));
