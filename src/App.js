//import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Error from "./Error";
import Login from "./Login";
import Workshops from "./Workshops";
import { useAuth } from "./AuthContext";
import BookingForm from "./BookingForm";
import ClgSignup from "./ClgSignup";
import ClgSignin from "./ClgSignin";
import UserBookings from "./UserBookings";
import WorkingLogin from "./WorkingLogin";
import WorkingSignup from "./WorkingSignup";
import LogOut from "./LogOut";
import ClgLogout from "./ClgLogout";
// import Faqs from './Faqs';
import WorkingClgSignUp from "./WorkingClgSignUp";
import FaqsMain from "./FaqsMain";
import BookedStudents from "./BookedStudents";
import RunningColleges from "./RunningColleges";
import College_demo from "./College_demo";
import RateUsPage from "./RateUsPage";
import Profile from "./Profile";
import ContactCollege from "./ContactCollege";
import AboutCollege from "./AboutCollege";
import AboutStudent from "./AboutStudent";
import ContactStudent from "./ContactStudent";
import HomeBeforeLogin from "./HomeBeforeLogin";
import HomeStudent from "./HomeStudent";
import HomeCollege from "./HomeCollege";
import ReviewPage from "./ReviewPage";
import AnimationCountDown from "./AnimationCountDown";
import ThankBooking from "./ThankBooking";
import CoursePage from "./CoursePage";
import Thankworkshop from "./Thankworkshop";
import CollegeStartUp from "./CollegeStartUp";
function App() {
  const { isAuthenticated, isclgAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/signup' element={<Signup/>}> </Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/ClgSignup'element={<ClgSignup/>}></Route>
      <Route path='/ClgSignin'element={<ClgSignin/>}></Route> */}
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<HomeBeforeLogin />}>
            {" "}
          </Route>

          {isAuthenticated ? (
            <>
              <Route path="/logOut" element={<LogOut />}>
                {" "}
              </Route>
              <Route path="/course-page" element={<CoursePage />} />
              <Route path="/rateuspage" element={<RateUsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/workshops" element={<Workshops />}></Route>
              <Route path="/userbookings" element={<UserBookings />}></Route>
              <Route path="/faqs" element={<FaqsMain />}></Route>
              <Route path="/about" element={<AboutStudent />}>
                {" "}
              </Route>
              <Route path="/contact" element={<ContactStudent />}>
                {" "}
              </Route>
              <Route path="/homeStu" element={<HomeStudent />}>
                {" "}
              </Route>
              <Route path="/reviewpage" element={<ReviewPage />}></Route>
              <Route path="/countdown" element={<AnimationCountDown />}></Route>
              <Route path="/thankbooking" element={<ThankBooking />}>
                {" "}
              </Route>
            </>
          ) : (
            <Route
              path="*"
              element={
                <>
                  {" "}
                  <WorkingLogin />
                </>
              }
            />
          )}

          <Route path="/working_login" element={<WorkingLogin />}></Route>
          <Route path="/WorkingSignup" element={<WorkingSignup />}></Route>
          <Route
            path="/WorkingClgSignUp"
            element={<WorkingClgSignUp />}
          ></Route>
          <Route path="*" element={<Error />}></Route>

          {isclgAuthenticated ? (
            <>
              <Route path="/logOut" element={<LogOut />}>
                {" "}
              </Route>
              <Route path="/aboutclg" element={<AboutCollege />}>
                {" "}
              </Route>
              <Route path="/contactclg" element={<ContactCollege />}>
                {" "}
              </Route>
              <Route path="/addworkshops" element={<College_demo />}></Route>
              <Route path="/thankworkshop" element={<Thankworkshop/>}></Route>
              <Route path="/collegestartup" element={<CollegeStartUp/>}></Route>
              <Route
                path="/studentbookings"
                element={<BookedStudents />}
              ></Route>
              <Route
                path="/runningworkshops"
                element={<RunningColleges />}
              ></Route>
              <Route path="/clglogout" element={<ClgLogout />}></Route>
              <Route path="/homeClg" element={<HomeCollege />}>
                {" "}
              </Route>
            </>
          ) : (
            <>
              {" "}
              <Route path="*" element={<WorkingLogin />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
