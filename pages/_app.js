import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import "../src/config/firebase.config";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";
import Chart from 'chart.js/auto';

function MyApp({ Component, pageProps }) {
  return( 
    <AuthProvider>
      
        <AuthStateChanged>
          <ThemeProvider defaultTheme='light' attribute='class'>
            <Component {...pageProps} />
          </ThemeProvider>
          </AuthStateChanged>
			
		</AuthProvider>
  )
}

export default MyApp
