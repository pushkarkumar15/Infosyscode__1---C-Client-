import logo from './logo.svg';
import './App.css';
import {store} from './store/reducer'
import { useEffect } from 'react';
import { adddata, removedata } from './store/reducerfunction';
import {connect} from 'react-redux'
import {Table2} from './table'
import {TableBody, TableCell, TableRow, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {Link} from 'react-router-dom'

let usestyles = makeStyles({
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

let App = (props) => {
  let data = store.getState().Data
  let headCells = [
    { id: 'ID', lable: 'Patant ID'},
    { id: 'ROOM', lable: 'ROOM'},
    { id: 'BEDID', lable: 'BED'},
    { id: 'MealType', lable: 'MEAL'},
    { id: 'Status', lable: 'STATUS'},
    { id: 'RDT', lable: 'DILIVERY TIME'},

  ]
  
  let {TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting} = Table2(data, headCells )
  let classes2 = usestyles()

  
  let list = data.map((da) => {
    let {id, room, bedId, MealType, Status, RDT} = da
    return(
      <div>
        <span>
        {id}     {room}    {bedId}     {MealType}     {Status}     {RDT}
        </span>
      </div>
    )
  })

  let fetchproducts = async() => {
    props.dispatch(removedata())
    let res = JSON.parse(localStorage.getItem('Data'))

    for(let i=0; i< res.length; i++){
      props.dispatch(adddata({

            id: res[i].id,
            room: res[i].room,
            bedId: res[i].bedId,
            MealType: res[i].MealType,
            Status: res[i].Status,
            RDT: res[i].RDT

      }))
    }

  }
  

  let bedchange = (e) => {
    
      console.log(e.target.value)
      let data = store.getState().Data

      let list3 = data.map((da) => {
        let {id, room, bedId, MealType, Status, RDT} = da
        if(bedId === e.target.value){
          props.dispatch(removedata())
        }else if(room === (parseInt(e.target.value,10))){
          props.dispatch(removedata())
        }
        
      })


      let list2 = data.map((da) => {
        let {id, room, bedId, MealType, Status, RDT} = da
        if(bedId === e.target.value){
          

          props.dispatch(adddata({

            id: id,
            room: room,
            bedId: bedId,
            MealType: MealType,
            Status: Status,
            RDT: RDT

          }))

      

          

        }
      

       else if(room === (parseInt(e.target.value,10))){
          

          props.dispatch(adddata({

            id: id,
            room: room,
            bedId: bedId,
            MealType: MealType,
            Status: Status,
            RDT: RDT

          }))
        }

        

         else if (e.target.value === '' ){
                fetchproducts()

                
          }
         

      })
      

     
  }


  useEffect(() => {
    fetchproducts()
  }, [])



  return (
    <div className="App">
      <h1> ABC Hospital</h1>
      <Link to='/grid'>Go to App</Link>

      <input placeholder='Bed_ID OR ROOM_ID' type='text' onChange = {bedchange} />

      
      <div>
        
      </div>
      
      
      

      <TblContainer>
        <TblHead></TblHead>
        <TableBody>
          
          {
            
            recordsAfterPagingAndSorting().map((item) => {
              let {id, room, bedId, MealType, Status, RDT} = item

              return(
                    <TableRow key={id}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{room}</TableCell>
                      <TableCell>{bedId}</TableCell>
                      <TableCell>{MealType}</TableCell>
                      <TableCell> <Typography 
                      className={classes2.status}
                      style={{
                        backgroundColor:
                        ((Status === 'INTRANSIT' && 'blue') ||
                        (Status === 'DELIVERED' && 'green') ||
                        (Status === 'INPRODUCTION' && 'orange')||
                        (Status === 'NOTORDERED' && 'red')
                        )

                      }} 
                      >
                         {Status} 
                         </Typography> </TableCell>
                      <TableCell>{RDT}</TableCell>
                    </TableRow>
              )

            })
          }

        </TableBody>
      </TblContainer>
      <TblPagination />
      
    </div>
  );
}

let mapstatetoprops = (state) => {
  return{
    Data: state.Data
  }
}

export default connect(mapstatetoprops)(App);
