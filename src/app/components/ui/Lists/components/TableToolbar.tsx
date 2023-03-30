import React from "react";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import FileUpload from "@mui/icons-material/FileUpload";
import FileDownload from "@mui/icons-material/FileDownload";
import Edit from "@mui/icons-material/Edit";
import Archive from "@mui/icons-material/Archive";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface EnhancedTableToolbarProps {
  numSelected: number;
  title?: string;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const [open, setOpen] = React.useState(false);
  const { numSelected } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography sx={{ flex: "1 1 100%" }} color='inherit' variant='subtitle1' component='div'>
            {numSelected} selected
          </Typography>
        ) : (
          <Typography sx={{ flex: "1 1 100%" }} variant='h6' id='tableTitle' component='div'>
            {props.title}
          </Typography>
        )}
        {numSelected > 0 ? (
          <div className='flex'>
            <Tooltip title='Update'>
              <IconButton>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Archive'>
              <IconButton>
                <Archive />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div className='flex'>
            <Tooltip title='Add'>
              <IconButton onClick={handleClickOpen}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Upload'>
              <IconButton>
                <FileUpload />
              </IconButton>
            </Tooltip>
            <Tooltip title='Download Template'>
              <IconButton>
                <FileDownload />
              </IconButton>
            </Tooltip>
            <Tooltip title='Filter'>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </Toolbar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EnhancedTableToolbar;
