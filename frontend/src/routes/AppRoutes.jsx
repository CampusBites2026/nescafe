import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";

import Students from "../pages/admin/students/Students";
import AddStudent from "../pages/admin/students/AddStudent";
import EditStudent from "../pages/admin/students/EditStudent";

import Fees from "../pages/admin/fees/Fees";
import AddFee from "../pages/admin/fees/AddFee";
import FeeDashboard from "../pages/admin/fees/FeeDashboard";
import DueFees from "../pages/admin/fees/DueFees";
import CollectFee from "../pages/admin/fees/CollectFee";


import Attendance from "../pages/admin/attendance/Attendance";
import MarkAttendance from "../pages/admin/attendance/MarkAttendance";
import AttendanceAnalytics from "../pages/admin/attendance/AttendanceAnalytics";

import Exams from "../pages/admin/exams/Exams";
import AddExam from "../pages/admin/exams/AddExam";

import Library from "../pages/admin/library/Library";
import AddBook from "../pages/admin/library/AddBook";

import Notices from "../pages/admin/notices/Notices";
import AddNotice from "../pages/admin/notices/AddNotice";

import StudentDashboard from "../pages/student/StudentDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

import Complaints from "../pages/admin/complaints/Complaints";
import ResolveComplaint from "../pages/admin/complaints/ResolveComplaint";

import Notifications from "../pages/admin/notifications/Notifications";
import CreateNotification from "../pages/admin/notifications/CreateNotification";

import MyStudents from "../pages/teacher/MyStudents";
import TeacherAttendance from "../pages/teacher/TeacherAttendance";
import Assignments from "../pages/teacher/TeacherAssignments";

import MyAttendance from "../pages/student/MyAttendance";
import MyFees from "../pages/student/MyFees";
import MyResults from "../pages/student/MyResults";

import Children from "../pages/parent/Children";
import MyChildren from "../pages/parent/MyChildren";
import ChildAttendance from "../pages/parent/ChildAttendance";
import ChildFees from "../pages/parent/ChildFees";
import ChildResults from "../pages/parent/ChildResults";

import PayrollDashboard from "../pages/admin/payroll/PayrollDashboard";
import Salaries from "../pages/admin/payroll/Salaries";
import CreateSalary from "../pages/admin/payroll/CreateSalary";

import ReportsDashboard from "../pages/admin/reports/ReportsDashboard";
import AttendanceReport from "../pages/admin/reports/AttendanceReport";
import FeeReport from "../pages/admin/reports/FeeReport";

import Teachers from "../pages/admin/Teacher/Teachers";
import AddTeacher from "../pages/admin/Teacher/AddTeacher";
import EditTeacher from "../pages/admin/Teacher/EditTeacher";

import Settings from "../pages/admin/settings/Settings";

import Events from "../pages/admin/events/Events";
import CreateEvent from "../pages/admin/events/CreateEvent";


import TeacherAssignments from "../pages/teacher/TeacherAssignments";

import Results from "../pages/results/Results";
import CreateResult from "../pages/results/CreateResult";

import Timetable from "../pages/admin/timetable/Timetable";
import CreateTimetable from "../pages/admin/timetable/CreateTimetable";

import IssueBook from "../pages/admin/library/IssueBook";

import Transport from "../pages/admin/transport/Transport";
import AddVehicle from "../pages/admin/transport/AddVehicle";

import Hostel from "../pages/admin/hostel/Hostel";
import AddRoom from "../pages/admin/hostel/AddRoom";

import Inventory from "../pages/admin/inventory/Inventory";
import AddItem from "../pages/admin/inventory/AddItem";

import Certificates from "../pages/admin/certificates/Certificates";
import GenerateCertificate from "../pages/admin/certificates/GenerateCertificate";

import Visitors from "../pages/admin/visitors/Visitors";
import AddVisitor from "../pages/admin/visitors/AddVisitor";

import Communications from "../pages/admin/communications/Communications";
import SendSMS from "../pages/admin/communications/SendSMS";
import SendEmail from "../pages/admin/communications/SendEmail";

import Admissions from "../pages/admin/admissions/Admissions";
import CreateAdmission from "../pages/admin/admissions/CreateAdmission";

import AcademicCalendar from "../pages/admin/calendar/AcademicCalendar";
import AddCalendarEvent from "../pages/admin/calendar/AddCalendarEvent";

import Employees from "../pages/admin/hr/Employees";
import AddEmployee from "../pages/admin/hr/AddEmployee";
import LeaveRequests from "../pages/admin/hr/LeaveRequests";

import SuperAdminDashboard from "../pages/superadmin/SuperAdminDashboard";
import Schools from "../pages/superadmin/Schools";
import AddSchool from "../pages/superadmin/AddSchool";

import TeacherTimetable from "../pages/teacher/TeacherTimetable";
import TeacherExams from "../pages/teacher/TeacherExams";

import TeacherResults from "../pages/teacher/TeacherResults";
import TeacherNotices from "../pages/teacher/TeacherNotices";
import TeacherProfile from "../pages/teacher/TeacherProfile";

import TeacherLeaveRequest from "../pages/teacher/TeacherLeaveRequest";
import TeacherStudyMaterial from "../pages/teacher/TeacherStudyMaterial";


import StudentProfile from "../pages/student/StudentProfile";
import StudentTimetable from "../pages/student/StudentTimetable";
import StudentAssignments from "../pages/student/StudentAssignments";
import StudentNotices from "../pages/student/StudentNotices";

import StudentLibrary from "../pages/student/StudentLibrary";
import StudentCertificates from "../pages/student/StudentCertificates";

import ParentNotices from "../pages/parent/ParentNotices";
import ParentProfile from "../pages/parent/ParentProfile";

import FeeReceipts from "../pages/parent/FeeReceipts";
import ParentMeetings from "../pages/parent/ParentMeetings";
import ParentMessages from "../pages/parent/ParentMessages";
import ParentLeaveRequests from "../pages/parent/LeaveRequests";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
  {/* Login */}
  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/"
    element={<Navigate to="/admin" />}
  />

      {/* Student Dashboard */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Teacher Dashboard */}
      <Route
        path="/teacher"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />

      {/* Parent Dashboard */}
      <Route
        path="/parent"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ParentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Student Management */}
      <Route
        path="/admin/students"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students/edit/:id"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <EditStudent />
          </ProtectedRoute>
        }
      />

      {/* Fee Management */}
      <Route
        path="/admin/fees"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Fees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/fees/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddFee />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/fees/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <FeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/fees/due"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DueFees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/fees/collect/:id"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <CollectFee />
          </ProtectedRoute>
        }
      />

      {/* Attendance Management */}
      <Route
        path="/admin/attendance"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Attendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/attendance/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <MarkAttendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/attendance/analytics"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AttendanceAnalytics />
          </ProtectedRoute>
        }
      />

      {/* Examination Management */}
      <Route
        path="/admin/exams"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Exams />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/exams/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddExam />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/library"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Library />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/library/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddBook />
          </ProtectedRoute>
        }
      />
        <Route
          path="/admin/notices"
          element={
           <ProtectedRoute allowedRoles={["admin"]}>
            <Notices />
           </ProtectedRoute>
          }
      />
      <Route
        path="/admin/notices/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddNotice />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/complaints"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Complaints />
          </ProtectedRoute>
      }
    />

      <Route
        path="/admin/complaints/:id"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ResolveComplaint />
          </ProtectedRoute>
          
        }
    />
      <Route
        path="/admin/notifications"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Notifications />
          </ProtectedRoute>
        }
    />

      <Route
        path="/admin/notifications/create"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CreateNotification />
            </ProtectedRoute>
      }
    />
      <Route
        path="/teacher/students"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <MyStudents />
          </ProtectedRoute>
      }
    />

    <Route
      path="/teacher/attendance"
      element={
        <ProtectedRoute allowedRoles={["teacher"]}>
          <TeacherAttendance />
        </ProtectedRoute>
      }
    />

    <Route
      path="/teacher/assignments"
      element={
        <ProtectedRoute allowedRoles={["teacher"]}>
          <Assignments />
        </ProtectedRoute>
      }
    />
          {/* Student Portal */}

      <Route
        path="/student/attendance"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <MyAttendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/fees"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <MyFees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/results"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <MyResults />
          </ProtectedRoute>
        }
      />
      {/* Parent Portal */}

      <Route
        path="/parent/children"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <Children />
          </ProtectedRoute>
        }
      />

      <Route
        path="/parent/children/:id/attendance"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ChildAttendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/parent/children/:id/fees"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ChildFees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/parent/children/:id/results"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ChildResults />
          </ProtectedRoute>
        }
      />
      {/* Payroll Management */}
      <Route
        path="/admin/payroll"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <PayrollDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/payroll/salaries"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Salaries />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/payroll/salaries/create"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateSalary />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ReportsDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports/attendance"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AttendanceReport />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports/fees"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <FeeReport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/teachers"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Teachers />
          </ProtectedRoute>
        }
      />

      <Route
      path="/admin/teachers/add"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddTeacher />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/teachers/edit/:id"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <EditTeacher />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/events"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/events/create"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateEvent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/results"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Results />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/results/create"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateResult />
          </ProtectedRoute>
       }
     />

      <Route
        path="/admin/timetable"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Timetable />
          </ProtectedRoute>
       }
     />

     <Route
       path="/admin/timetable/create"
       element={
         <ProtectedRoute allowedRoles={["admin"]}>
           <CreateTimetable />
         </ProtectedRoute>
       }
     />
     <Route
       path="/admin/teachers/add"
       element={
         <ProtectedRoute allowedRoles={["admin"]}>
           <AddTeacher />
         </ProtectedRoute>
       }
    />
    <Route
      path="/admin/teachers/edit/:id"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <EditTeacher />
        </ProtectedRoute>
      }
    />

    <Route
      path="/admin/events"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <Events />
        </ProtectedRoute>
     }
    />

    <Route
      path="/admin/events/create"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <CreateEvent />
        </ProtectedRoute>
    }
    />

    <Route
      path="/admin/library/issue"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <IssueBook />
        </ProtectedRoute>
   }
   />

    <Route
      path="/admin/transport"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <Transport />
        </ProtectedRoute>
   }
   />

    <Route
      path="/admin/transport/add"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AddVehicle />
        </ProtectedRoute>
   }
   />

   <Route
     path="/admin/hostel"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Hostel />
       </ProtectedRoute>
   }
   />

   <Route
     path="/admin/hostel/add-room"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <AddRoom />
       </ProtectedRoute>
   }
   />

   <Route
     path="/admin/inventory"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Inventory />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/inventory/add"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <AddItem />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/certificates"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Certificates />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/certificates/generate"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <GenerateCertificate />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/visitors"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Visitors />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/visitors/add"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <AddVisitor />
       </ProtectedRoute>
  }
/>   

   <Route
     path="/admin/communications"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Communications />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/communications/sms"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <SendSMS />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/communications/email"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <SendEmail />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/admissions"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Admissions />
    </ProtectedRoute>
  }
/>

   <Route
     path="/admin/admissions/create"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <CreateAdmission />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/calendar"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <AcademicCalendar />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/calendar/add"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <AddCalendarEvent />
       </ProtectedRoute>
  }
/>

   <Route
     path="/admin/hr"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <Employees />
       </ProtectedRoute>
  }
/>

    <Route
      path="/admin/hr/add"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AddEmployee />
        </ProtectedRoute>
  }
/>

   <Route
     path="/admin/hr/leaves"
     element={
       <ProtectedRoute allowedRoles={["admin"]}>
         <LeaveRequests />
       </ProtectedRoute>
  }
/>
 
   <Route
     path="/superadmin"
     element={
       <ProtectedRoute allowedRoles={["superadmin"]}>
         <SuperAdminDashboard />
       </ProtectedRoute>
  }
/>

   <Route
     path="/superadmin/schools"
     element={
       <ProtectedRoute allowedRoles={["superadmin"]}>
         <Schools />
       </ProtectedRoute>
  }
/>

   <Route
     path="/superadmin/schools/add"
     element={
       <ProtectedRoute allowedRoles={["superadmin"]}>
         <AddSchool />
       </ProtectedRoute>
  }
/> 

   <Route
     path="/teacher/timetable"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherTimetable />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/exams"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherExams />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/results"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherResults />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/notices"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherNotices />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/profile"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherProfile />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/leave"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherLeaveRequest />
       </ProtectedRoute>
  }
/>

   <Route
     path="/teacher/materials"
     element={
       <ProtectedRoute allowedRoles={["teacher"]}>
         <TeacherStudyMaterial />
       </ProtectedRoute>
  }
/>

   <Route
     path="/student/profile"
     element={<StudentProfile />}
/>

   <Route
     path="/student/timetable"
     element={<StudentTimetable />}
/>

   <Route
     path="/student/assignments"
     element={<StudentAssignments />}
/>

   <Route
     path="/student/notices"
     element={<StudentNotices />}
/>

   <Route
     path="/student/library"
     element={<StudentLibrary />}
/>

   <Route
     path="/student/certificates"
     element={<StudentCertificates />}
/>

<Route path="/parent" element={<ParentDashboard />} />

   <Route
     path="/parent/children"
     element={<MyChildren />}
/>

   <Route
     path="/parent/attendance"
     element={<ChildAttendance />}
/>

   <Route
     path="/parent/fees"
     element={<ChildFees />}
/>

   <Route
     path="/parent/results"
     element={<ChildResults />}
/>

   <Route
     path="/parent/notices"
     element={<ParentNotices />}
/>

   <Route
     path="/parent/profile"
     element={<ParentProfile />}
/>

   <Route
     path="/parent/receipts"
     element={<FeeReceipts />}
/>

   <Route
     path="/parent/meetings"
     element={<ParentMeetings />}
/>

   <Route
     path="/parent/messages"
     element={<ParentMessages />}
/>

   <Route
  path="/parent/leave-request"
  element={<ParentLeaveRequests />}
/>
 </Routes>
  );
};

export default AppRoutes;