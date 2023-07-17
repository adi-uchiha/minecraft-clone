import { nanoid } from "nanoid";
import { create } from "zustand";
import ghar from "../components/HomeObject";


const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))


export const useStore = create((set)=> ({
    texture: 'dirt',
    cubes: getLocalStorage('cubes') || ghar,
    addCube: (x,y,z) => {
        set((prev)=> ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x,y,z)=> {
        set((prev)=> ({
            cubes: prev.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X!==x || Y!==y || Z!==z
            })
        }))
    },
    setTexture: (texture)=> {
        set(()=> ({
               texture 
        }))
    },
    saveWorld: ()=> {
        set((prev)=> {
            // console.log(prev)
            setLocalStorage('cubes', prev.cubes)
            return prev
        })
    },
    resetWorld: ()=> {
        set(()=> ({
            cubes: []
        }))
    },  
}))