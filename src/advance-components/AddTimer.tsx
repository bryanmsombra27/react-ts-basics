import { useRef } from "react";

import Button from "./components/Button.tsx";
import Form, { FormHandle } from "./components/Form.tsx";
import Input from "./components/Input.tsx";
import { useTimersContext } from "./store/TimersContext.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    form.current?.clear();
    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration,
    });
  }

  return (
    <Form
      ref={form}
      onSave={handleSaveTimer}
      id="add-timer"
    >
      <Input
        type="text"
        label="Name"
        id="name"
      />
      <Input
        type="number"
        label="Duration"
        id="duration"
      />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
