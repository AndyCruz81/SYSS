//import MasterLayout from "@/components/MasterLayout";
import MasterLayout from "@/components/MasterLayout";
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <MasterLayout>{children}</MasterLayout>;
}
