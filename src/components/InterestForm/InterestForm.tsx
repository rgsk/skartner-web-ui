"use client";

import { useState } from "react";
import { Button } from "../HomePage/HomePage";
import { useJsonData } from "./formHooks";
const interestFormKey = "interestForm";
type FormFields = {
  email: string;
};
interface InterestFormProps {}
const InterestForm: React.FC<InterestFormProps> = ({}) => {
  const { data, update } = useJsonData<FormFields[]>(interestFormKey);
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = () => {
    if (emailInput) {
      const newEntry: FormFields = {
        email: emailInput,
      };
      if (data) {
        update([...data, newEntry]);
      } else {
        update([newEntry]);
      }
      setMessage("Thanks for registering your interest.");
      setEmailInput("");
    }
  };
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="text-2xl">Get future updates and early access</h3>
      <div className="flex flex-col w-full gap-4">
        <input
          className="border border-gray-400 rounded-lg p-2 w-full text-[20px] max-w-[400px]"
          type="text"
          placeholder="Email"
          name="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        {message && <p>{message}</p>}
        <Button onClick={onSubmit} disabled={!emailInput}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default InterestForm;
