import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AppBar position="static" style={{ padding: "8px" }}>
        <Typography variant="h5">My Material UI App</Typography>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography mb={2} variant="h3">
          Welcome to our app!
        </Typography>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Open dialog window
        </Button>
      </Container>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Did I write this header myself?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I sure did. But it doesn't contain any meaningful message. I
            apologise if you spent your time wastefully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Not a problem</Button>
          <Button onClick={() => setIsOpen(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
