import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  DocumentData,
} from "firebase/firestore";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const user = await currentUser();
  const q = query(collection(db, "deudas"), where("userId", "==", user?.id));
  const querySnapshot = await getDocs(q);
  let docs: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });

  return NextResponse.json({
    docs,
  });
}

export async function POST(request: Request) {
  const user = await currentUser();
  const data = await request.json();

  console.log("DATA", data.body);
  const duedaten = Date.parse(data.dueDate);
  const due = new Date(duedaten);
  const today = new Date();
  console.log("typeof duedate", typeof duedaten);
  today.setHours(0, 0, 0, 0);

  const timeDiff = due.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  let status = "";

  if (daysDiff > 5) {
    status = "al-día";
  } else if (daysDiff >= 0) {
    status = "atrasado";
  } else {
    status = "vencido";
  }

  const docRef = await addDoc(collection(db, "deudas"), {
    creditor: data.creditor,
    dueDate: data.dueDate,
    interestRate: data.interestRate,
    remaining: data.remaining,
    status,
    totalAmount: data.totalAmount,
    userId: user?.id,
  });
  console.log("Document written with ID: ", docRef.id);
  return NextResponse.json({
    data,
  });
}
