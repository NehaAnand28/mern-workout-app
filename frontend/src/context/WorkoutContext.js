import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()
//takes prev state and action
export const workoutsReducer = (state,action) => {
    switch(action.type) {
        //displays all existing workout 
        case 'SET_WORKOUTS':
            return {
                workouts:action.payload
            }
        //creates a new workout and adds it to the top of the list, remaining workouts from the previous workout state follows
        case 'CREATE_WORKOUT':
            return {
                workouts:[action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        //return the previous workout state
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    //similar to useState -> Reducer function and initial state
    const [state,dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })
    //dispatch-> describes state change & data needed for state change -> invokes reducer function
    // dispatch({type:'',payload: [{},{}]}) 
    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}

