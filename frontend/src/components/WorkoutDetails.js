import React from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const {dispatch} = useWorkoutsContext()
    const handleDelete = async() => {
        const response = await fetch('/api/workouts/' + workout._id,{
            method : 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json})
        }

    }
    // const handleUpdate = async () => {
    //     const response = await fetch('/api/workouts/' + workout._id, {
    //         method: 'PATCH'
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({ type: 'UPDATE_WORKOUT', payload: json })
    //     }

    // }
    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <p>
                <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
                {/* <span className="material-symbols-outlined" onClick={handleUpdate}>edit</span> */}
            </p>
            
        </div>
    )
}

export default WorkoutDetails