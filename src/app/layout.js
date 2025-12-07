import "./globals.css"
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google"
import Footer from "./components/Footer";
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InitialLoadingAnimation from "./components/InitialLoading";
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
})

export const metadata = {
	title: "Nas Tech Engineering",
	description:
		"NAS Tech Engineering delivers expert CAD/CAM, CNC and DFM training and engineering solutions in Bangladesh, backed by over 10 years of practical industry experience.",
	metadataBase: new URL("https://www.nastechengineeringbd.com"),
	alternates: {
        canonical: './',
    },
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='canonical' href='https://www.nastechengineeringbd.com' />
			</head>
			
			<body className={`${poppins.className} antialiased`}>
				<InitialLoadingAnimation/>
			<ToastContainer
					className={"w-[400px] text-center font-semibold text-[16px] duration-700"}
					position='top-center'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					theme='light'
					transition={Slide}
					
				/>
				<Navbar />
				
				<main>{children}</main>

				<Footer />

				<Analytics/>

			</body>
		</html>
	)
}
