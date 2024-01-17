// import Container from "./components/Container";
import "./index.css";

//COMPONENTS
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

const App = () => {
  const formRef = useRef<FormHandle>(null);

  const handleSubmit = (value: unknown) => {
    const data = value as { name: string; age: string };

    console.log(data);
    formRef.current?.clear();
  };

  return (
    <main>
      <Form
        onSave={handleSubmit}
        ref={formRef}
      >
        <Input
          label="name"
          id="name"
          type="text"
        />
        <Input
          label="age"
          id="age"
          type="number"
        />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
};

export default App;
