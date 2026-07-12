require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const {
  connectDB,
  syncDatabase,
} = require("./config/database");

const createSchool = require("./seed/schoolSeeder");
const createAdmin = require("./seed/adminSeeder");

const app = express();

/*
|--------------------------------------------------------------------------
| Trust Proxy
|--------------------------------------------------------------------------
*/

app.set("trust proxy", 1);

/*
|--------------------------------------------------------------------------
| Security Middleware
|--------------------------------------------------------------------------
*/

app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  "/uploads",
  express.static("uploads")
);

/*
|--------------------------------------------------------------------------
| Logger
|--------------------------------------------------------------------------
*/

app.use(morgan("dev"));

/*
|--------------------------------------------------------------------------
| Rate Limiter
|--------------------------------------------------------------------------
*/

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    application: "School ERP",
    status: "Running",
  });
});

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    success: true,
    message: "School ERP API Running",
  });
});

/*
|--------------------------------------------------------------------------
| Core Routes
|--------------------------------------------------------------------------
*/

app.use(
  "/api/v1/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/v1/students",
  require("./routes/studentRoutes")
);

app.use(
  "/api/v1/teachers",
  require("./routes/teacherRoutes")
);

app.use(
  "/api/v1/attendance",
  require("./routes/attendanceRoutes")
);

app.use(
  "/api/v1/fees",
  require("./routes/feeRoutes")
);

app.use(
  "/api/v1/exams",
  require("./routes/examRoutes")
);

app.use(
  "/api/v1/library",
  require("./routes/libraryRoutes")
);

app.use(
  "/api/v1/notices",
  require("./routes/noticeRoutes")
);

app.use(
  "/api/v1/complaints",
  require("./routes/complaintRoutes")
);

app.use(
  "/api/v1/notifications",
  require("./routes/notificationRoutes")
);

/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
*/

app.use(
  "/api/v1/dashboard",
  require("./routes/dashboardRoutes")
);

app.use(
  "/api/v1/student-dashboard",
  require("./routes/studentDashboardRoutes")
);

app.use(
  "/api/v1/teacher-dashboard",
  require("./routes/teacherDashboardRoutes")
);

app.use(
  "/api/v1/parent-dashboard",
  require("./routes/parentDashboardRoutes")
);

/*
|--------------------------------------------------------------------------
| Academic Routes
|--------------------------------------------------------------------------
*/

app.use(
  "/api/v1/parents",
  require("./routes/parentRoutes")
);

app.use(
  "/api/v1/classes",
  require("./routes/classRoutes")
);

app.use(
  "/api/v1/subjects",
  require("./routes/subjectRoutes")
);

app.use(
  "/api/v1/timetable",
  require("./routes/timetableRoutes")
);

app.use(
  "/api/v1/results",
  require("./routes/resultRoutes")
);

app.use(
  "/api/v1/reports",
  require("./routes/reportRoutes")
);
app.use(
  "/api/v1/leaves",
  require("./routes/leaveRoutes")
);
app.use(
  "/api/v1/events",
  require("./routes/eventRoutes")
);
app.use(
  "/api/v1/assignments",
  require("./routes/assignmentRoutes")
);
app.use(
  "/api/v1/payroll",
  require("./routes/payrollRoutes")
);
app.use(
  "/api/v1/transport",
  require("./routes/transportRoutes")
);
app.use(
  "/api/v1/hostel",
  require("./routes/hostelRoutes")
);
app.use(
  "/api/v1/online-exams",
  require("./routes/onlineExamRoutes")
);
app.use(
  "/api/v1/roles",
  require("./routes/roleRoutes")
);
app.use(
  "/api/v1/upload",
  require("./routes/uploadRoutes")
);
/*
|--------------------------------------------------------------------------
| 404 Handler
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(
  (err, req, res, next) => {
    console.error(err);

    res.status(
      err.statusCode || 500
    ).json({
      success: false,
      message:
        err.message ||
        "Internal Server Error",
    });
  }
);

/*
|--------------------------------------------------------------------------
| Server Startup
|--------------------------------------------------------------------------
*/

const PORT =
  process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

await syncDatabase();

// Create default school first
await createSchool();

// Then create default admin
await createAdmin();

app.listen(PORT, () => {
      console.log(`
==================================================
🚀 School ERP Server Started
==================================================
🌍 Environment : ${
        process.env.NODE_ENV ||
        "development"
      }
📡 Port        : ${PORT}
🌐 URL         : http://localhost:${PORT}
==================================================
✅ Database Connected
✅ Sequelize Synced
✅ Admin Checked
✅ API Ready
==================================================
`);
    });
  } catch (error) {
    console.error(
      "Server Startup Failed:",
      error
    );

    process.exit(1);
  }
};

startServer();

/*
|--------------------------------------------------------------------------
| Process Handlers
|--------------------------------------------------------------------------
*/

process.on(
  "unhandledRejection",
  (err) => {
    console.error(
      "UNHANDLED REJECTION:",
      err
    );
  }
);

process.on(
  "uncaughtException",
  (err) => {
    console.error(
      "UNCAUGHT EXCEPTION:",
      err
    );
  }
);