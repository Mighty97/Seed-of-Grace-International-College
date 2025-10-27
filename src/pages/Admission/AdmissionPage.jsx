import React, { useState } from 'react';
import { 
  FileText, CreditCard, CheckCircle, AlertCircle, 
  Download, Upload, User, Mail, Phone, Calendar,
  MapPin, Users, Book, Lock, DollarSign, ArrowRight
} from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './AdmissionPage.css'

export function AdmissionPage() {
  const [currentStep, setCurrentStep] = useState('instructions');
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [formData, setFormData] = useState({
    // Student Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    // Parent Info
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    // Academic Info
    previousSchool: '',
    gradeApplying: '',
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
      setCurrentStep('application');
    }, 2000);
    setPaymentStatus('processing');
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! You will receive a confirmation email shortly.');
  };

  const instructions = [
    {
      step: 1,
      title: "Read Requirements",
      description: "Review all admission requirements and ensure you meet the criteria for your desired grade level."
    },
    {
      step: 2,
      title: "Make Payment",
      description: "Pay the non-refundable application fee of $50 using your credit/debit card."
    },
    {
      step: 3,
      title: "Fill Application Form",
      description: "Complete the online application form with accurate information about the student and parents."
    },
    {
      step: 4,
      title: "Upload Documents",
      description: "Upload required documents including birth certificate, previous school records, and passport photo."
    },
    {
      step: 5,
      title: "Submit & Wait",
      description: "Submit your application and wait for our admission team to review. You'll receive updates via email."
    }
  ];

  const requirements = [
    "Birth certificate or valid identification",
    "Recent passport photograph",
    "Academic records from previous school",
    "Medical certificate (not older than 6 months)",
    "Proof of residence",
    "Parent/Guardian identification"
  ];

  return (
    <>
      <Header />

      <div className="admission-page">
        {/* Hero Section */}
        <section className="admission-hero">
          <div className="hero-content">
            <h1 className="hero-title">Admissions 2025</h1>
            <p className="hero-subtitle">Begin your journey to excellence with us</p>
          </div>
        </section>

        {/* Main Container */}
        <div className="admission-container">
          {/* Step Indicators */}
          <div className="step-indicators">
            <div className={`step-indicator ${currentStep === 'instructions' ? 'active' : ''} ${paymentStatus === 'success' ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Instructions</div>
            </div>
            <div className={`step-indicator ${currentStep === 'payment' ? 'active' : ''} ${paymentStatus === 'success' ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Payment</div>
            </div>
            <div className={`step-indicator ${currentStep === 'application' ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Application</div>
            </div>
          </div>

          {/* Instructions Section */}
          {currentStep === 'instructions' && (
            <div className="content-section">
              <h2 className="section-title">How to Apply</h2>
              <p className="section-description">
                Follow these simple steps to complete your admission application. 
                Please read all instructions carefully before proceeding.
              </p>

              <div className="instructions-grid">
                {instructions.map((instruction) => (
                  <div key={instruction.step} className="instruction-card">
                    <div className="instruction-number">{instruction.step}</div>
                    <div className="instruction-content">
                      <h3>{instruction.title}</h3>
                      <p>{instruction.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="section-subtitle">
                <FileText size={24} />
                Required Documents
              </h3>
              <div className="requirements-list">
                {requirements.map((req, index) => (
                  <div key={index} className="requirement-item">
                    <CheckCircle size={20} className="requirement-icon" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              <div className="alert alert-info">
                <AlertCircle size={24} />
                <span>Application fee is non-refundable. Please ensure all information is correct before submission.</span>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary" onClick={() => setCurrentStep('payment')}>
                  Proceed to Payment
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Payment Section */}
          {currentStep === 'payment' && (
            <div className="content-section">
              <div className="payment-section">
                <h2 className="section-title">Application Fee Payment</h2>
                <p className="section-description">
                  Complete the payment to unlock the application form
                </p>

                <div className="payment-amount-card">
                  <div className="payment-label">Application Fee</div>
                  <div className="payment-amount">$50</div>
                  <div className="payment-note">Non-refundable • Secure Payment</div>
                </div>

                {paymentStatus === 'pending' && (
                  <>
                    <div className="form-group">
                      <label className="form-label">
                        Cardholder Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Card Number <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        className="form-input"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength="19"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Expiry Date <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          className="form-input"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          maxLength="5"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          CVV <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          className="form-input"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          maxLength="3"
                        />
                      </div>
                    </div>

                    <div className="action-buttons">
                      <button className="btn btn-secondary" onClick={() => setCurrentStep('instructions')}>
                        Back
                      </button>
                      <button className="btn btn-primary" onClick={handlePayment}>
                        <CreditCard size={20} />
                        Pay $50
                      </button>
                    </div>
                  </>
                )}

                {paymentStatus === 'processing' && (
                  <div className="success-message">
                    <div className="alert alert-info">
                      <AlertCircle size={24} />
                      <span>Processing your payment... Please wait.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Application Form Section */}
          {currentStep === 'application' && (
            <div className="content-section">
              <h2 className="section-title">Application Form</h2>
              <p className="section-description">
                Please fill out all required fields with accurate information
              </p>

              {paymentStatus !== 'success' && (
                <div className="locked-form">
                  <div style={{ filter: 'blur(3px)', pointerEvents: 'none' }}>
                    {/* Dummy form content */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-input" disabled />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-input" disabled />
                      </div>
                    </div>
                  </div>
                  <div className="locked-overlay">
                    <div className="lock-icon-wrapper">
                      <Lock size={50} color="white" />
                    </div>
                    <div className="locked-message">Payment Required</div>
                    <p className="locked-description">
                      Please complete the payment to access the application form
                    </p>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setCurrentStep('payment')}>
                      Make Payment
                    </button>
                  </div>
                </div>
              )}

              {paymentStatus === 'success' && (
                <>
                  <div className="alert alert-info">
                    <CheckCircle size={24} />
                    <span>Payment successful! You can now complete your application.</span>
                  </div>

                  {/* Student Information */}
                  <h3 className="section-subtitle">
                    <User size={24} />
                    Student Information
                  </h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Date of Birth <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        className="form-input"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Gender <span className="required">*</span>
                      </label>
                      <select
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Address <span className="required">*</span>
                    </label>
                    <textarea
                      name="address"
                      className="form-textarea"
                      placeholder="Enter full address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Parent Information */}
                  <div className="section-divider">
                    <h3 className="section-subtitle">
                      <Users size={24} />
                      Parent/Guardian Information
                    </h3>

                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        className="form-input"
                        placeholder="Parent full name"
                        value={formData.parentName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="parentEmail"
                          className="form-input"
                          placeholder="parent@example.com"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Phone Number <span className="required">*</span>
                        </label>
                        <input
                          type="tel"
                          name="parentPhone"
                          className="form-input"
                          placeholder="+1 234 567 8900"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="section-divider">
                    <h3 className="section-subtitle">
                      <Book size={24} />
                      Academic Information
                    </h3>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Previous School
                        </label>
                        <input
                          type="text"
                          name="previousSchool"
                          className="form-input"
                          placeholder="Previous school name"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Grade Applying For <span className="required">*</span>
                        </label>
                        <select
                          name="gradeApplying"
                          className="form-select"
                          value={formData.gradeApplying}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Grade</option>
                          <option value="grade1">Grade 1</option>
                          <option value="grade2">Grade 2</option>
                          <option value="grade3">Grade 3</option>
                          <option value="grade4">Grade 4</option>
                          <option value="grade5">Grade 5</option>
                          <option value="grade6">Grade 6</option>
                          <option value="grade7">Grade 7</option>
                          <option value="grade8">Grade 8</option>
                          <option value="grade9">Grade 9</option>
                          <option value="grade10">Grade 10</option>
                          <option value="grade11">Grade 11</option>
                          <option value="grade12">Grade 12</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="section-divider">
                    <h3 className="section-subtitle">
                      <Upload size={24} />
                      Upload Documents
                    </h3>

                    <div className="alert alert-warning">
                      <AlertCircle size={24} />
                      <span>Please upload clear scanned copies or photos of all required documents (Max 5MB each)</span>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Birth Certificate <span className="required">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-input"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Passport Photograph <span className="required">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-input"
                        accept=".jpg,.jpeg,.png"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Previous School Records
                      </label>
                      <input
                        type="file"
                        className="form-input"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Medical Certificate
                      </label>
                      <input
                        type="file"
                        className="form-input"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button className="btn btn-secondary" onClick={() => setCurrentStep('payment')}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmitApplication}>
                      <CheckCircle size={20} />
                      Submit Application
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};


