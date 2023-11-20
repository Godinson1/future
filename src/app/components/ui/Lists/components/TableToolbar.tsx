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
import { useStateContext } from "@/app/contexts/ContextProvider";
import usePageTitle from "@/app/hooks/usePageTitle";

interface EnhancedTableToolbarProps {
  numSelected: number;
  title?: string;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { handleModalPageClick } = useStateContext();
  const { pageTitle } = usePageTitle();

  const actionMapper = {
    add: `add_${pageTitle}`,
    update: `update_${pageTitle}`,
    upload: `upload_${pageTitle}`,
    product: "add_product",
  };

  const { numSelected } = props;

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
            <Tooltip title='Add Inventory'>
              <IconButton onClick={() => handleModalPageClick(actionMapper["add"])}>
                <AddIcon />
              </IconButton>
            </Tooltip>
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
            <Tooltip title='Add Product'>
              <IconButton onClick={() => handleModalPageClick(actionMapper["product"])}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Upload'>
              <IconButton onClick={() => handleModalPageClick(actionMapper["upload"])}>
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
    </div>
  );
};

export default EnhancedTableToolbar;
