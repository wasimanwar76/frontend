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

  useEffect(() => {
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
        console.log("Respomse", response);

        //   // Check the response to determine the payment status
        //   if (response.data.status === "success") {
        //     setMessage(SUCCESS_MESSAGE);
        //   } else {
        //     setMessage(FAILURE_MESSAGE);
        //   }
      } catch (error) {
        console.error("Error verifying payment:", error);
        setMessage(FAILURE_MESSAGE);
      } finally {
        setLoading(false);
      }
    };
    verifyPayment();
  }, [clientTxnId, txnId]);

  return (
    <div>
      <h2>Verify Payment</h2>
      <h1>{clientTxnId}</h1>
    </div>
  );
};

export default VerifyPayment;
