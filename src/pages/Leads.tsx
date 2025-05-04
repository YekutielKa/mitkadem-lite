import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Leads() {
  return (
    <div className="max-w-md mx-auto space-y-4 p-4">
      <Label htmlFor="name">Имя клиента</Label>
      <Input id="name" placeholder="Введите имя" />

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Введите email" />
    </div>
  );
}
