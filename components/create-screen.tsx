import React from "react";
// creditor,
//   totalAmount,
//   remaining,
//   interestRate,
//   dueDate,
//   status,
interface CreateFormProps {
  createDebt: ({
    creditor,
    dueDate,
    totalAmount,
    remaining,
    interestRate,
  }: {
    creditor: string;
    dueDate: Date;
    totalAmount: Number;
    remaining: Number;
    interestRate: Number;
  }) => void;
  clerkError: string;
}

const createDebt = async ({
  creditor,
  dueDate,
  totalAmount,
  remaining,
  interestRate,
}: {
  creditor: string;
  dueDate: Date;
  totalAmount: Number;
  remaining: Number;
  interestRate: Number;
}) => {
  try {
    const data = {
      creditor,
      dueDate,
      totalAmount,
      remaining,
      interestRate,
    };
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Error submitting form");
    else {
      console.log(response);
    }
    const result = await response.json();
    console.log("Success:", result);
  } catch (err: any) {
    console.log(JSON.stringify(err, null, 2));
  }
};

function CreateScreen() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          creditor: { value: string };
          dueDate: { value: Date };
          totalAmount: { value: Number };
          remaining: { value: Number };
          interestRate: { value: Number };
        };
        const creditor = target.creditor.value;
        const dueDate = target.dueDate.value;
        const totalAmount = target.totalAmount.value;
        const remaining = target.remaining.value;
        const interestRate = target.interestRate.value;
        createDebt({ creditor, dueDate, totalAmount, remaining, interestRate });
      }}
      className="mt-10 space-y-3 flex flex-col w-[90%] mx-auto"
    >
      <p className="text-gray-100 text-xl font-bold">Añadir una Deuda</p>
      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Creditor
        </label>
        <select
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none"
          name="creditor"
          id="creditor"
        >
          <option value="BBVA">BBVA</option>
          <option value="AZTECA">AZTECA</option>
          <option value="ELEKTRA">ELEKTRA</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Monto total
        </label>

        <input
          name="totalAmount"
          type="number"
          placeholder="Monto total"
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Monto Restante
        </label>
        <input
          name="remaining"
          type="number"
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none "
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Tasa de interés
        </label>
        <input
          name="interestRate"
          type="number"
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none "
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Fecha de vencimiento
        </label>
        <input
          name="dueDate"
          type="date"
          className="bg-[#313141] text-white w-full px-4 py-3 border border-none rounded-md focus:ring-2 focus:ring-green-600 outline-none"
          required
        />
      </div>

      <h2 className="text-red mb-8"></h2>

      <button
        type="submit"
        className="w-full self-center relative overflow-hidden bg-gradient-to-r from-[#087d5a] to-[#00ce88] text-white font-semibold py-3 px-6 rounded-md 
               transition-all duration-200 
               hover:shadow-md hover:scale-[1.02]
               active:scale-90
               focus:outline-none focus:ring-2 focus:ring-white
               shadow-sm "
      >
        Añadir
      </button>
    </form>
  );
}

export default CreateScreen;
