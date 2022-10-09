let removedata = () => {
    return{
        type: 'REMOVE'
    }
}

let adddata = ({id='', room= '', bedId='', MealType='', Status='', RDT='' }={}) => {
    return{
        type: 'ADD',
        value: {
            id: id,
            room: room,
            bedId: bedId,
            MealType: MealType,
            Status: Status,
            RDT: RDT
        }

    }
}

export {adddata, removedata}