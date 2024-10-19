import { Alert, Snackbar } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function SnackBarComponent({openSnackbar, handleSnackBarClose, message, color}) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ 
          vertical: 'top', 
          horizontal: 'right' 
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
      >
        <Alert
          icon={color === "success" ? <TaskAltIcon fontSize="inherit" /> : <ErrorOutlineIcon fontSize="inherit" />}
          onClose={handleSnackBarClose}
          severity={color}
          sx={{
            width: "100%"
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
