import React, { useState } from 'react';
import { 
  Users, UserPlus, GraduationCap, FileText, Download, 
  CreditCard, LogOut, Menu, X, Home, BarChart, Settings,
  Upload, DollarSign, Search, Plus, Edit, Trash2, Printer
} from 'lucide-react';
import { Header } from '../../components/Header'
import './Dashboard.css'

export function Dashboard () {
  const [currentRole, setCurrentRole] = useState('admin');
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: 'Grade 10', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', class: 'Grade 9', email: 'jane@example.com' }
  ]);
  const [staff, setStaff] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', position: 'Math Teacher', email: 'sarah@example.com' },
    { id: 2, name: 'Prof. Mike Brown', position: 'Science Teacher', email: 'mike@example.com' }
  ]);
  const [results, setResults] = useState([
    { id: 1, student: 'John Doe', subject: 'Mathematics', score: 85, grade: 'A' },
    { id: 2, student: 'Jane Smith', subject: 'Science', score: 92, grade: 'A+' }
  ]);

  const roleMenus = {
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'students', label: 'Students', icon: Users },
      { id: 'staff', label: 'Staff', icon: UserPlus },
      { id: 'results', label: 'Results', icon: FileText },
      { id: 'reports', label: 'Reports', icon: BarChart },
      { id: 'settings', label: 'Settings', icon: Settings }
    ],
    teacher: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'upload-results', label: 'Upload Results', icon: Upload },
      { id: 'view-students', label: 'View Students', icon: Users },
      { id: 'assignments', label: 'Assignments', icon: FileText }
    ],
    student: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'results', label: 'My Results', icon: FileText },
      { id: 'assignments', label: 'Assignments', icon: Download },
      { id: 'payments', label: 'Payments', icon: CreditCard },
      { id: 'invoices', label: 'Invoices', icon: Printer }
    ]
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <title>SGIC Portal</title>
      <Header />
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <div className="sidebar-title">School Portal</div>
            <div className="sidebar-role">{currentRole} Dashboard</div>
          </div>

          <div className="sidebar-menu">
            {roleMenus[currentRole].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="role-switcher">
            <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.8 }}>
              Switch Role (Demo)
            </div>
            <button
              className={`role-btn ${currentRole === 'admin' ? 'active-role' : ''}`}
              onClick={() => { setCurrentRole('admin'); setActiveMenu('dashboard'); }}
            >
              Admin
            </button>
            <button
              className={`role-btn ${currentRole === 'teacher' ? 'active-role' : ''}`}
              onClick={() => { setCurrentRole('teacher'); setActiveMenu('dashboard'); }}
            >
              Teacher
            </button>
            <button
              className={`role-btn ${currentRole === 'student' ? 'active-role' : ''}`}
              onClick={() => { setCurrentRole('student'); setActiveMenu('dashboard'); }}
            >
              Student
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}>
          {/* Topbar */}
          <div className="topbar">
            <div className="topbar-left">
              <button className="menu-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="topbar-title">
                {roleMenus[currentRole].find(m => m.id === activeMenu)?.label || 'Dashboard'}
              </div>
            </div>
            <div className="topbar-right">
              <button className="logout-btn">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {/* Admin Dashboard */}
            {currentRole === 'admin' && activeMenu === 'dashboard' && (
              <>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-header">
                      <div className="stat-icon"><Users size={24} /></div>
                    </div>
                    <div className="stat-value">248</div>
                    <div className="stat-label">Total Students</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-header">
                      <div className="stat-icon"><UserPlus size={24} /></div>
                    </div>
                    <div className="stat-value">32</div>
                    <div className="stat-label">Total Staff</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-header">
                      <div className="stat-icon"><GraduationCap size={24} /></div>
                    </div>
                    <div className="stat-value">12</div>
                    <div className="stat-label">Total Classes</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-header">
                      <div className="stat-icon"><DollarSign size={24} /></div>
                    </div>
                    <div className="stat-value">$45K</div>
                    <div className="stat-label">Total Revenue</div>
                  </div>
                </div>
              </>
            )}

            {/* Admin - Students Management */}
            {currentRole === 'admin' && activeMenu === 'students' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Students Management</div>
                  <button className="btn-primary">
                    <Plus size={18} />
                    Add Student
                  </button>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.email}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon edit"><Edit size={18} /></button>
                            <button className="btn-icon delete"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Admin - Staff Management */}
            {currentRole === 'admin' && activeMenu === 'staff' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Staff Management</div>
                  <button className="btn-primary">
                    <Plus size={18} />
                    Add Staff
                  </button>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map(member => (
                      <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.position}</td>
                        <td>{member.email}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon edit"><Edit size={18} /></button>
                            <button className="btn-icon delete"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Teacher - Upload Results */}
            {currentRole === 'teacher' && activeMenu === 'upload-results' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Upload Student Results</div>
                </div>
                <div className="form-group">
                  <label className="form-label">Select Student</label>
                  <select className="form-input">
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-input" placeholder="Enter subject" />
                </div>
                <div className="form-group">
                  <label className="form-label">Score</label>
                  <input type="number" className="form-input" placeholder="Enter score" />
                </div>
                <div className="form-group">
                  <label className="form-label">Grade</label>
                  <input type="text" className="form-input" placeholder="Enter grade" />
                </div>
                <button className="btn-primary">
                  <Upload size={18} />
                  Upload Result
                </button>
              </div>
            )}

            {/* Student - Results */}
            {currentRole === 'student' && activeMenu === 'results' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">My Results</div>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Score</th>
                      <th>Grade</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>85</td>
                      <td>A</td>
                      <td>
                        <button className="btn-primary">
                          <Download size={16} />
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>92</td>
                      <td>A+</td>
                      <td>
                        <button className="btn-primary">
                          <Download size={16} />
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Student - Payments */}
            {currentRole === 'student' && activeMenu === 'payments' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Make Payment</div>
                </div>
                <div className="payment-card">
                  <div className="payment-amount">$2,500</div>
                  <div className="payment-label">Tuition Fee - Semester 1</div>
                </div>
                <div className="form-group">
                  <label className="form-label">Payment Method</label>
                  <select className="form-input">
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-input" placeholder="1234 5678 9012 3456" />
                </div>
                <button className="btn-primary">
                  <CreditCard size={18} />
                  Make Payment
                </button>
              </div>
            )}

            {/* Student - Invoices */}
            {currentRole === 'student' && activeMenu === 'invoices' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Payment Invoices</div>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#INV-001</td>
                      <td>Oct 15, 2025</td>
                      <td>$2,500</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn-primary">
                          <Printer size={16} />
                          Print
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#INV-002</td>
                      <td>Sep 10, 2025</td>
                      <td>$2,500</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn-primary">
                          <Printer size={16} />
                          Print
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Student - Assignments */}
            {currentRole === 'student' && activeMenu === 'assignments' && (
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">Assignments</div>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Title</th>
                      <th>Due Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>Algebra Practice</td>
                      <td>Oct 30, 2025</td>
                      <td>
                        <button className="btn-primary">
                          <Download size={16} />
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>Physics Lab Report</td>
                      <td>Nov 5, 2025</td>
                      <td>
                        <button className="btn-primary">
                          <Download size={16} />
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


