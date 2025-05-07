import { X } from 'lucide-react';
import Sidebar from './Sidebar';

interface SidebarMobileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SidebarMobile({ open, setOpen }: SidebarMobileProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-950 transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setOpen(false)}>
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      <Sidebar />
    </div>
  );
}
