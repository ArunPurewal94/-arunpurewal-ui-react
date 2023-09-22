import { Button } from "@arun-purewal/ui-react";

function App() {
  return (
    <div className="p-10 space-y-2 space-x-2">
      <>
        <Button>DEFAULT</Button>
        <Button variant={"secondary"}>SECONDARY</Button>
        <Button variant={"destructive"}>DESTRUCTIVE</Button>
        <Button variant={"ghost"}>GHOST</Button>
        <Button variant={"link"}>LINK</Button>
        <Button variant={"outline"}>OUTLINE</Button>
      </>
    </div>
  );
}

export default App;
