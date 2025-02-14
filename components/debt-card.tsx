import Progress from "./ui/progress";
interface DebtCardProps {
  creditor: string;
  totalAmount: number;
  remaining: number;
  interestRate: number;
  dueDate: string;
  status: "al-día" | "atrasado" | "vencido";
}

export function DebtCard({
  creditor,
  totalAmount,
  remaining,
  interestRate,
  dueDate,
  status,
}: DebtCardProps) {
  const progress = ((totalAmount - remaining) / totalAmount) * 100;
  const statusColors = {
    "al-día": "bg-green-300 text-green-800",
    atrasado: "bg-yellow-300 text-yellow-800",
    vencido: "bg-red-300 text-red-800",
  };

  return (
    <div className="mt-4 bg-gray-600 text-white rounded-lg p-4 shadow-sm   mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={`/logos/${creditor.toLowerCase()}.png`}
            className="bg-white p-1 w-8 h-8 rounded-full object-contain"
            alt={creditor}
          />
          <h3 className="font-semibold">{creditor.toUpperCase()}</h3>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-sm ${statusColors[status]}`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-semibold">Saldo restante:</span>
          <span className="font-medium">${remaining.toLocaleString()}</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="grid grid-cols-2 gap-1 text-sm">
        <div>
          <p className="text-gray-100 font-semibold">Interés</p>
          <p>{interestRate}%</p>
        </div>
        <div>
          <p className="text-gray-100 font-semibold">Próximo vencimiento</p>
          <p>{dueDate}</p>
        </div>
      </div>
    </div>
  );
}
