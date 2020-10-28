export const reducer = (state,action)=>{
    switch(action.type){
        case "INIT":
            return {...action.init}
        case "UPDATE":
            return {...state, ...action.newFilter}
        case "FILTER":
            let tempRooms = [...state.rooms]
            let {type,capacity,price,minSize,maxSize,breakfast,pets}= state
            capacity = parseInt(capacity)
            price = parseInt(price)
            let breakfastCheck = breakfast
            let petsCheck = pets
            // filter by
            //type
            if(type !=="all"){
                tempRooms = tempRooms.filter(room => room.type === type)
            }
            //capacoty
            if(capacity !== 1){
                tempRooms = tempRooms.filter(room=> room.capacity >= capacity)
            }
            //price
            tempRooms = tempRooms.filter(room => room.price <=price)
            //size
            tempRooms = tempRooms.filter(room=> (room.size>=minSize) && (room.size <= maxSize))
            //breakfast
            if(breakfast){
                tempRooms = tempRooms.filter(room => room.breakfast === true)
            }
            if(pets){
                tempRooms = tempRooms.filter(room => room.pets ===true )
            }
            return { ...state, sortedRooms:tempRooms, breakfast:breakfastCheck, pets:petsCheck}
        default:
            return state
    }
}