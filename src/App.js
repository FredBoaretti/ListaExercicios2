import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { temaEscuro, temaClaro} from './temas'
import NGrey from "./image/NGrey.jpg";
import NBlue from "./image/NBlue.jpg";

const App = () => {

    const [ atual, setTema ] = useState( temaClaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        if (claro) 
            setTema( temaEscuro )
        else
            setTema( temaClaro )
        setClaro( !claro )
    }

    if (claro){
        localStorage.setItem("back",'url('+ NGrey+')')
        localStorage.setItem("colorB", 'linear-gradient(45deg, #A9A9A9 5%, #000080 90%)')
        localStorage.setItem("colarS", 'white')
    }
    else{
        localStorage.setItem("back",'url('+ NBlue+')')
        localStorage.setItem("colorB", 'linear-gradient(45deg, #4F4F4F 5%, #D3D3D3 90%)')
        localStorage.setItem("colarS", 'black')
    }

    


    return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Formulario atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default App