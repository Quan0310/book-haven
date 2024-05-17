
import { Button, Collapse, List, ListItem, ListItemText, TextField } from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';
import '../../sidebar/SideBarHome.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBarProfile = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(0);

    const handleListItemClick = (index, item) => {
        setSelectedItem(index);
        navigate(`/user/profile/${item.path}`);
    };
    const menu = [
        {
            'title': 'Thông tin tài khoản',
            'path': ''
        },
        {
            'title': 'Quản lý đơn hàng',
            'path': 'ordermanage'
        },
        {
            'title': 'Đánh giá sản phẩm',
            'path': 'productfeedback'
        },
        {
            'title': 'Thông tin thanh toán',
            'path': 'address'
        },
        {
            'title': 'Số địa chỉ',
            'path': 'checkoutinfo'
        },
        {
            'title': 'Thông báo',
            'path': 'notification'
        },
        {
            'title': 'Đổi mật khẩu',
            'path': 'changepassword'
        },

    ]

    return (
        <div className='Sidebar-container'>
            <div className='sidebar'>
                <List>
                    <ListItem sx={{ padding: '3px' }}>
                        <ListItem sx={{ paddingTop: 0, paddingBottom: '5px', color: '#6868AC', borderBottom: '1px solid #ccc' }}>
                            <AccountCircleOutlinedIcon />
                            <ListItemText sx={{ paddingLeft: '5px', '& span': { fontSize: '18px' } }} primary={'diepminhchau'} />
                        </ListItem>
                    </ListItem>

                    {menu.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => handleListItemClick(index, item)}
                            sx={{
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                '& span': { fontSize: '15px', fontWeight: '500' },
                                color: selectedItem === index ? '#6868AC' : 'inherit' // Đổi màu khi được chọn
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>

    );
}

export default SideBarProfile;
