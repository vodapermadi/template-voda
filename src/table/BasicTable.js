import { Card, CardContent, CardHeader, Grid, Table, TableCell, TableContainer, TableRow, TableHead, TableBody, Avatar, TablePagination } from '@mui/material'

const BasicTable = ({ Data }) => {
    return (
        <>
            <Grid item sx={{
                    width:"100%",
                }}>
                <Card>
                    <CardHeader
                        title={"Basic Table"}
                    />
                    <CardContent>
                        <TableContainer sx={{
                            height:"50vh",
                            width:"100%"
                        }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Suplayer</TableCell>
                                        <TableCell>Product</TableCell>
                                        <TableCell align='center'>Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Data.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Avatar src={row.image} />
                                            </TableCell>
                                            <TableCell>{row.productName}</TableCell>
                                            <TableCell>{row.productDescription}</TableCell>
                                        </TableRow>
                                    )
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default BasicTable