import axios from "axios"
    
export const customAxios = axios.create({
    baseURL:"http://localhost:8080/managerUi/jpa/",
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    withCredentials: true
});

export const customAxiosAirflow = axios.create({
    baseURL:"http://localhost:8080/manager-ui/airflow/",
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      withCredentials: true
})

export const customAxiosConnection = axios.create({
    baseURL:"http://localhost:8080/managerUi/connection/",
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      withCredentials: true
})
export const customAxiosCron = axios.create({
    baseURL:"http://localhost:8080/managerUi/cron/",
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      withCredentials: true
})