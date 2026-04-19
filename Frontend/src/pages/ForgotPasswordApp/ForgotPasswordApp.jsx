import React, { useState, useEffect } from "react";

// Icon components as SVGs
const Eye = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="gray"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeOff = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="gray"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
    />
  </svg>
);

const Mail = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Lock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const XCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
);

const Shield = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const PasswordResetApp = () => {
  const [currentView, setCurrentView] = useState("forgot");
  const [resetToken, setResetToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");

  const handleForgotPasswordSuccess = (email, otp) => {
    setUserEmail(email);
    setGeneratedOTP(otp);
    setCurrentView("otp");
  };

  const handleOtpSuccess = (token) => {
    setResetToken(token);
    setIsOtpVerified(true);
    setCurrentView("reset");
  };

  const handleOtpBack = () => {
    setCurrentView("forgot");
    setGeneratedOTP("");
  };

  const handleResetSuccess = () => {
    // Reset all state
    setUserEmail("");
    setResetToken("");
    setIsOtpVerified(false);
    setGeneratedOTP("");
    setCurrentView("forgot");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {currentView === "forgot" && (
          <ForgotPasswordForm onSuccess={handleForgotPasswordSuccess} />
        )}
        {currentView === "otp" && (
          <VerifyOTPForm
            email={userEmail}
            generatedOTP={generatedOTP}
            onSuccess={handleOtpSuccess}
            onBack={handleOtpBack}
            onResendOTP={(newOTP) => setGeneratedOTP(newOTP)}
          />
        )}
        {currentView === "reset" && (
          <ResetPasswordForm
            token={resetToken}
            email={userEmail}
            isVerified={isOtpVerified}
            onSuccess={handleResetSuccess}
          />
        )}
        {currentView === "change" && (
          <ChangePasswordForm onSuccess={() => setCurrentView("change")} />
        )}

        <div className="mt-6 text-center space-x-4">
          <button
            onClick={() => setCurrentView("forgot")}
            className={`text-sm transition-colors duration-200 hover:scale-105 ${
              currentView === "forgot"
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Forgot Password
          </button>
          <button
            onClick={() => setCurrentView("change")}
            className={`text-sm transition-colors duration-200 hover:scale-105 ${
              currentView === "change"
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function for password strength
const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: "Enter password", color: "gray" };

  let score = 0;
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  score = Object.values(checks).filter(Boolean).length;

  if (score <= 2) return { score, label: "Weak", color: "red" };
  if (score <= 3) return { score, label: "Fair", color: "yellow" };
  if (score <= 4) return { score, label: "Good", color: "blue" };
  return { score, label: "Strong", color: "green" };
};

// Forgot Password Component
const ForgotPasswordForm = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!email) {
      setMessage("Please enter your email address");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // Simulate API call with enhanced OTP generation
    setTimeout(() => {
      // Generate a random 6-digit OTP
      const generatedOTP = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // In a real app, this would be sent via email service
      console.log(`🔐 OTP for ${email}: ${generatedOTP}`);

      setMessage(`OTP sent successfully to ${email}! Check email for OTP.`);
      setMessageType("success");

      setTimeout(() => {
        onSuccess(email, generatedOTP);
      }, 2000);

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Forgot Password?</h2>
        <p className="text-gray-600 mt-2">
          Enter your email address and we'll send you a verification code to
          reset your password.
        </p>
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg border text-sm ${
            messageType === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center">
            {messageType === "success" ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <XCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={email}
            placeholder="Enter your email address"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 font-medium flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Reset Code"
          )}
        </button>
      </form>
    </div>
  );
};

// OTP Verification Component
const VerifyOTPForm = ({
  email,
  generatedOTP,
  onSuccess,
  onBack,
  onResendOTP,
}) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (otp.length !== 6) {
      setMessage("Please enter a 6-digit OTP");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // Simulate API call with proper OTP validation
    setTimeout(() => {
      if (otp === generatedOTP) {
        setMessage("OTP verified successfully!");
        setMessageType("success");
        setTimeout(() => {
          onSuccess("demo-reset-token-12345");
        }, 1000);
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= maxAttempts) {
          setMessage(
            `Invalid OTP. Maximum attempts reached. Please request a new code.`
          );
          setCanResend(true);
          setCountdown(0);
        } else {
          setMessage(
            `Invalid OTP. ${maxAttempts - newAttempts} attempts remaining.`
          );
        }
        setMessageType("error");
      }
      setLoading(false);
    }, 1000);
  };

  const handleResendOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`🔐 New OTP for ${email}: ${newOTP}`);

    onResendOTP(newOTP);
    setCountdown(60);
    setCanResend(false);
    setAttempts(0);
    setOtp("");
    setMessage("New OTP sent to your email! Check console for demo OTP.");
    setMessageType("success");
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
        <p className="text-gray-600 mt-2">We've sent a 6-digit code to</p>
        <p className="text-gray-800 font-medium">{email}</p>
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg border text-sm ${
            messageType === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center">
            {messageType === "success" ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <XCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter 6-digit code
          </label>
          <input
            type="text"
            id="otp"
            maxLength="6"
            onChange={handleOtpChange}
            value={otp}
            placeholder="000000"
            className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
            disabled={attempts >= maxAttempts && !canResend}
          />
          {attempts > 0 && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              Attempts: {attempts}/{maxAttempts}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            loading ||
            otp.length !== 6 ||
            (attempts >= maxAttempts && !canResend)
          }
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 font-medium mb-4 flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </button>

        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
          {!canResend ? (
            <p className="text-sm text-gray-500">
              Resend OTP in {countdown} seconds
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResendOTP}
              className="text-sm text-blue-600 hover:text-blue-500 hover:scale-105 font-medium flex items-center justify-center mx-auto transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Resend OTP
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onBack}
          className="w-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:scale-[1.02] text-sm font-medium py-2 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Email Entry
        </button>
      </form>
    </div>
  );
};

// Reset Password Component
const ResetPasswordForm = ({ token, email, isVerified, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long");
      setMessageType("error");
      setLoading(false);
      return;
    }

    const strength = getPasswordStrength(password);
    if (strength.score < 3) {
      setMessage("Please choose a stronger password");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log(`✅ Password reset successful for: ${email}`);
      console.log(`🔑 Reset token used: ${token}`);
      setMessage("Password reset successfully!");
      setMessageType("success");
      setTimeout(() => {
        onSuccess();
      }, 1500);
      setLoading(false);
    }, 1000);
  };

  if (!isVerified) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600">
          Please verify your OTP first to reset your password.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
        <p className="text-gray-600 mt-2">
          Create a new secure password for your account
        </p>
        <p className="text-sm text-gray-500 mt-1">Email: {email}</p>
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg border text-sm ${
            messageType === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center">
            {messageType === "success" ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <XCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter new password"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <PasswordStrengthIndicator password={password} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 font-medium flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Resetting...
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

// Change Password Component
const ChangePasswordForm = ({ onSuccess }) => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!passwords.currentPassword) {
      setMessage("Please enter your current password");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("New passwords do not match");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (passwords.newPassword.length < 8) {
      setMessage("Password must be at least 8 characters long");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (passwords.currentPassword === passwords.newPassword) {
      setMessage("New password must be different from current password");
      setMessageType("error");
      setLoading(false);
      return;
    }

    const strength = getPasswordStrength(passwords.newPassword);
    if (strength.score < 3) {
      setMessage("Please choose a stronger password");
      setMessageType("error");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log(`✅ Password changed successfully`);
      setMessageType("success");
      setMessage("Password changed successfully!");
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Change Password</h2>
        <p className="text-gray-600 mt-2">
          Update your password to keep your account secure
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center border ${
            messageType === "success"
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          {messageType === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600 mr-3" />
          )}
          <span
            className={
              messageType === "success" ? "text-green-800" : "text-red-800"
            }
          >
            {message}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Current Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.currentPassword ? "text" : "password"}
              id="currentPassword"
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter current password"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("currentPassword")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPasswords.currentPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            New Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.newPassword ? "text" : "password"}
              id="newPassword"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter new password"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPasswords.newPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showPasswords.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Confirm new password"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPasswords.confirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <PasswordStrengthIndicator password={passwords.newPassword} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 font-medium flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Changing...
            </>
          ) : (
            "Change Password"
          )}
        </button>
      </form>
    </div>
  );
};

// Password Strength Indicator Component
const PasswordStrengthIndicator = ({ password }) => {
  const strength = getPasswordStrength(password);

  const colorClasses = {
    gray: "bg-gray-200",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  const textColorClasses = {
    gray: "text-gray-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    blue: "text-blue-600",
    green: "text-green-600",
  };

  const requirements = [
    { test: password.length >= 8, text: "At least 8 characters" },
    { test: /[a-z]/.test(password), text: "Lowercase letter" },
    { test: /[A-Z]/.test(password), text: "Uppercase letter" },
    { test: /\d/.test(password), text: "Number" },
    {
      test: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      text: "Special character",
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Password Strength
        </span>
        <span
          className={`text-sm font-medium ${textColorClasses[strength.color]}`}
        >
          {strength.label}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div
          className={`h-2 rounded-full ${
            colorClasses[strength.color]
          } transition-all duration-500 ease-in-out`}
          style={{ width: `${(strength.score / 5) * 100}%` }}
        ></div>
      </div>

      <div className="text-xs text-gray-600">
        <p className="mb-2 font-medium">Password requirements:</p>
        <div className="grid grid-cols-1 gap-1">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center">
              {req.test ? (
                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <div className="w-3 h-3 border border-gray-300 rounded-full mr-2 flex-shrink-0"></div>
              )}
              <span className={req.test ? "text-green-600" : "text-gray-500"}>
                {req.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordResetApp;