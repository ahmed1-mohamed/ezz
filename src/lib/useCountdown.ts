import { useEffect } from "react";

export function useCountdown(resendCountdown: number, setResendCountdown: React.Dispatch<React.SetStateAction<number>>) {
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setTimeout(() => {
      setResendCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCountdown]);
}
