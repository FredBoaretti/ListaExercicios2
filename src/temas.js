import { createMuiTheme } from '@material-ui/core/styles'

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#D3D3D3',
        },
        background: {
          default: '#000080',
          paper: '#000040',
        },
      },
}))

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#0040c0',
        },
        background: {
          default: '#DCDCDC',
          paper: '#D3D3D3',
        },
      },    

}))



export { temaEscuro, temaClaro }