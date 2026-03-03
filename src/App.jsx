import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import AffiliateDashboard from "./Pages/Affiliate/AffiliateDashboardPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import HomePage from "./Components/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import CourseDetails from "./Pages/CourseDetails";
import AboutPage from "./Pages/AboutPage";
import CoursePage from "./Pages/CoursePage";
import ContactPage from "./Pages/ContactPage";
import AffiliateProfile from "./Pages/Affiliate/AffiliateProfilePage";
import AffiliateWithdrawlPage from "./Pages/Affiliate/AffiliateWithdrawlPage";
import AffiliateDownloadReportPage from "./Pages/Affiliate/AffiliateDownloadReportPage";
import AffiliateGenerateUrlPage from "./Pages/Affiliate/AffiliateGenerateUrlPage";
import CourseLearn from "./Pages/CourseLearn";
import CourseLesson from "./Pages/CourseLesson";
import CourseTest from "./Pages/CourseTest";
import TestHistory from "./Pages/TestHistory";
import CertificatePage from "./Pages/CertificatePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Courses from "./Pages/Admin/Courses";
import AddCourse from "./Pages/Admin/AddCourse";
import EditCourse from "./Pages/Admin/EditCourse";
import AffiliateLoginPage from "./Pages/Affiliate/AffiliateLoginPage";
import AffiliateRegister from "./Pages/Affiliate/AffiliateRegister";
import StudentProfile from "./Pages/Student/StudentProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/affiliate/dashboard" element={<AffiliateDashboard />} />
          <Route path="/affiliate/my-profile" element={<AffiliateProfile />} />
          <Route
            path="/affiliate/withdrawal-request"
            element={<AffiliateWithdrawlPage />}
          />
          <Route
            path="/affiliate/download-report"
            element={<AffiliateDownloadReportPage />}
          />
          <Route
            path="/affiliate/generate-url"
            element={<AffiliateGenerateUrlPage />}
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/affiliate-login" element={<AffiliateLoginPage />} />
          <Route path="/affiliate-register" element={<AffiliateRegister />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/learn/:slug"
            element={
              <ProtectedRoute>
                <CourseLearn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn/:slug/:moduleIndex/:lessonIndex"
            element={
              <ProtectedRoute>
                <CourseLesson />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test/:slug"
            element={
              <ProtectedRoute>
                <CourseTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test-history"
            element={
              <ProtectedRoute>
                <TestHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/certificate/:slug"
            element={
              <ProtectedRoute>
                <CertificatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/profile"
            element={
              <ProtectedRoute>
                <StudentProfile />
              </ProtectedRoute>
            }
          />

          <Route path="/admin/courses/add" element={<AddCourse />} />
          <Route path="/admin/courses/edit/:id" element={<EditCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
