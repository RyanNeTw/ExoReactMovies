import { useContext } from "react";
import { StoreContext } from "../Store/Store";

export default function moviesLength(){
    const {moviesArray, setMoviesArray, moviesLength} = useContext(StoreContext)
    return(
            <h1 class="flex justify-center text-3xl font-bold text-white">List movies {moviesLength} elements</h1>
    )
}