const initialState = {
    sampledata : [],
    randomData: null,
    serverResponse: ''
}

export const reducer = (state = initialState, param) => {
    switch (param.type) {
        case  "case_1" :
        return {
            ...state,
            sampledata: [...state.sampledata, ...param.payload]
        }
        case  "case_2" :
           return {
               ...state,
               randomData: param.payload
        }
        case  "reset_case_1" :
           return {
               ...state,
               sampledata: param.payload
        }
        case "saveduser":
            return {
                ...state,
                serverResponse: param.payload
            }
        default : return state;
    }
}