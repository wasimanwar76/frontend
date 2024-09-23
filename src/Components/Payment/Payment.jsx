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
  const [loading, setLoading] = useState(true);

  // useEffect to update state when component mounts
  useEffect(() => {
    const fetchedClientTxnId = searchParams.get("client_txn_id");
    const fetchedTxnId = searchParams.get("txn_id");

    if (fetchedClientTxnId) setClientTxnId(fetchedClientTxnId);
    if (fetchedTxnId) setTxnId(fetchedTxnId);
  }, [searchParams]);

  // Function to verify payment
  const verifyPayment = async () => {
    try {
      // const apiKey = process.env.REACT_APP_UPIGATEWAY_API_KEY; // Store your API key in an environment variable
      const response = await axios.post(
        "https://api.ekqr.in/api/check_order_status",
        {
          key: "a809e24e-34fd-43c0-aac0-075394bf150b",
          client_txn_id: clientTxnId,
          txn_date: txnId, // Make sure txn_date is formatted correctly
        }
      );

      if (response.data.status && response.data.data.txn_status === "success") {
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

  // Trigger payment verification when the component mounts
  useEffect(() => {
    if (clientTxnId && txnId) {
      verifyPayment();
    } else {
      setLoading(false); // Stop loading if no IDs
    }
  }, [clientTxnId, txnId]);

  return (
    <div>
      <h2>Verify Payment</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Client Transaction ID: {clientTxnId}</h3>
          <h3>Transaction ID: {txnId}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
