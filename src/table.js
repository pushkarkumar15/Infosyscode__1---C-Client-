import React, {useState} from 'react'
import { Table, TableCell, TableHead, TablePagination, TableRow} from '@mui/material'
import {makeStyles} from '@mui/styles'


let usestyles = makeStyles({
        table: {
           // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            marginTop: '30px',
            color: '',
            '& thead th': {
                fontWeight: '600',
                color: 'yello',
               // backgroundColor: '#FE6B8B',
            },
            '& tbody td': {
                fontWeight: '300',
            }
            // ,
            // '& tbody tr:hover' : {
            //     backgroundColor: '#ffb2',
            //     cursor: 'ponter',
            // }
        },
        status: {
            fontWeight: 'bold',
            fontSize: '0.75rem',
            color: 'white',
            backgroundColor: 'gray',
            borderRadius: 8,
            padding: '3px 10px',
            display: 'inline-block'

        }

    }
)

let Table2 = (records, headCells) => {

    let classes = usestyles()

    let pages = [5, 10, 25]

    let [page, setPage] = useState(0)
    let [rowsPerPage, setRowsPerPage] = useState(pages[page])

    let TblContainer = (props) => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    let TblHead = props => {

        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map((head) => {
                            return(
                                <TableCell>
                                    {head.lable}
                                </TableCell>
                            )
                        })
                    }

                </TableRow>
            </TableHead>
        )
    }

    let handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    let handlechangeRowsperpage = (event) => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    }

    let TblPagination = () => (
        <TablePagination
        component="div"
        page = {page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={records.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange = {handlechangeRowsperpage}
        />
    )

    let recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    return{
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting

    }
}


export {Table2}