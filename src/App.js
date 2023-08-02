import LandingPage from "./pages/landingPage/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/register/signup";
import Verifyotp from "./pages/otp/verifyotp";
import Changepassword from "./pages/changepassword/changepassword";
import Dashboard from "./pages/dashboard/dashboard";
import Questions from "./pages/questions/Questions";
import Settings from "./pages/settings/Settings";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword";
import Results from "./pages/result/Result";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="ball-1"></div>
				<div className="ball-2"></div>
				<div className="ball-3"></div>
				<div className="box"></div>
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="home" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/verifyotp" element={<Verifyotp />} />
					<Route
						path="/forgotpassword"
						element={<Forgotpassword />}
					/>
					<Route
						path="/changepassword"
						element={<Changepassword />}
					/>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/question" element={<Questions />} />
					<Route path="/result" element={<Results />} />

					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
