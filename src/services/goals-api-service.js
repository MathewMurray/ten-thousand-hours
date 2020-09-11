import config from '../config'
import TokenService from './token-service'

const GoalsApiService = {
    getGoals(){
        return fetch(`${config.API_ENDPOINT}/goals`, {
            headers:{
                'Authorization':`bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json() 
            )
    },
    getGoal(goalId){
        return fetch(`${config.API_ENDPOINT}/goals/${goalId}`,{
            headers:{
                'Authorization':`bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getGoalLogs(goal_id){
        return fetch(`${config.API_ENDPOINT}/goals/${goal_id}/logs`, {
            headers: {
                'Authorization':`bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postLog(goalId,text,userHours){
        return fetch(`${config.API_ENDPOINT}/logs`, {
            method: 'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                goal_id:goalId,
                text,
                user_hours:userHours,
            }),
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
                )
    },
    postGoal(title,target){
        return fetch(`${config.API_ENDPOINT}/goals`, {
            method: 'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                title,
                target,
                user_id,
            })
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
                )
    }
}

export default GoalsApiService