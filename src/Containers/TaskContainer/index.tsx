import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import taskAPI from '../../api/Task'
import List from './List/index'
import { Task, TasksSelector } from '../../models'
import {
  addTask,
  deleteTask,
  getAllTaskActions,
  searchTask,
  updateTask,
} from '../../redux/actions/Task'
import { loading } from '../../redux/actions/Loading'
import 'react-toastify/dist/ReactToastify.css'
import { API } from '../../constants/API'
const TaskContainer: React.FC = () => {
  const dispatch = useDispatch()
  const task = useSelector((state: TasksSelector) => state.task)
  console.log(task)
  const getAllTask = async () => {
    try {
      dispatch(loading(true))
      const response = await taskAPI.getAllTask()
      if (response.status === API.SUCCESS) {
        dispatch(getAllTaskActions(response.data.reverse()))
      }
      // setTimeout(() => {
      //   dispatch(loading(false))
      // }, 1000)
      dispatch(loading(false))
    } catch (error) {
      dispatch(loading(false))
    }
  }
  useEffect(() => {
    getAllTask()
  }, [])
  const handleSearch = async (e: any) => {
    const { value } = e.target
    if (value !== '') {
      dispatch(searchTask(value.toLowerCase().trim()))
    } else {
      await getAllTask()
    }
  }
  const handleAddTask = (object: Task): void => {
    dispatch(addTask(object))
  }
  const handleDelete = (id: string): void => {
    dispatch(deleteTask(id))
  }
  const handleUpdate = (id: string, obj: Task): void => {
    dispatch(updateTask(id, obj))
  }
  return (
    <div>
      <List
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleAddTask={handleAddTask}
        handleSearch={handleSearch}
        task={task}
      />
    </div>
  )
}
export default TaskContainer
