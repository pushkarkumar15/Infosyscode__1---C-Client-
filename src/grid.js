import './App.css';
import {store} from './store/reducer'
import { useEffect } from 'react';
import { adddata, removedata } from './store/reducerfunction';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

let Grid = (props) => {
    let data = store.getState().Data
    let list = data.map((da) => {
        let {id, room, bedId, MealType, Status, RDT} = da
        return(
          <div className="mydiv mydivconatiner">
            <div>{room}/{bedId}</div>
             <div >{Status}  </div>       
            <div className="mydiv2" style={{
                        backgroundColor:
                        ((Status === 'INTRANSIT' && 'blue') ||
                        (Status === 'DELIVERED' && 'green') ||
                        (Status === 'INPRODUCTION' && 'orange')||
                        (Status === 'NOTORDERED' && 'red')
                        )

                      }} >{RDT}</div>
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

      useEffect(() => {
        fetchproducts()
      }, [])

    return(
        <div>
            <h1> Nurse View</h1>
            <Link to='/'>Go to App</Link>
            <div className="mydivconatiner">
                {list}


            </div>
            

        </div>
    )
}

let mapstatetoprops = (state) => {
    return{
      Data: state.Data
    }
  }
  
  export default connect(mapstatetoprops)(Grid);

