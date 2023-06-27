import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const DataTable = ({col,data}) => {
    return (
        <>
            <Grid
                item
                sx={{
                    width: "100%",
                }}>
                <Card>
                    <CardHeader
                        title={"Data Table"}
                    />
                    <CardContent>
                        <DataGrid
                            columns={col}
                            rows={data}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10, 15, 20, 25]}
                            checkboxSelection
                            rowHeight={60}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default DataTable