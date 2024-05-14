
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
import './SideBar.css'
const SideBar = () => {
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
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const toggleExpanded2 = () => {
        setExpanded2(!expanded2);
    };
    const toggleExpanded3 = () => {
        setExpanded3(!expanded3);
    };
    const toggleExpanded4 = () => {
        setExpanded4(!expanded4);
    };


    const [checked, setChecked] = useState([]);
    const [checkedAuthors, setCheckedAuthors] = useState([]);
    const [checkedPublishers, setCheckedPublishers] = useState([]);
    const [checkedSuppliers, setCheckedSuppliers] = useState([]);
    const [checkedCoverTypes, setCheckedCovertypes] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        // console.log(checked);
    };
    const handleToggle2 = (value) => () => {
        const currentIndex = checkedAuthors.indexOf(value);
        const newChecked = [...checkedAuthors];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedAuthors(newChecked);
        // console.log(checkedAuthors);
    };
    const handleToggle3 = (value) => () => {
        const currentIndex = checkedPublishers.indexOf(value);
        const newChecked = [...checkedPublishers];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedPublishers(newChecked);
    };
    const handleToggle4 = (value) => () => {
        const currentIndex = checkedSuppliers.indexOf(value);
        const newChecked = [...checkedSuppliers];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedSuppliers(newChecked);
    };
    const handleToggle5 = (value) => () => {
        const currentIndex = checkedCoverTypes.indexOf(value);
        const newChecked = [...checkedCoverTypes];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedCovertypes(newChecked);
        // console.log(checkedAuthors);
    };
    useEffect(() => {
        console.log(checkedCoverTypes);
    }, [checkedCoverTypes]);
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
                                checked={checked.indexOf(rating) !== -1}
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

                    {/* Tác giả */}
                    <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Tác giả'} />
                    </ListItem>
                    {authors.map((author, index) => (

                        <ListItem button key={index} onClick={handleToggle2(author)} sx={{ padding: 0, paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                            <Checkbox sx={{
                                color: '#6868AC',
                                '&.Mui-checked': {
                                    color: '#6868AC',
                                },
                            }}
                                checked={checkedAuthors.indexOf(author) !== -1}
                                color="primary"
                            />
                            <ListItemText primary={author} />
                        </ListItem>
                    ))}
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        {additionalAuthors.map((author, index) => (
                            <ListItem button key={index} onClick={handleToggle2(author)} sx={{ padding: 0, paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    checked={checkedAuthors.indexOf(author) !== -1}
                                    color="primary"
                                />
                                <ListItemText primary={author} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <ListItem button onClick={toggleExpanded2} sx={{ paddingTop: 0, paddingBottom: '15px' }}>
                        <ListItemText sx={{ '& span': { color: '#6868AC', display: 'inline-block' } }}
                            primary={
                                <div>
                                    {expanded2 ? 'Thu gọn ' : 'Xem thêm '}
                                    {expanded2 ? <ArrowDropUpIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowUpIcon" /> : <ArrowDropDownIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowDownIcon" />}
                                </div>
                            } />
                    </ListItem>
                    {/* Công ty phát hành */}
                    <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Công ty phát hành'} />
                    </ListItem>
                    {publishers.map((publisher, index) => (
                        <ListItem button key={index} onClick={handleToggle3(publisher)} sx={{ padding: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                            <Checkbox sx={{
                                color: '#6868AC',
                                '&.Mui-checked': {
                                    color: '#6868AC',
                                },
                            }}
                                checked={checkedPublishers.indexOf(publisher) !== -1}
                                color="primary"
                            />
                            <ListItemText primary={publisher} />
                        </ListItem>
                    ))}
                    <Collapse in={expanded3} timeout="auto" unmountOnExit>
                        {additionalPublishers.map((publisher, index) => (
                            <ListItem button key={index} onClick={handleToggle3(publisher)} sx={{ padding: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    checked={checkedPublishers.indexOf(publisher) !== -1}
                                    color="primary"
                                />
                                <ListItemText primary={publisher} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <ListItem button onClick={toggleExpanded3} sx={{ paddingTop: 0, paddingBottom: '15px' }}>
                        <ListItemText sx={{ '& span': { color: '#6868AC', display: 'inline-block' } }}
                            primary={
                                <div>
                                    {expanded3 ? 'Thu gọn ' : 'Xem thêm '}
                                    {expanded3 ? <ArrowDropUpIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowUpIcon" /> : <ArrowDropDownIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowDownIcon" />}
                                </div>
                            } />
                    </ListItem>
                    {/* Nhà cung cấp */}
                    <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Nhà cung cấp'} />
                    </ListItem>
                    {suppliers.map((supplier, index) => (
                        <ListItem button key={index} onClick={handleToggle4(supplier)} sx={{ padding: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                            <Checkbox sx={{
                                color: '#6868AC',
                                '&.Mui-checked': {
                                    color: '#6868AC',
                                },
                            }}
                                checked={checkedSuppliers.indexOf(supplier) !== -1}
                                color="primary"
                            />
                            <ListItemText primary={supplier} />
                        </ListItem>
                    ))}
                    <Collapse in={expanded4} timeout="auto" unmountOnExit>
                        {additionalSuppliers.map((supplier, index) => (
                            <ListItem button key={index} onClick={handleToggle4(supplier)} sx={{ padding: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    checked={checkedSuppliers.indexOf(supplier) !== -1}
                                    color="primary"
                                />
                                <ListItemText primary={supplier} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <ListItem button onClick={toggleExpanded4} sx={{ paddingTop: 0, paddingBottom: '15px' }}>
                        <ListItemText sx={{ '& span': { color: '#6868AC', display: 'inline-block' } }}
                            primary={
                                <div>
                                    {expanded4 ? 'Thu gọn ' : 'Xem thêm '}
                                    {expanded4 ? <ArrowDropUpIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowUpIcon" /> : <ArrowDropDownIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowDownIcon" />}
                                </div>
                            } />
                    </ListItem>

                    {/* Loại bìa */}
                    <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                        <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={'Loại bìa'} />
                    </ListItem>
                    {coverTypes.map((coverType, index) => (
                        <ListItem button key={index} onClick={handleToggle5(coverType)} sx={{ padding: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                            <Checkbox sx={{
                                color: '#6868AC',
                                '&.Mui-checked': {
                                    color: '#6868AC',
                                },
                            }}
                                checked={checkedCoverTypes.indexOf(coverType) !== -1}
                                color="primary"
                            />
                            <ListItemText primary={coverType} />
                        </ListItem>
                    ))}

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

export default SideBar;



