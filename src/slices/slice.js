import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'slice',
    initialState: {
        counterGoods: {},
        summary: 0
    },

    reducers: {
        increment: (state,data) => {
            console.log(data.payload)

            let arr = data.payload[1].split(',')

            if (state.counterGoods[data.payload[0]] === undefined){
                
                state.counterGoods[data.payload[0]] = [ 0, +arr[0], data.payload[2], 0, arr[1], arr[2] ]
               
            }
            state.counterGoods[data.payload[0]][0] ++
            
            
            state.counterGoods[data.payload[0]][3] = (+arr[0]) + state.counterGoods[data.payload[0]][3]
            state.summary += +arr[0]
        },


        removeAll: (state) => {
            
           state.summary = 0
           state.counterGoods = {}

        },

        decrement: (state,data) => {


            let arr = data.payload[1].split(',')

            if (state.counterGoods[data.payload[0]] ){

                if( state.summary <= 0 ){
                    state.summary =  0
                    state.counterGoods[data.payload[0]][3] = 0
                }

                else{

                    if ( state.counterGoods[data.payload[0]][0] > 0 ){
                        
                        let newSsum = state.summary - (+arr[0])
                        state.summary =  newSsum
                        state.counterGoods[data.payload[0]][0] -- 
                        state.counterGoods[data.payload[0]][3] = (state.counterGoods[data.payload[0]][3] - (+arr[0]))
                    }
                    else{
                        state.counterGoods[data.payload[0]][0] = 0
                    }
                }
                
                
            }
            
        }
    }
})


export const {increment, decrement, removeAll} = slice.actions;

export const selectCounterGoods = state => state.counterGoods.counterGoods;
export const selectCountCart = state => state.counterGoods.countCart;
export const selectSummary = state => state.counterGoods.summary;

export default slice.reducer;