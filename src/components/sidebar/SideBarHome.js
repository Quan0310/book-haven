
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Collapse from '@mui/material/Collapse';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import './SideBarHome.css'
import CollapsibleList from './sidebaritems/CollapsibleList';
const SideBarHome = () => {
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);


    const categories = [
        'Sách văn học',
        'Sách lịch sử',
        'Sách kinh tế',
        'Sách thiếu nhi'
    ];

    const additionalCategories = [
        'Sách khoa học',
        'Sách truyện tranh',
        'Sách tự nhiên',
        'Sách khoa học xã hội'
    ];
    const authors = [
        'Nguyễn Nhật Ánh',
        'Thích Nhất Hạnh',
        'Fujiko F Fujio',
        'Antoine de Saint-Exupéry',
        'Nguyễn Phi Vân',

    ];
    const additionalAuthors = [
        'Vãn Tình',
        'Osho',
        'Dale Carnegie',
        'Robin Sharma'
    ];
    const publishers = [
        'Alphabooks',
        'MCBOOKS',
        'NXB Trẻ',
        'First New - Trí Việt',
        'NSB Kim Đồng',

    ];
    const additionalPublishers = [
        'Skybooks',
        'Học liệu Sư phạm',
        'Bách Việt',
        'Saigon Books'
    ];
    const suppliers = [
        'Nhà Sách Vĩnh Thụy',
        'Nhà Sách Trẻ Online',
        'Bamboo Books',
        'Times Books',
        'Nhà Sách Phương Nam',

    ]
    const additionalSuppliers = [
        'NHBook',
        'Phương Đông Books',
        'Sống Official'
    ]
    const coverTypes = [
        'Bìa mềm',
        'Bìa cứng',
        'Bìa gập',
        'Bìa mềm tay gấp',
        'Bìa da',
    ]
    const additionalCoverTypes = [];
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const [checkedRate, setCheckedRate] = useState([]);
    const [checkedAuthors, setCheckedAuthors] = useState([]);
    const [checkedPublishers, setCheckedPublishers] = useState([]);
    const [checkedSuppliers, setCheckedSuppliers] = useState([]);
    const [checkedCoverTypes, setCheckedCovertypes] = useState([]);

    const handleToggleGeneric = (value, checked, setChecked) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleToggle = (value) => () => handleToggleGeneric(value, checkedRate, setCheckedRate);
    const handleToggle2 = (value) => () => handleToggleGeneric(value, checkedAuthors, setCheckedAuthors);
    const handleToggle3 = (value) => () => handleToggleGeneric(value, checkedPublishers, setCheckedPublishers);
    const handleToggle4 = (value) => () => handleToggleGeneric(value, checkedSuppliers, setCheckedSuppliers);
    const handleToggle5 = (value) => () => handleToggleGeneric(value, checkedCoverTypes, setCheckedCovertypes);

    return (
        <div className='Sidebar-container'>
            <div className='sidebar'>
                <List>

                    {/* Danh mục sản phẩm */}
                    <ListItem button sx={{ paddingTop: 0, paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Danh mục sản phẩm'} />
                    </ListItem>
                    {categories.map((category, index) => (
                        <ListItem button key={index} sx={{ paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                            <ListItemText primary={category} />
                        </ListItem>
                    ))}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {additionalCategories.map((category, index) => (
                            <ListItem button key={index} sx={{ paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <ListItem button onClick={toggleExpanded} sx={{ paddingTop: 0, paddingBottom: '15px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                        <ListItemText sx={{ '& span': { color: '#6868AC', display: 'inline-block' } }}
                            primary={
                                <div>
                                    {expanded ? 'Thu gọn ' : 'Xem thêm '}
                                    {expanded ? <ArrowDropUpIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowUpIcon" /> : <ArrowDropDownIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowDownIcon" />}
                                </div>
                            } />
                    </ListItem>


                    {/* Đánh giá */}
                    <ListItem button sx={{ paddingTop: 0 }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Đánh giá'} />
                    </ListItem>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <ListItem key={rating} button onClick={handleToggle(rating)} sx={{ padding: 0, height: '28px', paddingBottom: '15px' }}>
                            <Checkbox sx={{
                                color: '#6868AC',
                                '&.Mui-checked': {
                                    color: '#6868AC',
                                },
                            }}
                                checked={checkedRate.indexOf(rating) !== -1}
                                color="primary"
                            />
                            {/* Biểu tượng sao hoặc ngôi sao màu vàng */}
                            <Rating
                                name={`rating-${rating}`}
                                value={rating}
                                readOnly
                                max={5}
                                precision={1}
                                icon={<StarIcon style={{ color: '#FFB800' }} />}
                            />
                        </ListItem>
                    ))}

                    <CollapsibleList
                        title="Tác giả"
                        items={authors}
                        checkedItems={checkedAuthors}
                        handleToggle={handleToggle2}
                        additionalItems={additionalAuthors}
                    />
                    <CollapsibleList
                        title="Công ty phát hành"
                        items={publishers}
                        checkedItems={checkedPublishers}
                        handleToggle={handleToggle3}
                        additionalItems={additionalPublishers}
                    />
                    <CollapsibleList
                        title="Nhà cung cấp"
                        items={suppliers}
                        checkedItems={checkedSuppliers}
                        handleToggle={handleToggle4}
                        additionalItems={additionalSuppliers}
                    />
                    <CollapsibleList
                        title="Loại bìa"
                        items={coverTypes}
                        checkedItems={checkedCoverTypes}
                        handleToggle={handleToggle5}
                        additionalItems={additionalCoverTypes}
                    />
                    {/* Mức giá */}
                    <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Mức giá'} />
                    </ListItem>
                    <ListItem>
                        <TextField

                            type="number"
                            // value={minPrice}
                            // onChange={(e) => setMinPrice(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            sx={{ marginRight: '20px' }}
                            size="small"
                            onWheel={event => { event.preventDefault(); }}
                        />
                        <TextField
                            type="number"
                            // value={maxPrice}
                            // onChange={(e) => setMaxPrice(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            size="small"

                        />
                    </ListItem>
                    <Button variant="contained" color="primary" >
                        Áp dụng
                    </Button>
                </List>
            </div>
        </div>
    );
}

export default SideBarHome;



