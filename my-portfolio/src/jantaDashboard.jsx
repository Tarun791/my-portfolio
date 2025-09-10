import React, { useState } from 'react';
import { Search, MapPin, Calendar, User, IndianRupee, AlertTriangle, CheckCircle, Clock, ArrowLeft, Lock, Edit, Save, X, Shield, LogOut } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Static dummy data
const projectsData = [
  {
    id: 1,
    name: "Metro Station Construction Phase 2",
    location: "110001",
    sanctioned: 50000000,
    allocated: 45000000,
    utilized: 32000000,
    progress: 75,
    status: "On Track",
    statusType: "on-time",
    officer: "Rajesh Kumar",
    contractor: "ABC Infrastructure Ltd",
    startDate: "2024-01-15",
    endDate: "2025-06-30",
    description: "Construction of 5 new metro stations with modern facilities and accessibility features."
  },
  {
    id: 2,
    name: "Rural Road Development",
    location: "110002",
    sanctioned: 25000000,
    allocated: 25000000,
    utilized: 18000000,
    progress: 60,
    status: "Slight Delay",
    statusType: "delayed",
    officer: "Priya Sharma",
    contractor: "XYZ Construction Co",
    startDate: "2023-09-01",
    endDate: "2025-03-31",
    description: "Development of 50km rural roads connecting remote villages to main highways."
  },
  {
    id: 3,
    name: "Digital Education Initiative",
    location: "110003",
    sanctioned: 15000000,
    allocated: 12000000,
    utilized: 8000000,
    progress: 40,
    status: "Stalled",
    statusType: "stalled",
    officer: "Amit Singh",
    contractor: "TechEd Solutions",
    startDate: "2024-03-01",
    endDate: "2025-12-31",
    description: "Installation of smart classrooms and digital learning equipment in 100 government schools."
  },
  {
    id: 4,
    name: "Water Supply Network Upgrade",
    location: "110001",
    sanctioned: 35000000,
    allocated: 30000000,
    utilized: 28000000,
    progress: 90,
    status: "On Track",
    statusType: "on-time",
    officer: "Sunita Gupta",
    contractor: "AquaTech Systems",
    startDate: "2023-06-15",
    endDate: "2024-12-31",
    description: "Modernization of water supply infrastructure serving 50,000 households."
  }
];

// Hardcoded officer credentials
const officerCredentials = [
  { username: "officer", password: "1234", name: "Admin Officer" },
  { username: "rajesh", password: "pass123", name: "Rajesh Kumar" },
  { username: "priya", password: "priya2024", name: "Priya Sharma" }
];

// Utility functions
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const getProgressColor = (statusType) => {
  switch (statusType) {
    case 'on-time': return 'bg-green-500';
    case 'delayed': return 'bg-yellow-500';
    case 'stalled': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getStatusBadgeColor = (statusType) => {
  switch (statusType) {
    case 'on-time': return 'bg-green-100 text-green-800';
    case 'delayed': return 'bg-yellow-100 text-yellow-800';
    case 'stalled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Components
const LoginPage = ({ onLogin, onBackToHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const officer = officerCredentials.find(
      cred => cred.username === username && cred.password === password
    );
    
    if (officer) {
      onLogin(officer);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Shield className="mx-auto h-16 w-16 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Officer Login</h2>
              <p className="text-gray-600">Access your project dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                <Lock className="inline h-4 w-4 mr-2" />
                Login
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={onBackToHome}
                className="w-full text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to Citizen Dashboard
              </button>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                <strong>Demo Credentials:</strong><br />
                Username: officer, Password: 1234<br />
                Username: rajesh, Password: pass123<br />
                Username: priya, Password: priya2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateProgressModal = ({ project, onUpdate, onClose }) => {
  const [progress, setProgress] = useState(project.progress);
  const [status, setStatus] = useState(project.status);
  const [statusType, setStatusType] = useState(project.statusType);

  const statusOptions = [
    { value: 'on-time', label: 'On Track', type: 'on-time' },
    { value: 'delayed', label: 'Slight Delay', type: 'delayed' },
    { value: 'stalled', label: 'Stalled', type: 'stalled' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(project.id, {
      progress: parseInt(progress),
      status: status,
      statusType: statusType
    });
    onClose();
  };

  const handleStatusChange = (selectedStatus) => {
    const statusOption = statusOptions.find(opt => opt.label === selectedStatus);
    setStatus(selectedStatus);
    setStatusType(statusOption.type);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Update Progress</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{project.name}</h4>
            <p className="text-sm text-gray-600 mb-4">Update project progress and status</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Progress Percentage
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(statusType)}`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const OfficerProjectCard = ({ project, onProjectClick, onUpdateProgress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
          {project.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(project.statusType)}`}>
          {project.status}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Sanctioned:</span>
            <div className="font-semibold text-gray-900">{formatCurrency(project.sanctioned)}</div>
          </div>
          <div>
            <span className="text-gray-500">Utilized:</span>
            <div className="font-semibold text-gray-900">{formatCurrency(project.utilized)}</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-semibold text-gray-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressColor(project.statusType)}`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onProjectClick(project)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm"
          >
            View Details
          </button>
          <button
            onClick={() => onUpdateProgress(project)}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm flex items-center justify-center"
          >
            <Edit className="h-4 w-4 mr-1" />
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

const OfficerDashboard = ({ officer, projects, onProjectClick, onUpdateProgress, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-white mr-3" />
              <div>
                <h1 className="text-xl font-bold text-white">Officer Dashboard</h1>
                <p className="text-indigo-200 text-sm">Welcome, {officer.name}</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="flex items-center text-indigo-200 hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            All Projects
          </h2>
          <p className="text-gray-600">
            {projects.length} project(s) under management
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <OfficerProjectCard 
              key={project.id} 
              project={project} 
              onProjectClick={onProjectClick}
              onUpdateProgress={onUpdateProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ onSearch, onOfficerLogin }) => {
  const [pincode, setPincode] = useState('');

  const handleSearch = () => {
    if (pincode.trim()) {
      onSearch(pincode.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Janta Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Track government projects in your area with transparency
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <MapPin className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Find Projects Near You
              </h2>
              <p className="text-gray-600">
                Enter your pincode to see ongoing government projects in your area
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Pincode (e.g., 110001)"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  maxLength="6"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-lg"
              >
                Show Projects
              </button>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={onOfficerLogin}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Officer Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <div 
      onClick={() => onProjectClick(project)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer border border-gray-200"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
          {project.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(project.statusType)}`}>
          {project.status}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Sanctioned:</span>
            <div className="font-semibold text-gray-900">{formatCurrency(project.sanctioned)}</div>
          </div>
          <div>
            <span className="text-gray-500">Utilized:</span>
            <div className="font-semibold text-gray-900">{formatCurrency(project.utilized)}</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-semibold text-gray-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressColor(project.statusType)}`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectListPage = ({ pincode, projects, onProjectClick, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              Pincode: {pincode}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Government Projects
          </h1>
          <p className="text-gray-600">
            {projects.length} project(s) found in your area
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailPage = ({ project, onBack }) => {
  const handleReportIssue = () => {
    alert('Report Submitted');
  };

  const budgetData = [
    { name: 'Utilized', value: project.utilized, color: '#10b981' },
    { name: 'Remaining Allocated', value: project.allocated - project.utilized, color: '#f59e0b' },
    { name: 'Unallocated', value: project.sanctioned - project.allocated, color: '#ef4444' }
  ];

  const renderTooltip = (props) => {
    if (props.active && props.payload) {
      const data = props.payload[0];
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-600">{formatCurrency(data.value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h1>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusBadgeColor(project.statusType)}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Allocation</h2>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={budgetData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                        >
                          {budgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={renderTooltip} />
                        <Legend 
                          formatter={(value, entry) => (
                            <span style={{ color: entry.color }}>{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Progress</h2>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Overall Progress</span>
                        <span className="text-lg font-semibold text-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className={`h-4 rounded-full ${getProgressColor(project.statusType)} transition-all duration-500`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <IndianRupee className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-700">Budget Details</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sanctioned:</span>
                          <span className="font-medium">{formatCurrency(project.sanctioned)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Allocated:</span>
                          <span className="font-medium">{formatCurrency(project.allocated)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Utilized:</span>
                          <span className="font-medium">{formatCurrency(project.utilized)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <User className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-700">Contact Information</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Project Officer:</span>
                          <span className="font-medium">{project.officer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Contractor:</span>
                          <span className="font-medium">{project.contractor}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-700">Timeline</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date:</span>
                          <span className="font-medium">{new Date(project.startDate).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">End Date:</span>
                          <span className="font-medium">{new Date(project.endDate).toLocaleDateString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <button
                  onClick={handleReportIssue}
                  className="flex items-center justify-center w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const JantaDashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPincode, setSelectedPincode] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loggedInOfficer, setLoggedInOfficer] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [projectToUpdate, setProjectToUpdate] = useState(null);

  const handleSearch = (pincode) => {
    setSelectedPincode(pincode);
    setCurrentPage('list');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPage('detail');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedPincode('');
    setSelectedProject(null);
    setLoggedInOfficer(null);
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    setSelectedProject(null);
  };

  const handleOfficerLogin = () => {
    setCurrentPage('login');
  };

  const handleLogin = (officer) => {
    setLoggedInOfficer(officer);
    setCurrentPage('officer-dashboard');
  };

  const handleLogout = () => {
    setLoggedInOfficer(null);
    setCurrentPage('home');
  };

  const handleUpdateProgress = (project) => {
    setProjectToUpdate(project);
    setShowUpdateModal(true);
  };

  const handleProgressUpdate = (projectId, updates) => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === projectId 
          ? { ...project, ...updates }
          : project
      )
    );
    
    // If we're currently viewing this project in detail, update the selected project too
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(prevProject => ({ ...prevProject, ...updates }));
    }
  };

  const filteredProjects = projects.filter(project => 
    project.location === selectedPincode
  );

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && (
        <HomePage onSearch={handleSearch} onOfficerLogin={handleOfficerLogin} />
      )}
      
      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} onBackToHome={handleBackToHome} />
      )}
      
      {currentPage === 'officer-dashboard' && (
        <OfficerDashboard 
          officer={loggedInOfficer}
          projects={projects}
          onProjectClick={handleProjectClick}
          onUpdateProgress={handleUpdateProgress}
          onLogout={handleLogout}
        />
      )}
      
      {currentPage === 'list' && (
        <ProjectListPage 
          pincode={selectedPincode}
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
          onBack={handleBackToHome}
        />
      )}
      
      {currentPage === 'detail' && selectedProject && (
        <ProjectDetailPage 
          project={selectedProject}
          onBack={handleBackToList}
        />
      )}
      
      {showUpdateModal && projectToUpdate && (
        <UpdateProgressModal
          project={projectToUpdate}
          onUpdate={handleProgressUpdate}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default JantaDashboard;