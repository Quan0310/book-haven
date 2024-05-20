import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, Collapse } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CollapsibleList = ({ title, items, checkedItems, handleToggle, additionalItems }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ListItem button sx={{ paddingTop: '15px', paddingBottom: '5px' }}>
                <ListItemText sx={{ '& span': { fontSize: '16px', fontWeight: '500' } }} primary={title} />
            </ListItem>
            {items.map((item, index) => (
                <ListItem button key={index} onClick={handleToggle(item)} sx={{ padding: 0, paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                    <Checkbox sx={{
                        color: '#6868AC',
                        '&.Mui-checked': {
                            color: '#6868AC',
                        },
                    }}
                        checked={checkedItems.indexOf(item) !== -1}
                        color="primary"
                    />
                    <ListItemText primary={item} />
                </ListItem>
            ))}
            {additionalItems && additionalItems.length > 0 && (
                <>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {additionalItems.map((item, index) => (
                            <ListItem button key={index} onClick={handleToggle(item)} sx={{ padding: 0, paddingTop: 0, paddingBottom: '5px', '& span': { fontSize: '15px', fontWeight: '' } }}>
                                <Checkbox sx={{
                                    color: '#6868AC',
                                    '&.Mui-checked': {
                                        color: '#6868AC',
                                    },
                                }}
                                    checked={checkedItems.indexOf(item) !== -1}
                                    color="primary"
                                />
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <ListItem button onClick={toggleExpanded} sx={{ paddingTop: 0, paddingBottom: '15px' }}>
                        <ListItemText sx={{ '& span': { color: '#6868AC', display: 'inline-block' } }}
                            primary={
                                <div>
                                    {expanded ? 'Thu gọn ' : 'Xem thêm '}
                                    {expanded ? <ArrowDropUpIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowUpIcon" /> : <ArrowDropDownIcon sx={{ marginBottom: '2px' }} data-testid="KeyboardArrowDownIcon" />}
                                </div>
                            } />
                    </ListItem>
                </>
            )}
        </>
    );
};

export default CollapsibleList;
