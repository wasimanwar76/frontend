import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// Define constants for messages
const SUCCESS_MESSAGE = "Payment verified successfully!";
const FAILURE_MESSAGE = "Payment verification failed.";

const VerifyPayment = () => {
  const [searchParams] = useSearchParams();

  // State variables
  const [clientTxnId, setClientTxnId] = useState("");
  const [txnId, setTxnId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect to update state when component mounts
  useEffect(() => {
    const fetchedClientTxnId = searchParams.get("client_txn_id");
    const fetchedTxnId = searchParams.get("txn_id");

    if (fetchedClientTxnId) setClientTxnId(fetchedClientTxnId);
    if (fetchedTxnId) setTxnId(fetchedTxnId);
  }, [searchParams]);

  // Function to verify payment
  const verifyPayment = async () => {
    if (!clientTxnId) return;

    setLoading(true);
    setMessage(""); // Reset message before new verification

    try {
      const todayDate = new Date().toLocaleDateString("en-GB"); // Format as "DD-MM-YYYY"
      const response = await axios.post(
        `https://api.ekqr.in/api/check_order_status`,
        {
          key: "a809e24e-34fd-43c0-aac0-075394bf150b",
          client_txn_id: clientTxnId,
          txn_date: todayDate,
        }
      );

      // Check the response to determine the payment status
      if (response.data.status === "success") {
        setMessage(SUCCESS_MESSAGE);
      } else {
        setMessage(FAILURE_MESSAGE);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setMessage(FAILURE_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Verify Payment</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifyPayment(); // Call the verification function
        }}
      >
        <div>
          <label>Client Transaction ID:</label>
          <input
            type="text"
            value={clientTxnId}
            onChange={(e) => setClientTxnId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Transaction ID:</label>
          <input
            type="text"
            value={txnId}
            onChange={(e) => setTxnId(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify Payment"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyPayment;
