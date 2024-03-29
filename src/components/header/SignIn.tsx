import { User } from 'lucide-react';

function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-2 text-left transition-colors hover:text-gray-400"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>

      <p className="max-w-[190px] text-sm leading-snug">
        <span className="underline">Crie sua conta </span> e guarde suas
        preciosas memórias!
      </p>
    </a>
  );
}

export default SignIn;
