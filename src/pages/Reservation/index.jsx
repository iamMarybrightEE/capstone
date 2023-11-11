import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './reservation.scss';
import { fetchAPI, submitAPI } from '../../utils/mockAPI';
import ReservationForm from '../../components/ReservationForm';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const Reservation = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response.status === 'success') navigate('completed');
  };

  return (
    <div className="reservation">
      <h2>Table reservation</h2>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  );
};

export default Reservation;
