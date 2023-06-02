import { getSessionToken } from "@/queries/get-token";
import { resetToken } from "@/queries/reset-token";

export const ResetToken = () => {
  const handleResetToken = () => {
    resetToken();
    getSessionToken();
    window.location.reload();
  };

  return (
    <div>
      <p>You need to reset your token to play.</p>
      <button onClick={handleResetToken}>Reset</button>
    </div>
  );
};
