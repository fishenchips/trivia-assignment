import { getSessionToken } from "@/queries/get-token";
import { resetToken } from "@/queries/reset-token";

export const ResetToken = () => {
  const handleResetToken = () => {
    resetToken();
    getSessionToken();
    window.location.reload();
  };

  return (
    <div className="text-center">
      <p>You need to reset your token to play.</p>
      <button
        className="text-slate-500 cursor-pointer"
        onClick={handleResetToken}
      >
        Reset
      </button>
    </div>
  );
};
