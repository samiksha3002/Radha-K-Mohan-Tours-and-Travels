import SignUpForm from '../../components/SignUpForm';

export default function SignUpPage() {
  return (
    // This centers the form on the page
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-24 px-4">
      <SignUpForm />
    </div>
  );
}