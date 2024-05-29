import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

export default function AddProductPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [quantity, setQuantity] = useState('');
    const [specialPrice, setSpecialPrice] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [publisherID, setPublisherID] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', parseFloat(price));
            formData.append('year', parseInt(year));
            formData.append('quantity', parseInt(quantity));
            formData.append('specialPrice', parseFloat(specialPrice));
            formData.append('cateID', categoryID);
            formData.append('publisherID', publisherID);
            formData.append('image', image);
            formData.append('description', description);

            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8088/api/admin/newBook', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Chuyển hướng sau khi thêm sản phẩm thành công
            navigate('/admin/products');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    
    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Add Product
            </Typography>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                fullWidth
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Price"
                                fullWidth
                                type="number"
                                variant="outlined"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Year"
                                fullWidth
                                type="number"
                                variant="outlined"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Quantity"
                                fullWidth
                                type="number"
                                variant="outlined"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Special Price"
                                fullWidth
                                type="number"
                                variant="outlined"
                                value={specialPrice}
                                onChange={(e) => setSpecialPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={categoryID}
                                    onChange={(e) => setCategoryID(e.target.value)}
                                    label="Category"
                                >
                                    <MenuItem value={1}>Category 1</MenuItem>
                                    <MenuItem value={2}>Category 2</MenuItem>
                                    {/* Thêm các MenuItem khác tương ứng với danh sách các category */}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Publisher</InputLabel>
                                <Select
                                    value={publisherID}
                                    onChange={(e) => setPublisherID(e.target.value)}
                                    label="Publisher"
                                >
                                    <MenuItem value={1}>Publisher 1</MenuItem>
                                    <MenuItem value={2}>Publisher 2</MenuItem>
                                    {/* Thêm các MenuItem khác tương ứng với danh sách các publisher */}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddProduct}
                        style={{ marginTop: 16 }}
                    >
                        Add Product
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
