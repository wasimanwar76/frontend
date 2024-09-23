import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/authContext";

const ViewShiftPlans = () => {
  const { shiftId } = useParams();
  const Navigate = useNavigate();
  const { user } = useAuth();
  const [shiftData, setShiftData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [orderId, setOrderId] = useState(null);

  // Fetch shift data
  async function fetchShiftData() {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/student/shift/${shiftId}`,
        {
          headers: {
            Authorization: `${user?.token}`,
          },
        }
      );
      if (res) {
        setShiftData(res.data.shift);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching shift data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && shiftId) {
      fetchShiftData();
    }
  }, [user, shiftId]);

  // Calculate subscription price based on type
  const calculateSubscriptionPrice = (monthlyPrice, subscriptionType) => {
    switch (subscriptionType) {
      case "Monthly":
        return monthlyPrice;
      case "3 Months":
        return monthlyPrice * 3;
      case "6 Months":
        return monthlyPrice * 6;
      case "12 Months":
        return monthlyPrice * 12;
      default:
        return monthlyPrice;
    }
  };

  // Handle enroll button click
  const handleEnroll = (type, price) => {
    console.log(`Enrolling for ${type} in ${shiftId}`);
    // Send data to backend
    axios
      .post(
        "http://localhost:5000/api/student/enroll", // Adjust API endpoint
        {
          shiftId, // shift ID from params
          subscription_type: type, // selected subscription type
        },
        {
          headers: {
            Authorization: `${user?.token}`,
          },
        }
      )
      .then((response) => {
        // Redirect to the payment URL received from the backend
        console.log(response.data.data);
        window.location.href = response.data.data.payment_url;
      })
      .catch((error) => {
        console.error("Error enrolling:", error);
        // Handle enrollment error (e.g., show error message)
      });
  };

  if (loading) {
    return null; // Display a loading message while fetching data
  }

  if (!shiftData) {
    return <p>No shift data available.</p>; // Handle no shift data
  }

  // Define subscription types
  const subscriptionTypes = ["Monthly", "3 Months", "6 Months", "12 Months"];

  // Use discounted price if available, otherwise use regular price
  const monthlyPrice = shiftData.discounted_price || shiftData.shift_price;

  return (
    <div className="flex flex-wrap items-center justify-evenly min-h-screen bg-gray-100 p-4">
      {subscriptionTypes.map((type) => {
        const price = calculateSubscriptionPrice(monthlyPrice, type);

        return (
          <div
            key={type}
            className="max-w-xs mx-2 my-4 overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
              <h2 className="text-2xl font-semibold text-white">{type} Plan</h2>
              <p className="text-gray-200">
                Perfect for{" "}
                {type === "Monthly" ? "short-term" : type.toLowerCase()}{" "}
                commitments
              </p>
            </div>

            <div className="px-6 py-4">
              <div className="text-4xl font-bold text-gray-800">
                &#8377;{price.toFixed(2)}{" "}
                <span className="text-lg text-gray-600"> / {type}</span>
              </div>
              <p className="text-gray-600">{shiftData.shift_type}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 font-bold">
                Start Time: {shiftData.start_time}
              </p>
              <p className="text-gray-600 font-bold">
                End Time: {shiftData.end_time}
              </p>
              <p className="text-gray-600 font-bold">
                Maximum Seats: {shiftData.max_seats}
              </p>
              <p className="text-gray-600 font-bold">
                Available Seats: {shiftData.available_seats}
              </p>
            </div>

            <div className="px-6 pt-4 pb-6">
              <button
                onClick={() => handleEnroll(type, price)}
                className="block w-full px-4 py-2 font-semibold text-center text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none"
              >
                Enroll Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewShiftPlans;
