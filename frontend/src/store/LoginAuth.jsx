import {create} from 'zustand'


const loginAuth = create((set)=>({
    condition : false,
    login : () => set(() => ({condition : true})),
    logout : () => set(() => ({condition : false}))
}))

export default loginAuth