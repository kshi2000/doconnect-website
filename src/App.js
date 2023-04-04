import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";

const LandingPage = lazy(() => import("./pages/landing-page"));
const LoginSignupPage = lazy(() => import("./pages/login-signup-page"));
const FeedPage = lazy(() => import("./pages/feed-page"));
const ProfilePage = lazy(() => import("./pages/profile-page"));
const PatientRecordsPage = lazy(() => import("./pages/patient-records-page"));
const EventsPage = lazy(() => import("./pages/events-page"));

const App = () => {
  return (
    <Suspense fallback={<Text>Loading ...</Text>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/patient-records" element={<PatientRecordsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<Text>No page found</Text>} />
      </Routes>
    </Suspense>
  );
};

export default App;
