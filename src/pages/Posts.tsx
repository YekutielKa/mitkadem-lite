import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Posts() {
  return (
    <div className="grid gap-6 p-4 max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Генерация постов</CardTitle>
        </CardHeader>
        <CardContent>
          Здесь будут появляться сгенерированные маркетинговые посты для клиента.
        </CardContent>
      </Card>
    </div>
  );
}
