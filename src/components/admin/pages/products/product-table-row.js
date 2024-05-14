import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

import Label from '../user/label/label';
// import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
    <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...other}
    />
));

Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
    width: PropTypes.number,
};


export default function ProductTableRow({
    selected,
    name,
    avatarUrl,
    company,
    role,
    isVerified,
    status,
    handleClick,
    testa
}) {
    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    return (
        <>
            <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
                <TableCell padding="checkbox">
                    <Checkbox disableRipple checked={selected} onChange={handleClick} />
                </TableCell>

                <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={name} src={avatarUrl} />
                        <Typography variant="subtitle2" noWrap>
                            {name}
                        </Typography>
                    </Stack>
                </TableCell>

                <TableCell>{company}</TableCell>

                <TableCell>{role}</TableCell>

                <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

                <TableCell>
                    <Label color={(status === 'Inactive' && 'error') || 'success'}>{status}</Label>
                    {/* {status} */}
                </TableCell>
                <TableCell>{testa}</TableCell>

                <TableCell align="right">
                    <IconButton onClick={handleOpenMenu}>
                        <Iconify icon="eva:more-vertical-fill" />
                        {/* <Box> <Icon style={{ width: 20, height: 20 }} icon="eva:more-vertical-fill"></Icon></Box> */}
                    </IconButton>
                </TableCell>
            </TableRow>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: { width: 140 },
                }}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                    {/* <Box sx={{ mr: 2 }} >
                        <Icon icon="eva:edit-fill" ></Icon>
                    </Box> */}
                    Edit
                </MenuItem>

                <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                    <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </>
    );
}

ProductTableRow.propTypes = {
    avatarUrl: PropTypes.any,
    company: PropTypes.any,
    handleClick: PropTypes.func,
    isVerified: PropTypes.any,
    name: PropTypes.any,
    role: PropTypes.any,
    selected: PropTypes.any,
    status: PropTypes.string,
};
