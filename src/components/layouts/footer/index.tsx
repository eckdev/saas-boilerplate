import { Logo } from "../logo";

export default function Footer() {
  return (
    <footer className="mt-32 flex flex-col items-center space-y-8 border-t-[0.5px] py-12">
      <Logo />
      <p className="text-sm text-zinc-500">
        ©SaasBoilerplate - All rights reserved
      </p>
    </footer>
  );
}