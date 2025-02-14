// app/components/VerifyForm.tsx
import { FormEvent } from "react";

interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

const VerifyForm = ({ handleVerify, code, setCode }: VerifyFormProps) => {
  return (
    <div className="w-[90%] flex flex-col justify-center mt-12  justify-items-center md:mt-20">
      <p className="mb-6 text-xl font-bold text-gray-200">
        Código de Verificación
      </p>
      <form className="space-y-3" onSubmit={handleVerify}>
        <input
          value={code}
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none pr-12"
          id="code"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          className="w-full self-center relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm "
          type="submit"
        >
          Completar registro
        </button>
      </form>
    </div>
  );
};

export default VerifyForm;
