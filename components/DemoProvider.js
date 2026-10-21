"use client";
// Shares two demo actions app-wide: openDemo(title, note) shows a dialog,
// notify(message) shows a toast. No backend: everything stays in the browser.
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

const DemoContext = createContext(null);
export const useDemo = () => useContext(DemoContext);

export default function DemoProvider({ children }) {
  const dialogRef = useRef(null);
  const timer = useRef(null);
  const [dialog, setDialog] = useState({ title: "", note: "" });
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 3500);
  }, []);

  const openDemo = useCallback((title, note = "") => {
    setDialog({ title, note });
    dialogRef.current?.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  // Close when the backdrop is clicked.
  useEffect(() => {
    const el = dialogRef.current;
    const onClick = (e) => { if (e.target === el) el.close(); };
    el?.addEventListener("click", onClick);
    return () => el?.removeEventListener("click", onClick);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    close();
    notify(`Demo only: no account was created for ${email}.`);
    setEmail("");
  };

  return (
    <DemoContext.Provider value={{ openDemo, notify }}>
      {children}
      <dialog ref={dialogRef} className="dialog" aria-labelledby="dialog-title">
        <button className="dialog-close" onClick={close} aria-label="Close dialog"><X size={18} /></button>
        <h2 id="dialog-title">{dialog.title}</h2>
        <p className="muted">{dialog.note || "This is a front-end demo. Enter an email to see how the flow would feel."}</p>
        <form onSubmit={submit} className="dialog-form">
          <label htmlFor="demo-email">Work email</label>
          <input id="demo-email" type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn btn-primary">Continue</button>
        </form>
        <p className="fine">Nothing is stored or sent. Payments and accounts are not implemented.</p>
      </dialog>
      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        <CheckCircle2 size={18} /> {toast}
      </div>
    </DemoContext.Provider>
  );
}
