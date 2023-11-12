
const baseURL = 'https://checkpoint-manager.ru'
// const baseURL = 'https://cors-anywhere.herokuapp.com/https://checkpoint-manager.ru'
export async function RegApi(
  fullName,
  dateOfBirth,
  mainNumber,
  email,
  password,
) {
  return fetch(`${baseURL}/chpman/authentication/registration`, {
    method: 'POST',
    body: JSON.stringify({
      //what are the required fields
      fullName,
      dateOfBirth,
      mainNumber,
      email,
      password,
    }),
    headers: {
      //What in headers
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'content-type': 'application/json',
      
    //   'Content-Type': 'text/plain'
    },
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        //check form of error response
        throw new Error(errorResponse.message)
      })
    }
    if (response.status === 409) {
      throw new Error('Телефон уже занят')
    }
    if (response.status === 500) {
      throw new Error(' Ошибка отправки email или другая серверная ошибка')
    }
    return response.json()
  })
}

export async function LogInApi(email, password) {
  return fetch(`${baseURL}/chpman/authentication/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 400) {
        throw new Error('Неверный логин или пароль')
    }
    if (response.status === 500) {
      throw new Error('Ошибка сервера при обработке запроса')
    }
    return response.json()
  })
}

export async function getToken(email, password) {
    return fetch(`${baseURL}???`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 400) {
          throw new Error('Неверный логин или пароль')
      }
      if (response.status === 500) {
        throw new Error('Ошибка сервера при обработке запроса')
      }
      return response.json()
    })
  }

export async function refreshToken(refresh) {
  return fetch(`${baseURL}/chpman/authentication/refresh-token`, {
    method: 'POST',
    body: JSON.stringify({
        //что передавать
      refresh,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error('Недействительный токен обновления или проблемы с аутентификацией пользователя')
    }
    if (response.status === 500) {
      throw new Error('Ошибка сервера при обработке запроса на обновление токена')
    }
    return response.json()
  })
}

export async function confirmReg () {
    return fetch(`${baseURL}/chpman/authentication/confirm`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 404) {
        throw new Error('Ссылка подтверждения недействительна или истек срок действия')
      }
      if (response.status === 500) {
        throw new Error('Ошибка сервера')
      }
      return response.json()
    })
  }
