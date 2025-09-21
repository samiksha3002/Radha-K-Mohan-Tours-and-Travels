import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    // This centers the form on the page, using the same style as the signup
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-24 px-4">
      <LoginForm />
    </div>
  );
}