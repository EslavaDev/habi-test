import { useReducer } from 'react';
import { reducersApartaments } from './reducers';
import MockData from '../../mock/apartaments-mock.json';
import { convertArrayToJson, generateObjectWithCount } from '../../utils/converts';

export const useContainerApartaments = initialState => {
  let initial = initialState;

  const stateLocal = localStorage.getItem('apartments');
  if (stateLocal) {
    initial = JSON.parse(stateLocal);
  }
  const [state, dispatch] = useReducer(reducersApartaments, initial);
  const generateApartment = generateObjectWithCount(5);
  const generateOwner = generateObjectWithCount(5);

  const fetchApartaments = (refresh = false) => {
    let jsonMock = null;
    let arrayMock = null;
    if (refresh) {
      const localData = JSON.parse(stateLocal);
      console.log(localData);
      if (localData?.apartaments?.length > 0) {
        jsonMock = convertArrayToJson(localData.apartaments);
        arrayMock = localData.apartaments;
      } else {
        jsonMock = convertArrayToJson(MockData);
        arrayMock = MockData;
      }
    } else {
      const { apartaments } = state;
      jsonMock = convertArrayToJson(apartaments);
      arrayMock = apartaments;
    }
    localStorage.setItem('apartments', JSON.stringify({ ...state, apartaments: arrayMock, apartamentsMap: jsonMock }));
    dispatch({
      type: '@@FETCH',
      payload: {
        json: jsonMock,
        array: arrayMock,
      },
    });
  };

  const likeApartament = id => {
    const { apartamentsMap, apartamentsLike } = state;
    const newApartamentLike = { ...apartamentsLike };
    if (!newApartamentLike[id]) {
      newApartamentLike[id] = apartamentsMap[id];
    } else {
      delete newApartamentLike[id];
    }
    localStorage.setItem('apartments', JSON.stringify({ ...state, apartamentsLike: newApartamentLike }));
    dispatch({
      type: '@@LIKE',
      payload: newApartamentLike,
    });
  };

  const filterApartaments = ({ location, date }) => {
    const { apartaments } = state;
    const apartamentsFilter = apartaments.filter(apartment => {
      if (location && date) {
        const filter = apartment.location.includes(location) && apartment.date.includes(date);
        return filter;
      }
      if (location) {
        const filter = apartment.location.includes(location);
        return filter;
      }
      const filter = apartment.date.includes(date);
      return filter;
    });
    dispatch({
      type: '@@FILTER',
      payload: convertArrayToJson(apartamentsFilter),
    });
  };

  const removeApartment = id => {
    const { apartamentsMap, apartamentsLike } = state;
    const newApartmentMap = { ...apartamentsMap };
    const newApartmentsLike = { ...apartamentsLike };
    delete newApartmentMap[id];
    if (newApartmentsLike[id]) {
      delete newApartmentsLike[id];
    }
    const payload = {
      apartaments: newApartmentMap,
      apartamentsLike: newApartmentsLike,
    };
    localStorage.setItem('apartments', JSON.stringify({ ...state, ...payload }));
    dispatch({
      type: '@@REMOVE',
      payload: {
        aparments: newApartmentMap,
        likes: newApartmentsLike,
      },
    });
  };

  const addApartament = ({ owner: ownerTemp, ...values }) => {
    const { apartaments: apartamentsTemp, apartamentsMap: apartamentsMapTemp } = state;
    const ownerId = generateOwner.next().value;
    const apartamentId = generateApartment.next().value;

    const newValues = { ...values, id: `apt${apartamentId}`, owner: { ...ownerTemp, id: `own${ownerId}` } };

    const apartaments = [...apartamentsTemp, newValues];
    const apartamentsMap = { ...apartamentsMapTemp, [newValues.id]: newValues };

    const payload = {
      apartaments,
      apartamentsMap,
    };

    localStorage.setItem('apartments', JSON.stringify({ ...state, ...payload }));

    dispatch({
      type: '@@ADD',
      payload: {
        apartaments,
        apartamentsMap,
      },
    });
  };
  return {
    data: {
      ...state,
    },
    mutations: {
      fetchApartaments,
      likeApartament,
      filterApartaments,
      removeApartment,
      addApartament,
    },
  };
};
