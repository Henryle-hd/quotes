import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";

export default function Quotecard() {
  return (
    <main className="flex justify-center items-center mt-3 flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Card className="w-96 h-96 border shadow">
          <CardContent className="flex flex-col gap-2 justify-center items-center h-full w-full">
            <p className="text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <CardFooter>
              <h2>Henry Dioniz</h2>
            </CardFooter>
          </CardContent>
        </Card>
        <Separator />
      </div>
    </main>
  );
}
