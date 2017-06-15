export const getDataSuccess = payload => ({
  type: 'GET_DATA_SUCCESS',
  payload,
});

export const getDataFail = error => ({
  type: 'GET_DATA_FAIL',
  error,
});

export const createDataSuccess = () => ({
  type: 'CREATE_DATA_SUCCESS',
});

export const createDataFail = error => ({
  type: 'CREATE_DATA_FAIL',
  error,
});

export const updateDataSuccess = payload => ({
  type: 'UPDATE_DATA_SUCCESS',
  payload,
});

export const updateDataFail = error => ({
  type: 'UPDATE_DATA_FAIL',
  error,
});

export const deleteDataSuccess = () => ({
  type: 'DELETE_DATA_SUCCESS',
});

export const deleteDataFail = error => ({
  type: 'DELETE_DATA_FAIL',
  error,
})

const HTTPS = 'https://deliverysomething.herokuapp.com';

export const getData = () => (
  dispatch => (
    fetch(`${HTTPS}/data`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(data => dispatch(getDataSuccess(data)))
      .catch(err => dispatch(getDataFail(err)))
  )
)

export const createData = data => (
  dispatch => (
    fetch(`${HTTPS}/data`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if(res.status === 200){
        dispatch(createDataSuccess())
      } else {
        dispatch(createDataFail({error: 'errorBro!'}))
      }
    }).catch(err => dispatch(createDataFail(err)))
  )
)

export const updateData = data => (
  dispatch => (
    fetch(`${HTTPS}/data/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data.body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((data) => dispatch(updateDataSuccess(data)))
    .then(() => dispatch(getData()))
    .catch((err) => dispatch(updateDataFail(err)))
  )
)

export const deleteData = data => (
  dispatch => (
    fetch(`${HTTPS}/data/${data.id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => dispatch(deleteDataSuccess()))
      .catch(err => dispatch(deleteDataFail(err)))
  )
)
