import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import AlertAdminNoWorkOrders from './AlertAdminNoWorkOrders'
import AdminWorkOrderList from './AdminWorkOrderList'
import { axiosPrivate } from '../utils/axios'

function AdminWorkOrderListTomorrow() {
  const [workOrderList, setWorkOrderList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errMsg, setErrMsg] = useState("")



  useEffect(() => {
    console.log("in the today admin work order list");

    const getTodayWorkOrders = async () => {
      try {
        const response = await axiosPrivate('/work-orders/tomorrow');

        if (response.status === 200) {
          const data = await response.data
          setWorkOrderList(data);
          setErrMsg("")
          setIsLoading(false)
        }

      } catch (error) {
        setErrMsg(`${error.message}`)
        setIsLoading(false)
      }
    }

    getTodayWorkOrders()

  }, [])


  return (
    <>
      {isLoading && <Spinner />}

      {errMsg && (
        <div className="alert alert-danger mt-4">
          {errMsg}
        </div>
      )}

      {!isLoading && <AdminWorkOrderList workOrderList={workOrderList} />}

      {(workOrderList.length === 0 & !errMsg & !isLoading) ? <AlertAdminNoWorkOrders /> : ''}

    </>
  )
}

export default AdminWorkOrderListTomorrow