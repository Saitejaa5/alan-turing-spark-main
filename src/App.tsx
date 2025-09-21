import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Context Providers
import { AuthProvider } from "@/contexts/AuthContext";

// Layout Components
import Navbar from "@/components/Layout/Navbar";

// Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import Resources from "./pages/Resources";
import Leaderboard from "./pages/Leaderboard";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing Page - No Navbar */}
            <Route path="/" element={<Landing />} />
            
            {/* Auth Pages - No Navbar */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main App Pages - With Navbar */}
            <Route path="/dashboard" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Dashboard />
                </main>
              </>
            } />
            
            <Route path="/members" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Members />
                </main>
              </>
            } />
            
            <Route path="/events" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Events />
                </main>
              </>
            } />
            
            <Route path="/announcements" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Announcements />
                </main>
              </>
            } />
            
            <Route path="/resources" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Resources />
                </main>
              </>
            } />
            
            <Route path="/leaderboard" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <Leaderboard />
                </main>
              </>
            } />
            
            <Route path="/admin" element={
              <>
                <Navbar />
                <main className="min-h-screen bg-background">
                  <AdminPanel />
                </main>
              </>
            } />
            
            {/* Redirect old index to landing */}
            <Route path="/index" element={<Navigate to="/" replace />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
