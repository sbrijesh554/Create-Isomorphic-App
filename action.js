import axios from 'axios';
const sample = 

    {
        data: "Scalffolding a react and node isomorphic app"
    };


export const getSampleData = function () {
    return (dispatch) => {
        var promise = new Promise((resolve, reject) => {
            dispatch({type : "reset_case_1", payload : []})
            resolve();
        });
        promise.then(
            () => {
                dispatch({type : "case_1", payload : sample.data})
             },
            () => {
                alert("error!!!");
             }
        )
    }
}

export const fetchSampleData = function () {
    return (dispatch) => {
        axios.get("http://localhost:8081/randomnumber").then((resp)=>{
            dispatch({type: 'case_2', payload: resp.data})
        }

        ).catch((err) => {
            console.log(err);
        })
    }
}

