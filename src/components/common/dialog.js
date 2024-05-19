import React from "react";
import { CloseOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

export const Dialoge_Add_User = ({ isOpen, onClose, onSave }) => {
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userName, email);
    handleClose();
  };

  const handleClose = () => {
    setEmail("");
    setUserName("");
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
      }}
      // 👇 Props passed to Paper (modal content)
      PaperProps={{ sx: { borderRadius: "30px" } }}>
      <DialogTitle sx={{ m: 0, p: 3 }}>Create New User</DialogTitle>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
        onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
      <DialogContent
        style={{
          minWidth: 350,
          margin: 20,
          marginTop: 0,
        }}>
        <form onSubmit={handleSubmit}>
          <div>
            <p className="font-semibold">User Name</p>
            <TextField
              required
              size="small"
              placeholder="Enter UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
            />
          </div>
          <div className="mt-5">
            <p className="font-semibold">Email</p>
            <TextField
              required
              size="small"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button variant="outlined" type="submit">
              Add User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
